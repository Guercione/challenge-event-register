const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
