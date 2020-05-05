const request = require("supertest").agent;
const app = require("../app");

const handleTestError = require("../utils/handleTestError");

let eventHash;

// POST METHOD
describe("POST - Event", () => {
  it("POST - Should create a new event", (done) => {
    request(app.listen())
      .post("/event")
      .send({
        name: "Guilherme",
        lastName: "Vecino",
        email: "guilherme.vecino@gmail.com",
        eventDate: "2020-05-04T15:10:48.550Z",
      })
      .expect((res) => {
        if (!res.body.eventHash)
          handleTestError("valid JSON response", res.body);
        else eventHash = res.body.eventHash;
      })
      .expect(200)
      .end(done);
  });

  it("POST - Should show Bad Request (400) error", (done) => {
    request(app.listen())
      .post("/event")
      .send({
        name: "Guilherme",
      })
      .expect((res) => {
        if (!res.body.error) handleTestError("valid error message", res.body);
      })
      .expect(400)
      .end(done);
  });
});

// GET METHOD
describe("GET - Event", () => {
  it("GET - Should get all events", (done) => {
    request(app.listen())
      .get("/event")
      .expect((res) => {
        if (res.body.length <= 0)
          handleTestError("1 or more event", res.body.length);
      })
      .expect(200)
      .end(done);
  });

  it("GET - Should show Not Found (404) error for a specific hash", (done) => {
    request(app.listen()).get("/event/abc").expect(404).end(done);
  });
});

// DELETE METHOD
describe("DELETE - Event", () => {
  it("DELETE - Should delete a specific event by hash", (done) => {
    request(app.listen())
      .delete("/event/" + eventHash)
      .expect(204)
      .end(done);
  });

  it("DELETE - Should show Not Found (404) error for a specific hash", (done) => {
    request(app.listen())
      .delete("/event/" + eventHash)
      .expect(404)
      .end(done);
  });

  it("GET - Should get event from a specific hash", (done) => {
    request(app.listen())
      .get("/event/" + eventHash)
      .expect(404)
      .end(done);
  });
});
