const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return Hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from CI/CD with GitHub Actions & Docker!🚀");
  });
});


 
