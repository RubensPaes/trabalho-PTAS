const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'jeferson') {
        next(); 
    } else {
        res.status(401).send('Não autorizado');
    }
};

module.exports = authMiddleware;