<template>
	<div class="index-box">
		<header>
			<div class="header-wrap">
				<i class="iconfont icon-search"></i>
				<span>请输入要搜索的商品</span>
			</div>
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

			<div class="indexCategoryArea clearfix">
				<div class="left">
					<img src="../../assets/imgs/shidian.jpg">
				</div>
				<div class="right">
					<img src="../../assets/imgs/indexCategoryArea0.jpg" height="270" width="308" alt="">
					<img src="../../assets/imgs/indexCategoryArea1.jpg" alt="">
				</div>
			</div>
			<div class="productsArea">
				<h3>光学眼镜</h3>
				<router-link to="/">
					<div class="img-box">
						<img src="../../assets/imgs/guangxueyanjing.jpg">
						<div class="brand-box">
							<div class="brand">
								<div>Hugo Boss、PRADA</div>
								<div>制造商出品</div>
							</div>
						</div>
					</div>
				</router-link>
				<div class="commodity_list clearfix">
					
					<div class="commodity">
						<router-link to="/">
							<img src="../../assets/imgs/yanjing0.jpg">
							<p class="title">复古板材光学镜复古板材光学镜</p>
							<p class="price">239</p>
						</router-link>
					</div>
					<div class="commodity">
						<router-link to="/">
							<img src="../../assets/imgs/yanjing0.jpg">
							<p class="title">复古板材光学镜复古板材光学镜</p>
							<p class="price">239</p>
						</router-link>
					</div>
					<div class="commodity">
						<router-link to="/">
							<img src="../../assets/imgs/yanjing0.jpg">
							<p class="title">复古板材光学镜复古板材光学镜</p>
							<p class="price">239</p>
						</router-link>
					</div>							
					<div class="commodity">
						<router-link to="/">
							<img src="../../assets/imgs/yanjing0.jpg">
							<p class="title">复古板材光学镜复古板材光学镜</p>
							<p class="price">239</p>
						</router-link>
					</div>					

				</div>
				
			</div>
		</main>
		<footer></footer>
		<goTop ref="goTop"></goTop>
	</div>
</template>

<script type="text/javascript">
	import './index.scss'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.css'
	import $ from 'jquery'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.js'

	import goTop from '../goTop/goTop.vue'
	
	export default {
		data(){
			return {
				bannerImg: ['/src/assets/imgs/banner0.jpg','/src/assets/imgs/banner1.jpg','/src/assets/imgs/banner2.jpg','/src/assets/imgs/banner3.jpg']
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