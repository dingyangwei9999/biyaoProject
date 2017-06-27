<template>
	<div class="changeDataArea">

		<h2>这是商品ID为：{{ProId}}&nbsp;&nbsp;的修改数据页面&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary" @click="saveData">保存</button>&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-danger closeBtn" @click="closewindow"> 关闭 </button></h2>
		<form class="form-inline changeForm" ref="productForm">
				<p>必填项：</p>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">商品名称:&nbsp;</label>
					<input type="text" class="form-control required" id="exampleInputName2" name="name" v-model="dataform.name">
					</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">商品价格:&nbsp;</label>
					<input type="text" class="form-control " id="exampleInputName2" name="price" v-model="dataform.price">
					</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">销量:&nbsp;</label>
					<input type="text" class="form-control " id="exampleInputName2" name="sales" v-model="dataform.sales">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">库存:&nbsp;</label>
					<input type="text" class="form-control " id="exampleInputName2" name="stock" v-model="dataform.stock">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">品牌:&nbsp;</label>
					<input type="text" class="form-control " id="exampleInputName2" name="brand" v-model="dataform.brand">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">分类：&nbsp;</label>
					<!-- <input type="text" class="form-control " id="exampleInputName2" name="classify" v-model="dataform.classify"> -->
				
					<select class="form-control" name="classify" v-model="dataform.classify">
					  <option>服装</option>
					  <option>鞋靴</option>
					  <option>运动</option>
					  <option>皮具</option>
					  <option>个护</option>
					  <option>居家</option>
					  <option>家电</option>
					  <option>数码</option>
					</select>	
				</div>
				<p>非必填项：</p>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">商品尺寸:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="size" v-model="dataform.size" placeholder="例如：S M L XL">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">二级分类:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="type" v-model="dataform.type">
				</div>
				
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">颜色:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="color" v-model="dataform.color" placeholder="例如：红色、绿色">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">重量:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="weight" v-model="dataform.weight"> 
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">材质:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="material" v-model="dataform.material">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">产地:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="origin" v-model="dataform.origin">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">规格说明:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="format_explain" v-model="dataform.format_explain">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">适用对象:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="use_object" v-model="dataform.use_object">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">商家详情:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="seller" v-model="dataform.seller">
				</div>
				<div class="form-group col-sm-6">
					<label for="exampleInputName2">产品特点:&nbsp;</label>
					<textarea class="form-control" rows="3" name="features" v-model="dataform.features"></textarea>
			    <!-- <input type="text" class="form-control" id="exampleInputName2"> -->
			 	</div>
			 	
			  	<div class="form-group col-sm-6">
				    <label for="exampleInputName2">注意事项:&nbsp;</label>
				 	<textarea class="form-control" rows="3" name="attention" v-model="dataform.attention"></textarea>
			    <!-- <input type="text" class="form-control" id="exampleInputName2"> -->
			  	</div>
				
				<p class="pictitle">商品图片上传：</p class="pictitle">
				<div class="picupload">
					<div class="form-group col-sm-12">
						<label for="exampleInputFile">列表图</label>
						<input type="file" id="exampleInputFile" name="listImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">轮播图</label>
						<input type="file" id="exampleInputFile" name="bannerImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">轮播图</label>
						<input type="file" id="exampleInputFile" name="bannerImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">轮播图</label>
						<input type="file" id="exampleInputFile" name="bannerImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">详情图</label>
						<input type="file" id="exampleInputFile" name="detailImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4">
						<label for="exampleInputFile">详情图</label>
						<input type="file" id="exampleInputFile" name="detailImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					
					<!-- <h4>详情图</h4> -->
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">详情图</label>
						<input type="file" id="exampleInputFile" name="detailImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">详情图</label>
						<input type="file" id="exampleInputFile" name="detailImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">详情图</label>
						<input type="file" id="exampleInputFile" name="detailImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4" >
						<label for="exampleInputFile">详情图</label>
						<input type="file" id="exampleInputFile" name="detailImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
					<div class="form-group col-sm-4">
						<label for="exampleInputFile">详情图</label>
						<input type="file" id="exampleInputFile" name="detailImg">
						<!-- <p class="help-block">Example block-level help text here.</p> -->
					</div>
				</div>
		</form>
	</div>
</template>
<script type="text/javascript">
    import Home from '../home.js'
    import $ from 'jquery'
	import erp from '../../../../../web/src/global.js'
	import './changeData.scss'

	export default {
		data:function(){
			return {
				dataform: {},
				ProId:null,
				erp:erp
			}
		},
		props: {
          // inputValue: String
        },
		methods: {
			closewindow(){
				console.log('关闭')
				var canselmessage=confirm("确定要放弃修改并关闭？");  
			    if(canselmessage==true)  
			    {  
					this.$emit('closeWin')
			    }  
			    else if(canselmessage==false)  
			    {  
			    } 


			},
			saveData(){
				var canselmessage=confirm("确定要保存修改此商品信息？");  
			    if(canselmessage==true)  
			    {  	
			    	var id = this.ProId;
			    	var newObj = this.dataform;
			    	delete newObj._id;
			    	console.log(newObj)
			    	$.ajax({
						type:'post',
						data: {'_id':id,"newData":JSON.stringify(newObj)},
						dataType: 'json',
						url: erp.baseUrl + 'changeProductByid',
						success:function(data){
							console.log(data)
						}
					})
					alert('商品数据修改成功')
					this.$emit('closeWin')
			    	window.location.reload();

			    }  
			    else if(canselmessage==false)  
			    {  
			    } 
			}
		},
		created(){
			// Home.$on('open',(o)=>{
			// 	this.ProId = o;
			// 	console.log(this.ProId)
			// })
			// console.log('11111')
			var proID = this.$parent.thisProId;
			this.ProId = proID;
			var self = this;
			$.ajax({
				type:'post',
				data:{'_id':proID},
				dataType:'json',
				url:erp.baseUrl + 'gainProductById',
				success:function(response){
					console.log('获取成功');
					console.log(response)
					self.dataform = response[0];
					// console.log(self.dataform[0])
				}
			})


			// gainProductById
		}


    }



</script>

