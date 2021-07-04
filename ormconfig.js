module.exports = {
    "type":"postgres",
    "url": process.env.DATABASE_URL,

    "connectionString": "connectionString",
    "ssl": { "rejectUnauthorized": false },
    "entities": [
        "./dist/models/*.js"
    ],
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}