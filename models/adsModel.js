var mysql = require('mysql');
var db_config = require('./db_config');
var pool = mysql.createPool(db_config);

exports.getAds = function(uuid, done){
    pool.getConnection(function(err, conn){
        if (err){
            console.error("adsModel pool.getConnection error : ", err);
            conn.release();
            done(2);
        }
        else{
            var sql = "SELECT * FROM ADS WHERE uuid=?";
            conn.query(sql, uuid, function(err, rows){
               if (err){
                   console.error("adsModel error ", err);
                   done(2);
               }
                else{
                   done(0, rows);
               }
            });
        }
    });
};