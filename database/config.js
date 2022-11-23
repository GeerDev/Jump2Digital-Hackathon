const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected database");
  } catch (error) {
    console.error(error);
    throw new Error("Error when starting the database");
  }
};

module.exports = {
  dbConnection,
};