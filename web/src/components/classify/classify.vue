<template>
	<div class="b_classify">
		<!-- <classify_head></classify_head> -->
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
	    <div class="b_products_list">
		    <!-- <div class="classify_show">
		    	<ul>
		    	<li>儿童</li>
		    	<li> 包</li>
		    	<li>童鞋</li>
		    	<li>单车</li>
		    	<li>亲子</li>
		    	</ul>
		    </div> -->
		    <div class="classify_title">
		    	<div class="xian1"></div>
		    	<span>眼镜—一路集团</span>
		    	<div class="xian2"></div>
		    </div>
	    	<router-link to class='classify_content clearfix'>
	    		<div class="imgBox"><img src="../../../../upload/ceshi.jpg" height="360" width="360"></div>
	    		<div class="list_title inaline">休闲fdsaffffffffffffffffffffffffff冰棉</div>
	    		<div class="price">$99</div>
	    	</router-link>
	    	<router-link to class='classify_content clearfix'>
	    		<div class="imgBox"><img src="../../../../upload/ceshi.jpg" height="360" width="360"></div>
	    		<div class="list_title inaline">休闲吵架当你发觉客服了解冰棉</div>
	    		<div class="price">$99</div>
	    	</router-link>
			<router-link to class='classify_content clearfix'>
	    		<div class="imgBox"><img src="../../../../upload/ceshi.jpg" height="360" width="360"></div>
	    		<div class="list_title">休闲冰棉</div>
	    		<div class="price">$99</div>
	    	</router-link>	
			<router-link to class='classify_content clearfix'>
	    		<div class="imgBox"><img src="../../../../upload/ceshi.jpg" height="360" width="360"></div>
	    		<div class="list_title">休闲冰棉</div>
	    		<div class="price">$99</div>
	    	</router-link>
			<router-link to class='classify_content clearfix'>
	    		<div class="imgBox"><img src="../../../../upload/ceshi.jpg" height="360" width="360"></div>
	    		<div class="list_title">休闲冰棉</div>
	    		<div class="price">$99</div>
	    	</router-link>
	    	<div class="halvingLine">
		--------------------  我是有底线的 -------------------- 
	    	</div>	    		    	    	
	    </div>
	    <classify_foot></classify_foot>
	</div>
</template>

<script type="text/javascript">
	import './classify.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery' 
	import foot from '../foot/foot.vue'
	import head from '../head/head.vue'
	export default {
		components:{
			'classify_foot':foot,
			'classify_head':head
		},
		data:function(){
			return {}
		},
		methods:{
			
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 5,
		        paginationClickable: true,
		        spaceBetween: 20,
		        freeMode: true
			})
		}
	}
</script>