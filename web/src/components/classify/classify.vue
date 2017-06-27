<template>
	<div class="b_classify">
		<classify_head></classify_head>
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div @touchstart='mesClick(index,$event)' v-for='(item1,index) in message' class="swiper-slide ">{{item1}}</div>
	        </div>
	    </div>
	    <div class="b_products_list" @scroll="scroll">
		    <div class="classify_show">
		    	<ul>
			    	<li class="item1 checked"  v-for='(item2,idx1) in secTitle'  @touchstart='titleLi(idx1,$event)'>{{item2}}</li>
		    	</ul>
		    </div>
		    <div class="classify_title">
		    	<div class="xian1"></div>
		    	<span>{{classifyTitle}}</span>
		    	<div class="xian2"></div>
		    </div>
			<router-link :to="{name:'detail',params:{_id:item._id}}" class='classify_content clearfix' v-for="(item,index) in responseData"  >
	    		<div class="imgBox"><img v-lazy="erp.uploadUrl+item.listImg"></div>
	    		<div class="list_title inaline">{{item.name}}</div>
	    		<div class="price">￥{{item.price}}</div>
	    	</router-link>	
			<router-link :to="{name:'detail',params:{_id:item._id}}" class='classify_content clearfix' v-for="(item,index) in responseData"  >
	    		<div class="imgBox"><img v-lazy="erp.uploadUrl+item.listImg"></div>
	    		<div class="list_title inaline">{{item.name}}</div>
	    		<div class="price">￥{{item.price}}</div>
	    	</router-link>	    	    	
	    	
	    	<div class="halvingLine">
		-----------------  我是有底线的 ----------------- 
	    	</div>	    		    	    	
	    </div>
	    <classify_foot></classify_foot>
	    <classify_backTop ref='goTop'></classify_backTop>
	</div>
</template>

<script type="text/javascript">
	import './classify.scss'
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueResource from 'vue-resource'
	import VueLazyload from 'vue-lazyload';
	import erp from '../../global.js'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery' 
	import http from '../../utils/HttpClient.js'
	import foot from '../foot/foot.vue'
	import head from '../head/head.vue'
	import backTop from '../goTop/goTop.vue'
	Vue.use(VueLazyload,{
		error:erp.uploadUrl+'lazyError.jpg',
		// loading:erp.uploadUrl+'classLoading.gif',
		try:2
	});
	export default {
		components:{
			'classify_foot':foot,
			'classify_head':head,
			'classify_backTop':backTop
		},
		data:function(){
			return {
				erp:erp,
				responseData:[],
				classifyTitle:null,
				listTitle:null,
				price:null,
				message:['服装','鞋靴','运动','皮具','居家','个护','家电','数码'],
				secTitle:[],
				indexCome:'服装'
			}
		},
		methods:{
			mesClick(index,event){
				$('.swiper-slide').eq(index).addClass('checked').siblings().removeClass('checked');
				let titleValue = $('.swiper-slide').eq(index).text();
				// 请求数据之前
				this.secTitle=[];
				$.post(erp.baseUrl+'searchProductByclass',{classify:titleValue}).then(response => {
					this.responseData = response;
					this.classifyTitle = response[0].classify+response[0].brand;
					this.responseData.map(function(item){
						if(!(this.secTitle.indexOf(item.type)>-1)){
							this.secTitle.push(item.type)
						}
					}.bind(this))							
				})				
			},
			scroll(event){
				this.$refs.goTop.ctrlShow(event.target.scrollTop);
			},
			titleLi(idx1,e){
				// console.log(9999,this.secTitle[idx1])

			},
			hrefDetail(event){
				console.log("==>")
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        // 显示可视化窗口有多少内容
		        slidesPerView: 5,
		        paginationClickable: true,
		        // 间隙
		        spaceBetween: 20,
		        freeMode: true
			})
			let target = $('.b_products_list');
			this.$refs.goTop.getScrollTarget(target);
			$('.swiper-slide').eq(0).addClass('checked')
		
		},
		created(){	
			http.post(erp.baseUrl+'searchProductByclass',{classify:'服装'}).then(response => {
				this.responseData = response;
				this.classifyTitle = response[0].classify+response[0].brand;
				this.responseData.map(function(item){
						if(!(this.secTitle.indexOf(item.type)>-1)){
							this.secTitle.push(item.type)
						}
				}.bind(this))
			})
					
		}
		// watch(){
		// 	responseData:function(){
		// 		console.log(111)
		// 	}
		// }
	}
</script>