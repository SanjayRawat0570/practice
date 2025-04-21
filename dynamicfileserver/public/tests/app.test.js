const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../index');

global.score = 1;

describe("File server app", () => {
  beforeAll(() => {
    fs.mkdirSync(path.join(__dirname, "test"), { recursive: true });
    fs.writeFileSync(path.join(__dirname, "test", "test.txt"), "test content");
  });

  it("serves directory listings", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('__tests__');
    global.score += 2;
  });

  it("serves file content directly", async () => {
    const res = await request(app).get('/__tests__/test/test.txt');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("test content");
    global.score += 2;
  });

  it("returns 404 for non-existent file", async () => {
    const res = await request(app).get('/does-not-exist');
    expect(res.statusCode).toEqual(404);
    expect(res.text).toContain('404');
    global.score += 1;
  });
});
