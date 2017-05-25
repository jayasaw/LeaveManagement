var leaveModel = require('./leaveModel.js');

function saveLeave(req,res,next){
     console.log(" I am avalible " + req.method);
//    var Leave = leaveModel();
     var leave = new leaveModel(req.body);

    leave.save().then(function(data){
       res.json(data);
    }).catch(function (err) {
        res.end(error(err.message));
    })
}

function error(text) {
    return JSON.stringify({ error: text });
}

module.exports = { saveLeave: saveLeave}; 
