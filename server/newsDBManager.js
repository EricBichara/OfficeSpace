/**
 * Created by ericbichara on Apr/26/14.
 */
/**** News ****/
var mongoose = require('mongoose'),
    schemas = require('./schemas');
var NewsModel = mongoose.model('news', schemas.newsSchema);

module.exports.getNews = function(req, res){
    NewsModel.find(function(err, news){
        if(!err){
            res.json({Success: true, data: news});
        }else{
            res.json({Success: false, data: null});
        }
    });
};

var mapNews = function(news1, news2){
    news1.date = news2.date;
    news1.title = news2.title;
    news1.content = news2.content;
};

var saveNews = function(news, res){
    news.save(function(err){
        if(!err){
            console.log("news saved successfully");
            res.json({Success: true, data: null});
        } else{
            console.log("Error:" + err);
            res.json({Success: false, data: null});
        }
    });
};

module.exports.updateNews = function(req, res){
    var news = null;
    if(req.body._id){
        NewsModel.findById(req.body._id, function(err, result){
            if(!err){
                news = result;
                mapNews(news, req.body);
                saveNews(news, res);
            }else{
                res.json({Success: false, data: null});
            }
        });
    }else{
        news = new NewsModel();
        mapNews(news, req.body);
        saveNews(news, res);
    }
};

module.exports.deleteNews = function(req, res){
    NewsModel.findById(req.body.id, function (err, news) {
        if (!err) {
            if(news)news.remove();
            res.json({Success: true, data: null});
        } else {
            console.log("Error: " + err);
            res.json({Success: false, data: null});
        }
    });
};