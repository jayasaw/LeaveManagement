var leaveModel = require('./leaveModel.js');

function fetchGridData(req, res, next) {
    console.log(" I am ahere " + req.method);
    if (!req.query) res.json([]);

    leaveModel.find(req.query).then(function (gridData) {
        res.json(gridData);
    }).catch(function (err) {
        res.json({ error: err.message });
    })
}

function updateLeaveStatus(req, res, next) {

    leaveModel.findById(req.params.id).then(function (LeaveData) {
        LeaveData.leaveStatus = req.body.status;
        LeaveData.save().then(function (updatedData) {
            res.json(updatedData);
        })
    }).catch(function (err) {
        res.json({ error: err.message });
    })
}


module.exports = { fetchGrid: fetchGridData, updateLeaveStatus: updateLeaveStatus }