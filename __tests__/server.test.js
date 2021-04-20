"use strict";

const { server } = require("../src/server");
const supertest = require("supertest");
const mockReq = supertest(server);

describe("WEB SERVER", () => {
  it("404 on a bad route", async () => {
    const res = await mockReq.get("/foo");
    expect(res.status).toEqual(404);
  });

  it("404 on a bad method", () => {
    return mockReq.post("/person").then((data) => {
      expect(data.status).toEqual(404);
    });
  });

  it("500 if no name in the query string", () => {
    return mockReq.get("/person").then((data) => {
      expect(data.status).toEqual(500);
      // expect(data.query).toBeUnDefined()
    });
  });
  
  it("200 if the name is in the query string and output object is correct", () => {
    return mockReq.get("/person?name=Bob").then((data) => {
      expect(data.status).toEqual(200);
      expect(typeof data.body).toEqual("object");
    });
  });
});
