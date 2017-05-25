var leaveSchema = require('./leaveModel.js');

function post(req,res,next){
    console.log('i am avaliable ' + req.method);
   var Leave = leaveSchema();
    var leave = new Leave(req.body);

    leave.save().then(function(data){
       res.json(data);
    }).catch(function (err) {
        res.end(err);
    })
}

module.exports = { post: post}; 
