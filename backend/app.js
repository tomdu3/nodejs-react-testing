const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log(`Server started on  ${'http://localhost:3001'}`);
});
