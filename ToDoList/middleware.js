const fs = require('fs');
// Create a middleware function for logging requests
function logger(req, res, next) {
const logMessage = `${new Date().toISOString()} -
${req.method} ${req.url}\n`;
// Append the log message to a log file
fs.appendFile('access.log', logMessage, (err) => {
if (err) {
console.error('Error writing to log file:', err);
}
});
next();
}
// Use the logger middleware to log requests
app.use(logger)