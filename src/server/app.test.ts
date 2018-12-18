import request from "supertest";

import app from "./app";

describe("Test server paths", () => {
  it("GET on / path", async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
  });
});
