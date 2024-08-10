const { mongoose } = require("mongoose");

const connectDB = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully !!");
  } catch (error) {
    console.log(`Error connecting database`);
  }
};

module.exports = {connectDB};
