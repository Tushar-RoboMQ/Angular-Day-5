let async = require('async'),
    parseString = require('xml2js').parseString;
let userDAO = require('./userDAO');

/***API to get the article list */
let getUsers = (data, callback) => {
    async.auto({
        user: (cb) => {
            userDAO.getUsers({}, (err, data) => {
                if (err) {
                    console.log(data, 'data testing----');
                    cb(null, { "errorCode": 401, "statusMessage": "Servers are busy" });
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.user);
    })
}
module.exports = {
    getUsers: getUsers,

};