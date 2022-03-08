const express = require('express');
const router = express.Router();

const data = require("../db/forTestPurpose.json");

/* GET posts and query from url */
router.get('/', function (req, res, next) {
    console.log(req.query, " - req.query");
    if (req.query.tags && req.query.tags[0] != null) {
        const queryTags = req.query.tags.split(',');
        const result = { posts: [] };
        data.posts.forEach((postUnit) => {
            postUnit.tags.forEach((tag) => {
                const index = queryTags.indexOf(tag);
                if (index !== -1) { result.posts.push(postUnit); }
            })
        });
        res.render('posts', { answer: JSON.stringify(result) });
    } else res.status(400).send('{"error": "The tag parameter is required"}\n');
});

module.exports = router;
