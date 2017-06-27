var multer = require ('multer');

var db = require('../module/db.moudles.js');
var apiResult = require('../module/ApiResult.js');

//引入的中间件的插件用于数据转化时转换成功
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//上传图片用到的

var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../upload')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage })

exports.Register = function(app){
	console.log(11)

  //允许设置跨越
  app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By",' 3.2.1')
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
  });
  
	//添加商品数据的操作
	//上传图片用到的
  // upload.array('photos', 12)  //备份
  var cpUpload =  upload.fields([{ name: 'listImg', maxCount: 1 }, { name: 'bannerImg', maxCount: 8 }, { name: 'detailImg', maxCount: 20 }]);
  app.post('/addData', urlencodedParser,cpUpload, function(request, response) {
 
    //所有上传图片的集合(类型为obj) 格式{[{},{}]}
    var imgFilesObj = request.files;
    // console.log(imgFilesObj)

    //商品对象
    var newShopObj = JSON.parse(request.body.data);
    // console.log(newShopObj);
    // //轮播图数组容器
    var bannerImgArr = [];

    // //列表图数组容器
    var detailImgArr = [];
    // //存入图片路径到商品对象中
    for(var attr in imgFilesObj){
      imgFilesObj[attr].forEach(function(item){
        switch(item.fieldname){
          case 'listImg' :
          	newShopObj[item.fieldname] = item.filename;
          	break;
          case 'bannerImg' :
        	bannerImgArr.push(item.filename);
        	break;
          case 'detailImg' :
        	detailImgArr.push(item.filename);
        	break;
        }
      });
    }
    newShopObj.bannerImg = bannerImgArr;
    newShopObj.detailImg = detailImgArr;

    console.log('成功创建一个新增商品，商品信息如下:',newShopObj);

    //写入数据库
    db.save('prodata',newShopObj);   
    //响应
    response.send('{"status":true,"message":"上传成功"}'); 
  });
	

	//查询所有商品
	//result是一个数组，里面存放所有的数据
	app.post('/getProduct',urlencodedParser,function(request, response){
	
		db.exists('prodata',{},[],function(result){
			response.send(result);
		});
 	 });

	//删除指定ID的商品
	app.post('/delProductByid',urlencodedParser,function(request, response){
	    // console.log(request.body);
	    //判断是否删除了商品
	    var isDelete = false;
	    //首先通过id查找数据库
	    db.exists('prodata',{},[],function(result){
	      result.forEach(function(item){
	      
	        //找到，删除商品
	        if(item._id == request.body._id){
	          db.delByProductsObj('prodata',item,function(){
	          });
	          //已经删除商品
	          isDelete = true;
	          return false;
	        }
	      });
	    });
	    //返回删除状态
	    !isDelete ? response.send(JSON.stringify({status:true,message:"删除成功"})):response.send(JSON.stringify({status:false,message:"删除失败"}));
  });

  	//修改指定ID的商品数据
	app.post('/changeProductByid',urlencodedParser,function(request,response){
	
		var newData = JSON.parse(request.body.newData)
	
		db.exists('prodata',{},[],function(result){

			result.forEach(function(item){

				if (item._id == request.body._id) {
					
					// console.log(item)
          // console.log(newData)

					db.changeProduct('prodata',item,newData)
				}
			})
		})
	})

  	//获取指定ID的商品数据
	app.post('/gainProductById',urlencodedParser,function(request,response){
	

		db.exists('prodata',{},[],function(result){

			result.forEach(function(item){

				if (item._id == request.body._id) {
				
					db.gainProduct('prodata',item._id,function(result){
							response.send(result);
					})
				}
			})
		})
	})
  //通过关键字查询到数据库的商品
  app.post('/searchProduct',urlencodedParser,function(request,response){
    
    var obj= {}
    var arr = []
    arr.push(request.body.classify)
    arr = arr.toString()
    var Reg = new RegExp(arr)
    obj.name = Reg
    console.log(obj)
    db.exists('prodata',{},[],function(result){

      db.searchProductByclassify('prodata',obj,function(result){
        response.send(result)
      })

    })
  });

  //通过分类查询数据
  app.post('/searchProductByclass',urlencodedParser,function(request,response){
    
    var obj= {}
    var arr = []
    arr.push(request.body.classify)
    arr = arr.toString()
    // var Reg = new RegExp(arr)
    // obj.name = Reg
    obj.classify=arr;
    console.log(obj)
    db.exists('prodata',{},[],function(result){

      db.searchProductByclassify('prodata',obj,function(result){
        response.send(result)
      })

    })
  });

    //通过people分类获取专区
  app.post('/gainProductByarea',urlencodedParser,function(request,response){

    var obj= {}
    var arr = []
    arr.push(request.body.area)
    arr = arr.toString()
    var Reg = new RegExp(arr)
    obj.people = Reg
    console.log(obj)
    db.exists('prodata',{},[],function(result){

      db.searchProductByarea('prodata',obj,function(result){
        response.send(result)
      })

    })
  });
     //查找商品信息，可以限制数量，可以排序
  app.post('/getProductsAdvanced1',urlencodedParser,function(request, response){

    var obj1= {}
    var arr1 = []
    arr1.push(request.body.area)
    arr1 = arr1.toString()
    var Reg1 = new RegExp(arr1)
    obj1.people = Reg1

    console.log('request.body:',request.body);

    console.log('typeof request.body.sort:',typeof request.body.sort);
    var arr = [];
    //根据前端数据添加进数据
    for(var attr in request.body){
      console.log('attr:',attr);
      if(!(attr === 'limit' || attr === 'skip' || attr ==='sort' || attr === "fuzzy")){
        arr.push(request.body[attr]);
      }
    }
    arr = arr.toString();
    if(arr === ""){
      arr = /\d\D/;
    }
    var Reg = new RegExp(arr);
    console.log('arr:',arr,'Reg:',Reg);
    db.getProductFilter('prodata', obj1,request.body, Reg, request.body.skip, request.body.limit, request.body.sort,function(result){
      response.send(JSON.stringify(result));
    });
  });


      //传入字符串查询商品分类和关键字  默认包含全局搜索(fuzzy为false则不开启)
  app.post('/getProductsByArr',urlencodedParser,function(request, response){
    console.log(request.body);
    //是否开启全局搜索，默认开启
    var fuzzy = request.body.fuzzy ? JSON.parse(request.body.fuzzy) : true;
    //记录请求数据
    var arr = [];
    //根据前端数据添加进数据
    for(var attr in request.body){
      //跳过请求中的fuzzy属性
      if(!(attr === "fuzzy")){
        arr.push(request.body[attr]);
      }
    }
    console.log(arr);
    arr = arr.toString();
    //把arr转换成字符串
    var Reg = new RegExp(arr);
    console.log(arr,Reg);
    db.existsSingle('prodata',request.body,Reg,function(result){
      //记录全局搜索的所有结果
      var searchAll = [];
      //假如fuzzy为true则开启全局搜索
      if(fuzzy){
        //先获取一条数据，查看该数据的所有字段
        db.getProductFilter('prodata', {},/./, 0, 1, {},function(res){
          var totalCount = 0;
          try{
            //记录获取到数据的所有字段的总数并剪掉与图片相关的个数,
            //假如没有查到到任何商品的结果则getOwnPropertyNames会出错
            //getOwnPropertyNames：返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组
            totalCount = Object.getOwnPropertyNames(res[0]).length - 3;
          }catch(error){
            console.log("查找出错，数据库可能为空，错误信息：",error);
          }
          //如果totalCount没有大于0则终止函数
          if(totalCount <= 0){
            response.send(apiResult(false, '后台数据异常'));
            return;
          }
          //记录db回调函数的运行次数
          var count = 0;
          for(var attr2 in res[0]){
            //不查找与图片有关的信息，跳过处理
            if(!(attr2 === 'bannerImg' || attr2 === 'listImg' || attr2 === 'detailImg')){
              //fooObj为需要查找的属性，Reg为需要查找的内容
              var fooObj = {[attr2]:res[0][attr2]};
              db.existsSingle('prodata',fooObj,Reg,function(_result){
                //如果没有结果则不执行push
                if(!(_result.length === 0)){
                  //_result为数组，避免二维数组产生，遍历统一push到searchAll
                  _result.forEach(function(item){
                    searchAll.push(item);
                  });
                }
                //结果两值相等，则所有数据已经查完，可以响应结果
                if(totalCount === ++count){
                  //把最终结果进行去重
                  function unique(arr){
                    var hash = {};
                    return arr.reduce(function(prev, curr) {
                      hash[curr._id] ? '' : hash[curr._id] = true && prev.push(curr);
                      return prev
                    }, [])
                  }
                  //响应去重后的结果
                  response.send(JSON.stringify(unique(searchAll)));
                }
              });
            }
          }
        });
      }
      //没有开启全局搜索，则响应最初的结果
      fuzzy || response.send(JSON.stringify(result));
    });
  });

  app.post('/getProByClassifyname', urlencodedParser, function(request, response){
      var obj= {}
      var arr = []
      arr.push(request.body.classify)
      arr = arr.toString()
      // var Reg = new RegExp(arr)
      obj.name = arr;
      console.log(obj)
      db.exists('prodata',{},[],function(result){

        db.searchProductByclassify('prodata',obj,function(result){
          response.send(result)
        })

      })
  });

  

}