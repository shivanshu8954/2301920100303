const winston = require('winston');
const fs = require('fs');
const path = require('path');

// logs folder banayein agar nahi hai
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Logger configure karein
const logger = winston.createLogger({
    level: 'debug',  // minimum level
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message, funcName = 'unknown' }) => {
            return `${timestamp} - ${level.toUpperCase()} - [${funcName}] - ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),  // console par bhi dikhe
        new winston.transports.File({ 
            filename: path.join(logDir, 'app.log')  // file mein save
        })
    ]
});

module.exports = logger;