const express = require('express');
const router = express.Router();
const checkApiKey = require('../middleware/apiKeyAuth');

router.get('/data', checkApiKey, (req, res) => {
  res.json({ message: 'This is protected data accessed with a valid API key.' });
});

module.exports = router;
