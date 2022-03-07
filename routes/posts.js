const express = require('express');
const router = express.Router();

const data = require("../db/forTestPurpose.json");

/* GET posts and params from url */
router.get('/', function (req, res, next) {
    const tags = req.query;
    console.log(tags, " - tags");
    const result = data.posts.map(postUnit => {
        postUnit.tags.map(tag => tag === tags);
    });

    res.render('posts', { answer: result });
});

module.exports = router;
