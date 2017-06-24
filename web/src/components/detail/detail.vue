<template>
	<div class="detail-box">
		<header>
			<a href="javascript:history.back(1)" ><i class="iconfont icon-danzuokuohao"></i></a>
			<h2>纯棉珠地净色Polo6001</h2>
		</header>
		<main @scroll="scroll">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			    	<div v-for="(item,index) in bannerImg" class="swiper-slide">
			    		<img :src="item">
			    	</div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
			<div class="product-msg">
				<div class="top">
					<span class="price">189</span>
					<p>生产周期<span>18</span>天</p>
				</div>
				<h2>选择规格尺码</h2>
				<h2>商品评价</h2>
				<div class="grade">
					<div class="g-left">
						<span>4.7</span><br>
						商品质量
					</div>
					<div class="g-right">
						<span>4.8</span><br>
						服务态度			
					</div>
				</div>
			</div>
			<div class="describe">
				<dl>
					<dt>商品名称</dt>
					<dd>纯棉珠地净色Polo6001</dd>
				</dl>
				<dl>
					<dt>商品名称</dt>
					<dd>纯棉珠地净色Polo6001</dd>
				</dl>				
				<dl>
					<dt>商品名称</dt>
					<dd>纯棉珠地净色Polo6001纯棉珠地净色Polo6001纯棉珠地净色Polo6001</dd>
				</dl>				
			</div>
			<div class="listImgs">
				<img v-for="item in bannerImg" :src="item">
			</div>
		</main>
		<footer>
			<span class="goCar"><i class="iconfont icon-gouwuche"></i></span>
			<span class="addCar">加入购物车</span>
			<span class="buy">立即购买</span>
		</footer>
		<goTop ref="goTop"></goTop>
	</div>
</template>

<script type="text/javascript">
	import './detail.scss'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.css'

	import $ from 'jquery'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.js'

	import goTop from '../goTop/goTop.vue'

	export default {
		data(){
			return {
				bannerImg: ['/src/assets/imgs/banner0.jpg','/src/assets/imgs/banner1.jpg','/src/assets/imgs/banner2.jpg','/src/assets/imgs/detailbanner.jpg']
			}
		},
		components: {
			'goTop': goTop
		},
		methods: {
			scroll(event){
				this.$refs.goTop.ctrlShow(event.target.scrollTop);
			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
				autoplay: 3000,
				loop: true,
				pagination: '.swiper-pagination',
			});	
			let target = $('main');
			this.$refs.goTop.getScrollTarget(target);	
		}
	}
</script>