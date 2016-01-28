var express = require('express');
var router = express.Router();
var swig = require('swig');
var tpl = swig.compile(`
<h1>title for {{keyword}}</h1>
<ul>
<li data-tooltip="first tooltip">first</li>
<li class="second" data-tooltip="second tooltip">second</li>
<li data-toggle="tooltip" data-placement="bottom" title="i'm a tooltip for {{keyword}}">{{keyword}}</li>
</ul>
`);

router.get('/:keyword', (req, res, next) => {
  res.json({
    markup: tpl({keyword: req.params.keyword}),
    action: 'init'
  });
});

module.exports = router;
