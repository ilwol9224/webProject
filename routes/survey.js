var express = require('express'),
    User = require('../models/User'),
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

router.get('/', needAuth, function(req, res, next){
    Survey.find({}, function(err, docs){
        if(err){
            return next(err);
        }
        res.render('survey/index', {surveys: docs});
    });
});

router.get('/new', needAuth, function(req, res, next) {
  Survey.find({}, function(err, surveys) {
    if (err) {
      return next(err);
    }
    res.render('survey/new', {survey: surveys});
  });
});

router.post('/', function(req, res, next) {
    var survey = new Survey({
        title: req.body.title,
        content: req.body.content
    });

    survey.save(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/show/:id', function(req, res, next){
    Survey.findById(req.params.id, function(err, survey){
        if(err){
            return next(err);
        }
        res.render('survey/show', {survey: survey});
    });
});

router.delete('/:id', function(req, res, next){
    Survey.findOneAndRemove({_id: req.params.id}, function(err){
        if(err){
            return next(err);
        }
        res.redirect('/survey');
    });
});

module.exports = router;
