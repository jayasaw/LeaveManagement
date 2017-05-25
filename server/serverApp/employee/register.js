var empSchema = require('./empModel.js');


/**
 * register Data Model
 */
function post(req, res, next) {

    console.log(" I am ahere " + req.method);

    var Employee = empSchema();
    var employee = new Employee(req.body); // create to save the data for fisrt time

    employee.save().then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.end(err);
    })


}

function get(req, res, next) {

    console.log(" I am ahere " + req.method);

    var employee = empSchema();
    //var user = new User(req.body);
    // user.save(function (err, data) {
    //     if (err) res.end(err);
    //     res.end(data);
    // })
    //_id": "5921eff8c5dbdf19087bd231"


    // user.findOne({"_id": "5921eff8c5dbdf19087bd231"}).then(function (data) {
    //     res.json(data);
    // }).catch(function (err) {
    //     res.end(err);
    // })

    user.findOne({ "firstName": "Jaya" }).then(function (data) {
        data.lastName = 'Saw2'
        data.save().then(function(data){
            res.json(data);
        });
       // res.json(data);
    }).catch(function (err) {
        res.end(err);
    })
    // user.find().then(function (data) {
    //     res.json(data);
    // }).catch(function (err) {
    //     res.end(err);
    // })


}




module.exports = { post: post, get: get };