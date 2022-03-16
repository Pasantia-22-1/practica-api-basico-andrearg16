const express = require('express');
const router = express.Router();
const controllers = require('../controlers/task.ctl.js')

router.get('/home', controlers.getNone);

router.get('/contact', controlers.getContact);

router.get('/profile', controlers.getPorfile);

router.get('/signin', controlers.getSignin);

router.get('/signup', controlers.getSignup);

module.exports = router;