require('dotenv').config()

const config ={
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUSER: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    db_Name: process.env.DB_NAME,
    db_Port: process.env.DB_PORT

}

module.exports = {config};


