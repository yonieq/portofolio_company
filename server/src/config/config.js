module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'ksg_portofolio',
        user: process.env.DB_USER || 'ksg_portofolio',
        password: process.env.DB_PASS || '12345678',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './ksg_portofolio.sqlite'
        }
    }
}