const auth = require('../../auth');

module.exports = {
  middleware: (req, res, next) => {
    switch (action) {
      case 'create':
        const owner = req.body.id;
        auth.check.own(req, owner);
        next();
        break;
      case 'sign':
        auth.check.logged(req);
        next();
        break;
      default:
        next();
    }
  },
};
