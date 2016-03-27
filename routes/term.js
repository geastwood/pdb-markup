var express = require('express');
var router = express.Router();
var model = require('../model/Term');

router.get('/:id', function (req, res) {

    var query = model.Term.findOne({'termId': req.params.id});

    query.select('term frequency').exec(function (err, term) {
        if (err) {
            throw new Error(err);
        }

        res.json(term);
    });
});
module.exports = router;
