
var mongoose = require('mongoose')
mongoose.promise = global.promise;

function  leaveSchema(){
    var Schema, leaveData
    Schema = mongoose.Schema;

     leaveData = {
        empName : String,
        empId : Number,
        managerEmpId : String,
        leaveType : String,
        startDate : Date,
        endDate : Date,
        leaveReason : String,
        leaveStatus : String,
        backupEmpName : String
    }
   var leaveSchema = new Schema(leaveData);
    return mongoose.model('leave', leaveSchema);
} 
module.exports = leaveSchema();


//     var leaveSchema = new Schema(leaveData);
//  var Leave;
//     //db.users.find()
//     if (!mongoose.models.leave) {
//         Leave = mongoose.model('leave', leaveSchema);
//     } else {
//         Leave = mongoose.model('leave');
//     }
//     return Leave;
// } 