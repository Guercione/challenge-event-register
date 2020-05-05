const mongoose = require("../index");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  eventHash: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  __v: { type: Number, select: false },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
