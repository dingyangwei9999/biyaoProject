var db = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){

	app.post('insertOrder',urlencodedParser, function(request, response){
		console.log(requset.body)

		db.get('biyaoMember',{},function(result){

			result.foreach(function(item){
				if(item._id == requset.body._id){

					console.log(item)

					db.modify('biyaoMember',item,requset.body,function(result){
						response.send(result)
					})
				}
			})
		})
	})
}