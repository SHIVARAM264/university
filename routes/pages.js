const express = require('express');
const path = require('path');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Pages routes
const pages = [
    'about', 'chancellor', 'prochancellor', 'vicechancellor',
    'boardofgoverns', 'boardofmanagement', 'organogram', 'ugc',
    'aicte', 'nirf-eng', 'annual', 'school', 'commerce', 'computer',
    'law', 'science', 'executive', 'arts', 'design', 'healthscience',
    'mbbs', 'underprogram', 'postprogram', 'admission', 'directadm',
    'cour_elg_fee', 'hostelfee', 'inter-admin', 'inter-rel',
    'studyinIndia', 'phd1', 'phd2', 'research', 'regulatiion',
    'poverview', 'cplacement', 'erecruiters', 'naac', 'library',
    'hostel', 'contact-us', 'RegistartionForm', 'student-lookup'
];

pages.forEach(page => {
    router.get(`/${page}`, (req, res) => {
        res.sendFile(path.join(__dirname, `../pages/${page}.html`));
    });
});

module.exports = router;