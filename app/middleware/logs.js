const middleware = (req, res, next)=>{
    console.log('Terjadi request ke path: ', req.path)
    next()
}

module.exports = middleware;