const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();


const uploadDir = path.join(__dirname, '../data/uploads');


if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


router.get('/', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ message: 'Failed to read uploads' });

    const fileData = files.map(filename => {
      const stats = fs.statSync(path.join(uploadDir, filename));
      return {
        filename: filename,
        originalname: filename,
        uploadedAt: stats.birthtime
      };
    });

    res.json(fileData);
  });
});

module.exports = router;
