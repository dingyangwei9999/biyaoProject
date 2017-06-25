<template>
	<div class="b_classify">
		<classify_head></classify_head>
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide checked">服装</div>
	            <div class="swiper-slide">婴童</div>
	            <div class="swiper-slide">鞋靴</div>
	            <div class="swiper-slide">运动</div>
	            <div class="swiper-slide">皮具</div>
	            <div class="swiper-slide">出行</div>
	            <div class="swiper-slide">个护</div>
	            <div class="swiper-slide">居家</div>
	            <div class="swiper-slide">家电</div>
	            <div class="swiper-slide">数码</div> 
	        </div>
	    </div>
	    <div class="b_products_list" @scroll="scroll">
		    <div class="classify_show">
		    	<ul>
			    	<li class="item1 checked"  @touchstart='ccc'>儿童</li>
			    	<li>包</li>
			    	<li>童鞋</li>
			    	<li>单车</li>
			    	<li>亲子</li>
		    	</ul>
		    </div>
		    <div class="classify_title">
		    	<div class="xian1"></div>
		    	<span>{{classifyTitle}}</span>
		    	<div class="xian2"></div>
		    </div>
	    	<!-- <router-link to class='classify_content clearfix' >
	    		<div class="imgBox"><img src="../../../../upload/ceshi.jpg" height="360" width="360"></div>
	    		<div class="list_title inaline">休闲fdsaffffffffffffffffffffffffff冰棉</div>
	    		<div class="price">$99</div>
	    	</router-link> -->
			<router-link :to="{name:'detail',params:{_id:item._id}}" class='classify_content clearfix' v-for="(item,index) in responseData"  >
	    		<div class="imgBox"><img :src="'http://10.3.133.81:8787/upload/'+item.listImg"></div>
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
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery' 
	import http from '../../utils/HttpClient.js'
	import foot from '../foot/foot.vue'
	import head from '../head/head.vue'
	import backTop from '../goTop/goTop.vue'
	export default {
		components:{
			'classify_foot':foot,
			'classify_head':head,
			'classify_backTop':backTop
		},
		data:function(){
			return {
				responseData:[],
				classifyTitle:null,
				listTitle:null,
				price:null
			}
		},
		methods:{
			scroll(event){
				this.$refs.goTop.ctrlShow(event.target.scrollTop);
			},
			ccc(event){
				console.log(333,this.responseData)
			},
			hrefDetail(event){
				console.log("==>")
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 5,
		        paginationClickable: true,
		        spaceBetween: 20,
		        freeMode: true
			})
			let target = $('.b_products_list');
			this.$refs.goTop.getScrollTarget(target);
			// this.$store.dispath('classify_data',{

			// })
		
		},
		created(){	
			$.post('http://10.3.133.81:8787/'+'getProduct')
			.then(response => {
				this.responseData = response;
				console.log(this.responseData)
			})				
		}
		// watch(){
		// 	responseData:function(){
		// 		console.log(111)
		// 	}
		// }
	}
</script>