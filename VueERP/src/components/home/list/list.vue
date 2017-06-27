<template>
	<div>
		<div class="Content_title">
			<h3>商品列表</h3>
		</div>
		<form class="form-inline">
		  <div class="form-group">
		    <label for="exampleInputName2">商品搜索:&nbsp;</label>
		    <input type="text" class="form-control" id="exampleInputName2" placeholder="(根据商品名称简单搜索)"  v-model="searchVal">
			<button type="button" class="btn btn-primary" @click="searchProduct" > 搜索 </button>
			<span>&nbsp;(&nbsp;高级搜索请移步&nbsp;"查询商品"&nbsp;)</span>

		  </div>
		</form>
		<changeData v-if="show_or_not" @closeWin="closeWindow" class="changeWindow"></changeData>
		<div class="goodsType">
			<h4>分类选择:&nbsp;&nbsp;
				<!-- <button type="button" class="btn btn-primary"> 服装 </button>
				<button type="button" class="btn btn-primary"> 鞋靴</button>
				<button type="button" class="btn btn-primary"> 运动 </button> -->
				<button type="button" class="btn btn-info" @click="findall">全部</button>
				<button type="button" class="btn btn-primary" v-for="(item,index) in items" @click="classifyfind(index,$event)">{{ item.message }}</button>
			</h4>
		</div>
		<div class="goodsTable">
			<table class="table table-hover">
			<thead>
				<tr>
					<th width="80px">序号</th>
					<th>商品图片</th>
					<th>商品名称</th>
					<th>商品价格</th>
					<th>库存</th>
					<th>颜色</th>
					<th>分类</th>
					<th>商品操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in responseData">
					<td>{{(index+1)}}</td>
					<td><img :src="erp.uploadUrl+item.listImg" width="50px"></td>
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td>{{item.stock}}</td>
					<td>{{item.color}}</td>
					<td>{{item.classify}}</td>
					<td><button type="button" class="btn btn-warning " @click="changeDataClick":id="item._id"> 修改 </button><button type="button" class="btn btn-danger deleateBtn" :id="item._id" @click="deleateData"> 删除 </button></td>
				</tr>
			</tbody>
			</table>
		</div>
		



	</div>
</template>
<script type="text/javascript">
	import './list.scss'
	// import '../../
	import erp from '../../../../../web/src/global.js'
    import $ from 'jquery'
    import Home from '../home.js'

	import changeData from '../changeData/changeData.vue'
	export default {
		components: {
			'changeData': changeData,

		},
		data:function(){
			return {
				items: [
			      {message: '服装' },
			      {message: '鞋靴' },
			      {message: '运动' },
			      {message: '皮具' },
			      {message: '个护' },
			      {message: '居家' },
			      {message: '家电' },
			      {message: '数码' },
			    ],
			    responseData:[],
				listTitle:null,
				price:null,
			    stock:null,
			    color:null,
				classifyTitle:null,
				searchVal:null,
				show_or_not:false,
				thisProId:null,
				erp:erp
			}
		},
		methods: {
			findall(){
				$.post(erp.baseUrl+'getProduct')
				.then(response => {
					this.responseData = response;
				})	
			},
			classifyfind(index,e){
				// console.log("按下分类")
				// console.log(index,event.target)
				var click_clssify = this.items[index].message;
				console.log(click_clssify)
				var self = this;
				$.ajax({
					url: erp.baseUrl + 'searchProductByclass',
					type: 'post',
					data: {"classify":click_clssify},
					dataType: 'json',
					// async:false,
					success:function(response){
						// console.log(response)
						self.responseData = response;
						console.log(self.responseData)
					}
				})
				
			},
			closeWindow(){
				this.show_or_not = false;
			},
			searchProduct(){
				var self = this;
				// var classify = self.searchVal;
				console.log(self.searchVal)
				$.post(erp.baseUrl+'searchProduct',{classify:self.searchVal}).then(response => {
					self.responseData = response;
					console.log(self.responseData)
				})
			},
			changeDataClick(){
				console.log('按下修改')
					
				// console.log(event.target.id)
				this.thisProId = event.target.id ;


				this.show_or_not = true;
				// this.thisProId = 
				// console.log(this)
				// console.log(this.thisProId)

				//向子组件传递参数ID
				// Home.$emit('open',this.thisProId);

			},
			deleateData(){
				console.log('按下删除')
				var proid = event.target.id
				var canselmessage=confirm("确定删除此商品的所有信息？");  
			    if(canselmessage==true)  
			    {  
			    	$.ajax({
						type:'post',
						data:{'_id':proid},
						dataType:'json',
						url:erp.baseUrl + 'delProductByid',
						success:function(response){
							console.log('删除成功');
						}
					})
			    	window.location.reload();
			    }  
			    else if(canselmessage==false)  
			    {  
			    	console.log('取消删除');
			    }  
			}
		},
		created(){	
			$.post(erp.baseUrl+'getProduct')
			.then(response => {
				this.responseData = response;
				// console.log(this.responseData)
			})		
					
		}

    }
</script>