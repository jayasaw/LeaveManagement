// Employee Model;
var EmployeeModel = require('./empModel.js');
/**
 * register Data Model
 */
function saveEmployee(req, res, next) {

    console.log(" I am ahere " + req.method);
    checkDuplicateEmailId(req.body.emailId)
        .then(function (isEmailExists) {
            if (isEmailExists) {
                res.json({ error: 'Email Already Exists' });
                return false;
            }

            generateId()
                .then(function (id) {

                    var employee = new EmployeeModel(req.body); // create to save the data for fisrt time
                    employee.empId = id || 1000;
                    employee.save().then(function (data) {
                        res.json(data);
                    }).catch(function (err) {
                        res.json({ error: err.message });
                    });
                });

        })
}
/**
 * cehck for email id already exists
 */

function checkDuplicateEmailId(email) {
    return EmployeeModel.find({ emailId: email })
        .then(function (data) {
            if (data.length) {
                return true;
            } else {
                return false;
            }

        })
}

/**
 * generate id for new employees
 */

function generateId() {

    return EmployeeModel
        .find()
        .sort({ _id: -1 })
        .limit(1).then(function (data) {
            console.log(data);
            if (!data.length) {
                return 1000;
            }

            return data[0].empId + 1;
        })
        .catch(function (err) {
            throw new Error(err.message);
        })

}

function error(text) {
    return JSON.stringify({ error: text });
}

module.exports = { post: saveEmployee };