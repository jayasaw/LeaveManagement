// Employee Model;
var EmployeeModel = require('./empModel.js');

/**
 * fetch manager lists
 */

function fetchManager(req, res, next) {
    EmployeeModel.find({ isManager: true }).then(function (managerData) {
        var manager = [];
        managerData.map(function (item) {
            manager.push({ code: item.empId, description: item.firstName + ' ' + item.lastName });
        })
        res.json(manager);
    }).catch(function (err) {
        res.json({ error: err.message });
    })
}


module.exports = { fetch: fetchManager }