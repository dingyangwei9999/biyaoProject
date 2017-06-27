var ApiResult = require('./ApiResult')

var MongoDB = require('mongodb');
var MongoDBServer = new MongoDB.Server('localhost', 27017);
var db = new MongoDB.Db('biyaoMember', MongoDBServer);

module.exports = {

    //获取数据库的个人登录信息
    get: function(_collection, _condition, _callback){
       
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }
            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                
                collection.find(condition).toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } 
                    else{
                        _callback(ApiResult(true, null, dataset)); 
                    }
                })
            })
            db.close();
        })
    },

    //将注册的个人信息插入数据库中
    insert: function(_collection, _newdata, _callback){
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }
            // console.log(_collection, _newdata, _callback)
            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.insert(_newdata, function(resulterror, result){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, result));
                    }
                })
            })
            db.close();
        })
    },

    //更新数据库的个人信息
    modify:function(_collection,result,newData,_callback){
        
       db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }
            db.collection(_collection,function(err,collection){
                 console.log(result)
                 console.log(newData)
                collection.update(result,{$set:newData},function(resulterror,result){
                    if(err){
                        console.log(err)
                       _callback(ApiResult(false, null, err));
                    }else{
                         _callback(ApiResult(true, null, result));
                    }
                })
            })
            db.close();
        })
       
    }

    //在数据库中写入购物车的信息
    
}


 