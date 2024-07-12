const express = require('express');
const app = express();
const db = require('./models');
const { User } = require('./models');

const bcrypt = require('bcrypt');
// const cookieParser = require('cookie-parser');
// const {createTokens, validateToken} = require('./controllers/jwt.authentication');

app.use(express.json());
// app.use(cookieParser());

app.post('/register', async (req, res) => {

    const { username, password, email } = req.body;
    // hashing the password
    bcrypt.hash(password, 10).then((hash) => {
        User.create({
            username: username,
            password: hash,
            email: email
        }).then(() => {
            res.json('User created');  // returning response if user is created
        }).catch((err) => {
            res.status(400).json({ error: err })  // returning error if user is not created
        })
    })
    console.log(`Request method: ${req.method}, Response status code: ${res.statusCode}`);
    console.log(`Request body: ${JSON.stringify(req.body)}`);
})

app.post('/login', async (req, res) => {
    res.json('login');
})

app.get('/profile', async (req, res) => {
    res.json('profile');
})

db.sequelize.sync( { force: true }).then((req) => {
    console.log('Database connected');
    app.listen(3001, () => {
        console.log(`Server started on  ${'http://localhost:3001'}`);
    });
})

// async function testConnection() {
//     try {
//       await db.sequelize.authenticate();
//       console.log('Connection has been established successfully.');
//     } catch (error) {
//       console.error('Unable to connect to the database:', error);
//     }
//   }

// testConnection();

// db.sequelize.sync().then((req) => {
//     console.log('Database connected');
//     app.listen(3001, () => {
//         console.log(`Server started on  ${'http://localhost:3001'}`);
//     });
// })

