const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  //Connecting to database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("successfully connected");
    })
    .catch((error) => {
      console.log("database connection failed exiting now...");
      console.error(error);
      process.exit(1);
    });
};