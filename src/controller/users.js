const getAllUsers = (req, res) => {
    const data = [{
        'id': '1',
        'nama': 'ridho',
        'umur': 23,
        'hobby': [{
            'hobby1': 'basketball',
            'hobby2': 'play games',
        },
        ],
    },
    {
        'id': '2',
        'nama': 'phageis',
        'umur': 23
    },
    ];
    res.json({
        'status': 200,
        'data': data,
    })
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