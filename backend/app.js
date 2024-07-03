const express = require('express');
const app = express();

const db = require('./models');

db.sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(3001, () => {
        console.log(`Server started on  ${'http://localhost:3001'}`);
    });
})
