const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send("Hello from CI/CD with GitHub Actions & Docker!🚀")
);

// ✅ Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () =>
    console.log(`App running on port ${PORT}`)
  );
}

module.exports = app; // Export app for testing
