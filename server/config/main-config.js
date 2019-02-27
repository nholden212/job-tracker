const path = require('path');
const logger = require('morgan');

module.exports = {
    init(app, express){
        app.use((req, res, next) => {
            res.locals.currentUser = req.user;
            next();
          });
        app.use(express.static(path.join(__dirname, "..", "assets")));
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
    }
};