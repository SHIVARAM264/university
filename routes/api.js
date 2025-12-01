const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { getDB } = require('../config/database');
const router = express.Router();

// Create uploads directory if it doesn't exist
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'photo-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// Generate USN
async function generateUSN() {
    const db = getDB();
    const count = await db.collection('applications').countDocuments();
    const nextNumber = (count + 1).toString().padStart(4, '0');
    return `ENG25${nextNumber}`;
}

// Handle form submission
router.post('/submit-application', upload.single('photo'), async (req, res) => {
    try {
        const { name, dob, gender, email, phone, course, address } = req.body;
        
        // Basic validation
        if (!name || !email || !phone || !course) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please fill all required fields' 
            });
        }

        const db = getDB();
        const usn = await generateUSN();
        
        const application = {
            usn,
            name,
            dob,
            gender,
            email,
            phone: phone.replace(/\s/g, ''), // Remove spaces
            course,
            address,
            photo: req.file ? req.file.filename : null,
            submittedAt: new Date()
        };

        await db.collection('applications').insertOne(application);
        
        console.log('New application received:', application);
        
        res.json({ 
            success: true, 
            message: 'Application submitted successfully!',
            usn: usn
        });
    } catch (error) {
        console.error('Error processing application:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error. Please try again.' 
        });
    }
});

// Get all applications (for admin)
router.get('/applications', async (req, res) => {
    try {
        const db = getDB();
        const applications = await db.collection('applications').find({}).toArray();
        res.json({ success: true, applications });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching applications' });
    }
});

// Get application by USN
router.get('/application/:usn', async (req, res) => {
    try {
        const db = getDB();
        const application = await db.collection('applications').findOne({ usn: req.params.usn });
        if (!application) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }
        res.json({ success: true, application });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching application' });
    }
});

module.exports = router;