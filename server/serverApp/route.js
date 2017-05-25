var express = require('express');
var router = express.Router();

var reg = require('./employee/register.js');
var log = require('./employee/login.js');
var manager = require('./employee/manager.js');
var employee = require('./employee/employee.js');
var leave = require('./leave/leave.js');
var grid = require('./leave/grid.js');

router.use(function (req, res, next) {
    console.log('I am here');
    next()
})

router.route('/login')
    .post(log.verifyUser)

router.route('/employee')
    .get(employee.fetch)

router.route('/manager')
    .get(manager.fetch)

router.route('/register')
    .post(reg.post)

router.route('/leave')
    .post(leave.saveLeave)

router.route('/grid')
    .get(grid.fetchGrid)

router.route('/grid/:id')
    .put(grid.updateLeaveStatus)
    
router.use(function (req, res, next) {
    res.json({ error: 'route doed not match' });
})
// this will run if there is any error
router.use(function (err, req, res, next) {
    res.json({ error: err.message });
})
module.exports = router;



// router.post('/user', function (req, res, next) {
//     res.end(' I am here ' + req.method);
// })

// router.get('/user', function (req, res, next) {
//     res.end(' I am here ' + req.method);
// })

// router.put('/user', function (req, res, next) {
//     res.end(' I am here ' + req.method);
// })

// router.delete('/user', function (req, res, next) {
//     res.end(' I am here ' + req.method);
// })




