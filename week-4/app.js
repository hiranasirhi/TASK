const express = require('express');
const app = express();
require('dotenv').config(); // Load API key from .env
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');

// === 1. Security Headers ===
app.use(helmet());

// === 2. Content Security Policy ===
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://trusted.cdn.com'],
      styleSrc: ["'self'", 'https://trusted.cdn.com'],
      imgSrc: ["'self'", 'data:', 'https://images.example.com'],
      connectSrc: ["'self'", 'https://api.example.com'],
    },
  })
);

// === 3. HSTS (HTTPS Enforcement) ===
app.use(
  helmet.hsts({
    maxAge: 63072000,
    includeSubDomains: true,
    preload: true,
  })
);

// === 4. CORS Configuration ===
const corsOptions = {
  origin: ['https://your-frontend.com'], // replace with your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// === 5. Rate Limiting ===
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit per IP
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// === 6. Parse JSON Body ===
app.use(express.json());

// === 7. API Key Middleware ===
function checkApiKey(req, res, next) {
  const userKey = req.headers['x-api-key'];
  if (userKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

// === 8. Routes ===
app.get('/', (req, res) => {
  res.send('Public route');
});

// Secured route with API key protection
app.get('/api/secure-data', checkApiKey, (req, res) => {
  res.json({ message: 'This is protected data' });
});

// === 9. Start Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
