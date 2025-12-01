const express = require('express');
const { getDB } = require('../config/database');
const router = express.Router();

// Get application by USN
router.get('/:usn', async (req, res) => {
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