const express = require('express');
const app = express();

const db = require('./models');
// async function testConnection() {
//     try {
//       await db.sequelize.authenticate();
//       console.log('Connection has been established successfully.');
//     } catch (error) {
//       console.error('Unable to connect to the database:', error);
//     }
//   }

// testConnection();

db.sequelize.sync().then((req) => {
    console.log('Database connected');
    app.listen(3001, () => {
        console.log(`Server started on  ${'http://localhost:3001'}`);
    });
})

