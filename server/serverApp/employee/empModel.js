
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
        isManager: Boolean,
        empId: Number
    }
    var empschema = new Schema(employee);
    return mongoose.model('employee', empschema);
}
module.exports = empSchema();