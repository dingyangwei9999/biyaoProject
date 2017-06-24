<template>
	<div>
		<div class="Content_title">
			<h3>添加商品</h3>
		</div>
		<div class="mainarea">
			<h4>(请填写新增商品的各项参数，后执行保存操作) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
			<button type="button" class="btn btn-primary" @click="clicksave">保存</button>&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-danger">清空</button>
			</h4>
			<form class="form-inline proForm" ref="productForm">
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
					<input type="text" class="form-control " id="exampleInputName2" name="classify" v-model="dataform.classify">
				</div>


				<p>非必填项：</p>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">商品尺寸:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="size" v-model="dataform.size">
				</div>
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">二级分类:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="type" v-model="dataform.type">
				</div>
				
				<div class="form-group col-sm-4">
					<label for="exampleInputName2">颜色:&nbsp;</label>
					<input type="text" class="form-control" id="exampleInputName2" name="color" v-model="dataform.color">
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


	</div>
</template>
<script type="text/javascript">
	import './add.scss'
    // import router from '../../../router'
    import http from '../../../utils/HttpClient'
    import $ from 'jquery'
    // import '../../../../../web/src/global.js'
    import erp from '../../../global.js'
    // import '../../../global.js'
    import '../../../assets/jquery.form.js'
	export default {
		data(){
            return {
                dataform: {},
            }
        },
        methods: {

			clicksave(){
				console.log("按下确认")
				console.log(this.dataform)
				// console.log($('.proForm'))
				console.log($(this.$refs.productForm).valid())

				if(!$(this.$refs.productForm).valid()){
					// alert('111')
                    return false;
                }
                var self = this;
                var prodata = JSON.stringify(self.dataform);
				console.log(prodata)

				// http.post('/addData', self.dataform)
    //             .then(response => {
    //                 if(response.status){
    //                     $.alert('保存成功!'
    //                     // 	, function(){
    //                     //     router.push({name: 'clients'});
    //                     // }
    //                     )
    //                 } else {
    //                     $.alert(response.msg);
    //                 }
    //             })
    //             
    //             
    //             
            // $(function(){
            // console.log(11111)
            // }) 
               	$('form').ajaxSubmit({
					type: 'post',
					dataType: 'json',
					data:{data:prodata},
					url: 'http://localhost:8787/addData',
					success:function(){
                        console.log('成功');
                    },

				});	

				// $.ajax({
				// 	type: 'post',
				// 	dataType: 'json',
				// 	data: {data:prodata},
				// 	url: 'http://localhost:8787/addData',
				// 	success:function(){
    //                     console.log('成功');
    //                 },
				// })
				
			},
		},
        created(){

        }
       
	}
</script>