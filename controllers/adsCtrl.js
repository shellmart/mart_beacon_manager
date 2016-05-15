var adsModel = require('../models/adsModel');
var status_code = require('../status_code');

exports.getAds = function(req, res){
    adsModel.getAds(req.params.uuid, function(status, info){
        res.json({
            "status" : status,
            "message" : status_code[status],
            "info" : info
        });
    });
};