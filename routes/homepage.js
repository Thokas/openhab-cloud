
/*
 * GET home page.
 */
exports.index = function(req, res){
  const errormessages = req.flash('error');
  const infomessages = req.flash('info');
  const config = require('../config.json');
  res.render('index', {
      title: "Home",
      user: req.user,
      google: (config.google) ? config.google : {},
      errormessages: errormessages,
      infomessages: infomessages
  });
};

exports.docs = function(req, res) {
    const errormessages = req.flash('error');
    const infomessages = req.flash('info');
    const config = require('../config.json');
    res.render('docs/documentation', {
        title: "Docs",
        user: req.user,
        google: (config.google) ? config.google : {},
        errormessages: errormessages,
        infomessages: infomessages
    });
};

exports.docsnotifications = function(req, res) {
    const errormessages = req.flash('error');
    const infomessages = req.flash('info');
    const config = require('../config.json');
    res.render('docs/notifications', {
        title: "Docs - Notifications",
        user: req.user,
        google: (config.google) ? config.google : {},
        errormessages: errormessages,
        infomessages: infomessages
    });
};

exports.docspersistence = function(req, res) {
    const errormessages = req.flash('error');
    const infomessages = req.flash('info');
    const config = require('../config.json');
    res.render('docs/persistence', {
        title: "Docs - Persistence",
        user: req.user,
        google: (config.google) ? config.google : {},
        errormessages: errormessages,
        infomessages: infomessages
    });
};

exports.docsifttt = function(req, res) {
    const errormessages = req.flash('error');
    const infomessages = req.flash('info');
    const config = require('../config.json');
    res.render('docs/ifttt', {
        title: "Docs - IFTTT",
        user: req.user,
        google: (config.google) ? config.google : {},
        errormessages: errormessages,
        infomessages: infomessages
    });
};

exports.getv2 = function(req, res) {
    res.send('Yes, I am!');
};
