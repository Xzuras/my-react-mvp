module.exports = {
    dev: {
        connectionString: "postgres://postgres:postgrespw@localhost:55000/instruments",
        port: '5000'
    },
    production: {
        connectionString: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
        port: process.env.PORT
    }
}