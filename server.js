const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const itemRoutes = require('./routes/item');

app.use(express.json());

app.use('/', indexRoutes);
app.use('/items', itemRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});