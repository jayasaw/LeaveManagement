
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


function empSchema() {

    var Schema, employee
    Schema = mongoose.Schema;

    employee = {
        firstName: String,
        lastName: String,
        emailId: String,
        password: String,
        isEmployee: Boolean,
        isManager: Boolean
    }

    var empSchema = new Schema(employee);
    var Employee
    //db.users.find()
    if (!mongoose.models.user) {
        Employee = mongoose.model('user', empSchema);
    } else {
        Employee = mongoose.model('user');
    }
    //var Employee = mongoose.model('user', empSchema);

    // db.tests.find();
    // var User = mongoose.model('test', empSchema);


    return Employee;
}

module.exports = empSchema;