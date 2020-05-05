const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const EventModel = require("../database/modules/Event");

const eventData = {
  name: "Guilherme",
  lastName: "Vecino",
  email: "guilherme.vecino@gmail.com",
  eventDate: new Date(),
  eventHash: "9c68c8",
};

describe("MONGO - Event Model Test", () => {
  beforeAll(async () => {
    await mongoose.connect(
      `${process.env.MONGODB_URI}`,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  it("Should Create/Save an event", async (done) => {
    const validEvent = new EventModel(eventData);
    const savedEvent = await validEvent.save();

    expect(savedEvent._id).toBeDefined();
    expect(savedEvent.name).toBe(eventData.name);
    expect(savedEvent.lastName).toBe(eventData.lastName);
    expect(savedEvent.email).toBe(eventData.email);
    expect(savedEvent.eventDate).toBe(eventData.eventDate);
    expect(savedEvent.eventHash).toBe(eventData.eventHash);
    done();
  });

  it("Should get a 'required filed' error", async (done) => {
    let err;
    const invalidEvent = new EventModel({ name: "Guilherme" });

    try {
      const savedInvalidEvent = await invalidEvent.save();
      error = savedInvalidEvent;
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.lastName).toBeDefined();
    done();
  });

  it("Should delete an event by eventHash", async (done) => {
    let err;
    EventModel.deleteOne(
      {
        eventHash: eventData.eventHash,
      },
      (error) => (err = error)
    );

    expect(err).toBeUndefined();
    done();
  });
});
