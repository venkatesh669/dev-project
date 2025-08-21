 const request = require("supertest");
const app = require("../app");

let server;

beforeAll((done) => {
  // Start the server before running tests on port 4000 (or any free port)
  server = app.listen(4000, done);
});

afterAll((done) => {
  // Close the server after tests finish
  server.close(done);
});

describe("GET /", () => {
  it("should return Hello message", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from CI/CD with GitHub Actions & Docker! 🚀");
  });
});


