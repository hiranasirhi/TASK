require('dotenv').config();

function checkApiKey(req, res, next) {
  const userKey = req.headers['x-api-key'];
  if (userKey && userKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }
}

module.exports = checkApiKey;
