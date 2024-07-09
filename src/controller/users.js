const userModels = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModels.getDataDb();

        res.json({
            'status': 200,
            'data': data,
        })
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            error: error,
        })
    }
}

const createUsers = (req, res) => {
    res.json({
        'status': 200,
        'data': [
            'Create data success',
            data = req.body

        ]
    })
}

const updateUsers = (req, res) => {
    const {id} = req.params; // this id must be same as routes params, i use 'id' btw
    console.log('Users id: ', id);
    res.json({
        message:'update users',
        data: {
            name: 'ridho',
            email:'yyy@gmail.com'
        }
    })
}

const deleteUsers = (req, res) => {
    const { id } = req.params; // this id must be same as routes params, i use 'id' btw
    console.log('Users id: ', id);
    res.json({
        message: 'delete users',
        data: {
            id: req.params,
        }
    })
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers,
}