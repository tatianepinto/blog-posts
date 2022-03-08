const express = require('express');
const router = express.Router();
const data = require("../db/forTestPurpose.json");

/* GET posts and query from url */
router.get('/', function (req, res, next) {
    if (req.query.tags && req.query.tags[0] != null) {
        // res.clearCookie('sorted_likes');
        // console.log(req.cookies, " - req.cookies");
        const errorResponse = () => res.status(400).send('{"error": "sortBy parameter is invalid"}\n');
        const renderResult = (name) => {
            if (req.cookies[name]) res.render('posts', { answer: req.cookies[name] });
            else {
                res.cookie(name, JSON.stringify(result));
                res.render('posts', { answer: JSON.stringify(result) });
            }
        }

        const queryTags = req.query.tags.split(',');
        let result = { posts: [] };
        data.posts.forEach((postUnit) => {
            postUnit.tags.forEach((tag) => {
                const index = queryTags.indexOf(tag);
                if (index !== -1) { result.posts.push(postUnit); }
            })
        });
        const sorts = ['id', 'reads', 'likes', 'popularity'];
        const querySortBy = req.query.sortBy;
        const queryDirection = req.query.direction;
        let asc_desc = 'desc';
        if (!querySortBy) renderResult('default');
        else if (sorts.indexOf(querySortBy) !== -1) {
            result.posts.sort((a, b) => {
                if (!queryDirection || queryDirection === 'asc')
                    return a[querySortBy] - b[querySortBy];
                else if (queryDirection === 'desc')
                    return b[querySortBy] - a[querySortBy];
            });
            if (!queryDirection || queryDirection === 'asc') asc_desc = 'asc';
            renderResult('sorted_'+asc_desc+'_'+querySortBy);
        } else errorResponse();
    } else res.status(400).send('{"error": "The tag parameter is required"}\n');
});

module.exports = router;
