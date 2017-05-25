
var mongoose = require('mongoose')
mongoose.promise = global.promise;

function  leaveSchema(){

  var Schema, leaveData
    Schema = mongoose.Schema;

     leaveData = {
        empName : String,
        empId : Number,
        empManagerName : String,
        leaveType : String,
        startDate : Number,
        endDate : Number,
        leaveReason : String,
        leaveStatus : String,
        backupEmpName : String
    }
    var leaveSchema = new Schema(leaveData);
 var Leave;
    //db.users.find()
    if (!mongoose.models.leave) {
        Leave = mongoose.model('leave', leaveSchema);
    } else {
        Leave = mongoose.model('leave');
    }
    return Leave;
} 
module.exports = leaveSchema;