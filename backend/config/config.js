module.exports = {
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DEV_DATABASE_URL: process.env.DEV_DATABASE_URL || "Information Not Found",
  TESTING_DATABASE_URL:
    process.env.TESTING_DATABASE_URL || "Information Not Found",
  JWT_SECRET:
    process.env.JWT_SECRET || "Wow, this app will change a lot of lives",
};
