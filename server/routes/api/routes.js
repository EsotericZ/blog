let express = require('express');
let router = express.Router();

const userController = require('../../controllers/userController');

router.get('/', function (req, res) {
    res.send('Welcome to the API');
});

router.get('/users/getAllUsers', userController.getAllUsers);

module.exports = router;