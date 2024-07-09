const dbpool = require('../config/database')

const getDataDb = ()=>{
    const SQLQUERY = 'SELECT * FROM users'
    
    return dbpool.execute(SQLQUERY);
}

module.exports = {
    getDataDb
}