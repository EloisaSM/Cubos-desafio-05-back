require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  seeds: {
    directory: "./src/database/seeds",
  },
  migrations: {
    directory: ["./src/database/migrations"],
  },
};