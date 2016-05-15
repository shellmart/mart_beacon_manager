/**
 * Created by dk on 16. 5. 8.
 */
var userCtrl = require('../controllers/userCtrl');
var adsCtrl = require('../controllers/adsCtrl');

exports.initApp = function(app){
    app.route('/user')
        .get(userCtrl.isLogin, userCtrl.logout)
        .post(userCtrl.login)
        .put(userCtrl.join);

    app.route('/ads/:uuid')
        .get(adsCtrl.getAds);
};