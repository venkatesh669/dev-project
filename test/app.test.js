const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from CI/CD with GitHub Actions & Docker! 🚀');
});

// Only start server if this file is run directly (not during tests)
if (require.main === module) {
  app.listen(3000, () => {
    console.log('App running on port 3000');
  });
}

module.exports = app; // <-- important for tests

