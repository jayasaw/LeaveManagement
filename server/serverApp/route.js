var express = require('express');
var router = express.Router();

var reg = require('./employee/register.js');
var log = require('./employee/login.js');
var leaveApp = require('./leave/leave.js')
//reg = {post:function post{...}}
//router.route
//router.use
//router.get
//router.post
//router.put
//router.delete
router.use(function (req, res, next) {

    console.log('I am here');
    next()
})

router.route('/login')
    .post(log.verifyUser)


router.route('/register')
    .post(reg.post)
    .get(reg.get)

    router.route('/leave')
        .post(leaveApp.post)


function test(req, res, next) {
    res.end(' I am here ' + req.method);
}

router.use(function (req, res, next) {
    res.end('route does not match');
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




