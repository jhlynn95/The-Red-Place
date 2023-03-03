require("dotenv").config();

module.exports = [
  {
    "username": process.env.ADMIN_USERNAME,
    "email": process.env.ADMIN_EMAIL,
    "password": process.env.ADMIN_PASSWORD
  }
];