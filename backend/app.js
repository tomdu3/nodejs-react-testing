const express = require('express');
const app = express();

const db = require('./models');

const { Restaurants } = require('./models');

app.get('/select', (req, res) => {
    res.send('select')
})

app.get('/insert', (req, res) => {
    Restaurants.create({
        name: 'Sushi Garden',
        description: 'Japanese Restaurant',
        address: '123 Main St',
        city: 'New York',
        state: 'NY'
    }).catch(err => {
        if (err) {
        console.log(err);
    }
    })

    res.send('insert')
})

app.get('/delete', (req, res) => {
    res.send('delete')
})
db.sequelize.sync().then((req) => {
    console.log('Database connected');
    app.listen(3001, () => {
        console.log(`Server started on  ${'http://localhost:3001'}`);
    });
})

