const dbpool = require('../config/database')

const getDataDb = () => {
    const SQLQUERY = 'SELECT * FROM users'

    return dbpool.execute(SQLQUERY);
}

const createNewUser = (body) => {
    const SQLQUERY = `INSERT INTO users (name, email, address) VALUE ("${body.name}", "${body.email}", "${body.address}")`

    return dbpool.execute(SQLQUERY);
}

const updateUsers = (body, id) => {
    const SQLQUERY = `UPDATE users SET name=?, email=?, address=? WHERE id=?`;

    return dbpool.execute(SQLQUERY, [body.name, body.email, body.address, id])
};

const deleteUsers = (id)=>{
    const SQLQUERY = `DELETE from users where id=?`;

    return dbpool.execute(SQLQUERY, [id])
}

module.exports = {
    getDataDb,
    createNewUser,
    updateUsers,
    deleteUsers,
}