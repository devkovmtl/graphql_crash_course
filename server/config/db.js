const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

const connectDB = async () => {
  const connection = await mongoose.connect(MONGO_URI);

  console.log(
    `MongoDB connected: ${connection.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
