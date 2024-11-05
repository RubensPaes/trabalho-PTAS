const logMiddleware = (req, res, next) => {
    const data = new Date();
    console.log(`[${data.toISOString()}] ${req.method} ${req.url}`);
    next(); 
};

module.exports = logMiddleware;