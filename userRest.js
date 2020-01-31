let express = require('express'),
    router = express.Router(),
    userService = require('./userService');

/**Api to get the list of user */
router.get('/get-all-user', (req, res) => {
    userService.getUsers(req.query, (data) => {
        res.send(data);
    });
});

module.exports = router;