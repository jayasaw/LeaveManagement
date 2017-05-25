
var empSchema = require('./empModel.js');


function verifyUser(req, res, next) {

    if (!req.body.emailId && !req.body.password) res.end(error('Data not provided.'));

    var employee = empSchema();

    employee.findOne({ emailId: req.body.emailId })
        .then(function (data) {
            if (!data) res.end(error('email id does not exists.'));

            if (data.password == req.body.password) {

                var resData = { fullName: data.firstName + ' ' + data.lastName, isManager: data.isManager }
                res.end(JSON.stringify(resData));
            } else {
                res.end(error('does not match the password. Please re try.'));
            }

        }).catch(function (err) {
            res.end(error('there is some error'));
        })


}

function error(text) {
    return JSON.stringify({ error: text });

}




module.exports = { verifyUser: verifyUser };