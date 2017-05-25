var EmployeeModel = require('./empModel.js');

/**
 * to get the emoployee
 */

function fetchEmployee(req, res, next) {

    console.log(" I am ahere " + req.method);
    EmployeeModel.find().then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json({ error: err.message });
    })


}

module.exports = { fetch: fetchEmployee }