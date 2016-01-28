var express = require('express');
var router = express.Router();
var swig = require('swig');
var fs = require('fs');
var path = require('path');
var testData = require(path.join(__dirname, '/../data/testData.json'));

var keywordListTpl = fs.readFileSync(path.join(__dirname, '/../template/keywordList.html'), 'utf8');
var tpl = swig.compile(keywordListTpl);

var randomKeywords = (length, data) => {
  var keys = Object.keys(data),
    total = keys.length,
    rst = [], key;
  do {
    key = keys[Math.floor(Math.random() * total)];
    rst.push({
      name: key, content: data[key]
    });
    length--;
  } while (length > 0);
  return rst;
};

router.get('/:keyword', (req, res, next) => {
  res.json({
    markup: tpl({keywords: randomKeywords(30, testData)}),
    action: 'init'
  });
});

module.exports = router;
