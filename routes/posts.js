const express = require('express');
const router = express.Router();

const data = require("../db/forTestPurpose.json");

/* GET posts and params from url */
router.get('/', function (req, res, next) {
    const queryTags = req.query.tags.split(',');
    if (queryTags !== '') {
        console.log(queryTags, " - tags");
        const result = { posts: [] };
        data.posts.forEach((postUnit) => {
            // console.log(postUnit, " - postUnit");
            postUnit.tags.forEach((tag) => {
                const index = queryTags.indexOf(tag);
                if (index !== -1) { result.posts.push(postUnit); }
            })
        });
        console.log(result, " - result");
        console.log(result.posts.length, " - result.posts.length");
        console.log(data.posts.length, " - data.length");
        res.render('posts', { answer: JSON.stringify(result) });
    } else { }
});

module.exports = router;
