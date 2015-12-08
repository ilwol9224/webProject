var express = require('express'),
    Survey = require('../models/Survey');
var router = express.Router();

function needAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('danger', '로그인이 필요합니다.');
    res.redirect('/signin');
  }
}

router.get('/', function(req, res, next){
    Survey.find({}, function(err, surveys){
        if(err){
            return next(err);
        }
        res.render('survey', {survey: surveys});
    })
});

router.get('/new', function(req, res, next) {
  Survey.find({}, function(err, surveys) {
    if (err) {
      return next(err);
    }
    res.render('survey/new', {survey: surveys});
  });
});


module.exports = router;
