const items = []; 


const getItems = (req, res) => {
    res.json({ items });
};

module.exports = {
    getItems,
};