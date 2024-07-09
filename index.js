const express = require('express');
const usersRoute = require('./routes/users.js');
const middlewareLogs = require('./middleware/logs.js')
require('dotenv').config();

// SETTING PORT MENGGUNAKAN ENV, JIKA TIDAK TERBACA DEFAULTNYA ADALAH 5000
const port = process.env.PORT || 5000

const app = express();

// middleware untuk request 
app.use(middlewareLogs)

// middleware untuk post method
app.use(express.json())

app.use('/users', usersRoute)



app.listen(port, () => {
    console.log(`Server berhasil di running di port ${port}`)
});