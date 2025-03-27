module.exports = {
    WHITELIST_URLS:[
        "http://localhost:3000"
    ],
    PORT:process.env.PORT || 8000,
    DB_URL:process.env.DB_URL,
    ENVIRONMENT:process.env.ENVIRONMENT || "development",
    DB_PROVIDER:process.env.DB_PROVIDER
}