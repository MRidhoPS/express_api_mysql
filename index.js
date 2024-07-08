const express = require('express');
const usersRoute = require('./routes/users.js');
const middlewareLogs = require('./middleware/logs.js')

const app = express();

// middleware untuk request 
app.use(middlewareLogs)

// middleware untuk post method
app.use(express.json())

app.use('/users', usersRoute)

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000')
});