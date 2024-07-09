const userModels = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModels.getDataDb();

        res.status(200).json({
            'status': 200,
            'data': data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error,
        })
    }
}

const createUsers = async (req, res) => {
    const { body } = req;

    if(!body.name || !body.email || !body.address){
        return res.status(400).json({
            message:'Anda mengirimkan data yang salah'
        })
    }

    try {
        await userModels.createNewUser(body);
        res.status(201).json({
            'status': 200,
            'data': [
                'Create data success',
                data = req.body

            ]
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error,
        })
    }
}

const updateUsers = async (req, res) => {
    const { body } = req;
    const { id } = req.params; // this id must be same as routes params, i use 'id' btw
    try {
        await userModels.updateUsers(body, id)
        res.status(201).json({
            message: 'update users success',
            data: { id: id, ...body },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error,
        })
    }
}

const deleteUsers = async (req, res) => {

    const { id } = req.params; // this id must be same as routes params, i use 'id' btw
    try {
        await userModels.deleteUsers(id);
        res.json({
            message: 'delete users success',
            data: {
                id: id,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers,
}