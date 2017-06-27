var db = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){

    //登录时的验证
    app.post('/login', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.psw){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            db.get('biyaoMember',{username:request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].psw != request.body.psw){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        var id = data[0]._id;
                        response.send({status:ApiResult(true),_id:id});
                    }
                }
            })
        }
    });

    //注册时的验证
    app.post('/register', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.psw){
            response.send(ApiResult(false, '密码不能为空！'));
        }  else {
            
            db.get('biyaoMember', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {

                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '用户名已被注册'));
                    } else {
                        console.log(5)
                        db.insert('biyaoMember', request.body, function(insertResult){
                            response.send(insertResult);
                        })
                    }
                }
            })
        }        
    })

    //找回密码
    app.post('/findpsw', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.psw){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            db.get('biyaoMember',{username:request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else {
                        db.modify('biyaoMember',data[0],request.body,function(result){
                            response.send(result)
                        })
                    }
                }
            })
        }
    });

    //修改密码
    app.post('/updataPsw', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.oldpsw){
            response.send(ApiResult(false, '密码不能为空！'));
        } else if(!request.body || !request.body.psw){
            response.send(ApiResult(false, '密码不能为空！'));
        } else if(!request.body || !request.body.pswtoo){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            if(request.body.psw != request.body.pswtoo){
                response.send(ApiResult(false, '请确认两次输入的密码相同！'));        
            }else{

                db.get('biyaoMember',{psw:request.body.oldpsw}, function(result){
                    if(!result.status){
                        response.send(result);
                    } else {
                        var data = result.data;
                        if(!data[0]){
                            response.send(ApiResult(false, '请输入正确的密码！'));
                        } else {
                            db.modify('biyaoMember',data[0],{psw:request.body.psw},function(result){
                                response.send(result)
                            })
                        }
                    }
                })
            }
        }
    });

    //在数据库中写入购物车的信息
    app.post('/addCart', urlencodedParser, function(request, response){
        let data = JSON.parse(request.body.data);
        let dataUpdate = {};
        dataUpdate.userId = data.userId;
        dataUpdate.productsId = data.productsId;
        dataUpdate.size = data.size;
        dataUpdate.color = data.color;

        // delete data.count;
        // console.log(data)
        db.get('cart',dataUpdate, function(result){
           
            // var data = result.data;
            // var responseData = JSON.parse(request.body.data);
            console.log(result.data)
            if(!result.data[0]){
                console.log('insert','====')
                db.insert('cart', data, function(result){
                    // console.log(result.result)
                    response.send(result)
                })
            } else {
                console.log('modify=======');
                db.modify('cart', result.data[0], data, function(result){
                    response.send(result)
                })
            }
            
        })      
    });

    app.post('/memberCenter',urlencodedParser,function(request,response){
            console.log(requset.body,"===>",response.body)
            DB.get('sexUser',{username:request.body.username}),
                function(result){
                    if(!result.status){
                        response.send(result)
                    }else{
                        var data = result.data;
                        if(data[0]){console.log(4444)
                            // DB.del()
                        }
                    }
                }
    })
    app.post('/address',urlencodedParser,function(request,response){
            console.log(request.body,"========");
            DB.get('watchadd',{xiang:request.body.xiang},function(result){
                if(!result.status){
                    response.send(result);
                }else{
                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '收货地址一样了'));
                    }else{
                        DB.insert('watchadd',request.body,function(insertResult){
                            response.send(insertResult)
                        })
                    }
                }
            })
    })
    app.post('/mamage',urlencodedParser,function(request,response){
        DB.get('watchadd',{},function(result){
            response.send(result)
            console.log(result)
        })
    })
    app.post('/delAddress',urlencodedParser,function(request,response){
        console.log(request.body,"响应");
        DB.del('watchadd',{"address":request.body.address},function(result){
                response.send(result)
                console.log(result,"result---->")
        })

    })
}

