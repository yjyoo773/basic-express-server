"use strict";

const { server } = require("../src/server");
const supertest = require("supertest");
const mockReq = supertest(server);

describe("LOGGER TEST", () => {
  it("placeholder so npm test doesn't cause error",()=>{
      expect(true).toEqual(true)
  });
});
