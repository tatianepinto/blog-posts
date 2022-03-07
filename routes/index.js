const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Blog Posts - Assignment by Tatiane Pinto' });
});

module.exports = router;
