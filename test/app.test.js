const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  test("should return hello message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello World!");
  });
});

describe("GET /health", () => {
  test("should return UP status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });
});