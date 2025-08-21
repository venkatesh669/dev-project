const request = require("supertest");
const app = require("../app");

let server;

beforeAll((done) => {
  server = app.listen(3000, done); // Start server before tests
});

afterAll((done) => {
  server.close(done); // Close server after tests
});

describe("GET /", () => {
  it("should return Hello message", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from CI/CD with GitHub Actions & Docker!🚀");
  });
});

 
