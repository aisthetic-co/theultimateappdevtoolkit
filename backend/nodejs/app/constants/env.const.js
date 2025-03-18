//ALL ENV variables have to be refrerenced here
module.exports = {
    PORT:process.env.PORT || 8000,
    DB_URL:process.env.DB_URL,
    ENVIRONMENT:process.env.ENVIRONMENT || "development"
}