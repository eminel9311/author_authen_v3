const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.MONGO_PORT,
  DB: process.env.DB
};