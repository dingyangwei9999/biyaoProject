<template>
	<div class="index-box">
		<!-- 头部搜索 -->
		<header><router-link to="/search">
			<div class="header-wrap">
				<i class="iconfont icon-search"></i>
				<span>请输入要搜索的商品</span>
			</div></router-link>
		</header>
		<main @scroll="scroll">
			<!-- 轮播图 -->
			<div class="swiper-container">
				<!-- 遍历轮播图图片 -->
			    <div class="swiper-wrapper">
			    	<div v-for="(item,index) in bannerImgs" class="swiper-slide">
			    		<img :src="item">
			    	</div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
			<!-- 第一个区域块 -->
			<div class="indexCategoryArea clearfix">
				<div class="left">
					<img src="../../assets/imgs/shidian.jpg">
				</div>
				<div class="right">
					<img src="../../assets/imgs/indexCategoryArea0.jpg" height="270" width="308" alt="">
					<img src="../../assets/imgs/indexCategoryArea1.jpg" alt="">
				</div>
			</div>
			<!-- 厂商区域 -->
			<div class="productsArea">
				<!-- 标题 -->
				<h3>光学眼镜</h3>
				<router-link to="/">
					<!-- 大图 -->
					<div class="img-box">
						<img src="../../assets/imgs/guangxueyanjing.jpg">
						<div class="brand-box">
							<!-- 文字部分 -->
							<div class="brand">
								<div>Hugo Boss、PRADA</div>
								<div>制造商出品</div>
							</div>
						</div>
					</div>
				</router-link>
				<!-- 商品部分 -->
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
		<foot-component></foot-component>
		<goTop ref="goTop"></goTop>
	</div>
</template>

<script type="text/javascript">
	import './index.scss'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.css'
	import $ from 'jquery'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.js'
	import {mapGetters,mapActions} from 'vuex'
	import goTop from '../goTop/goTop.vue'
	import footComponent from '../foot/foot.vue'
	
	export default {
		data(){
			return {
				bannerImgs: ['/src/assets/imgs/banner0.jpg','/src/assets/imgs/banner1.jpg','/src/assets/imgs/banner2.jpg','/src/assets/imgs/banner3.jpg'],
				// 模拟数据
				classify:['服装', '鞋靴', '运动', '皮具', '居家'],
				response: null
			}
		},
		components: {
			goTop,
			footComponent
		},
		methods: {
			scroll(event){
				this.$refs.goTop.ctrlShow(event.target.scrollTop);
			}
		},
		created(){
			let requestData = {classify: this.classify[1]}
			this.$store.dispatch('getIndexFirstData',{requestData, callback:function(data){

					this.response = data.slice(0,3);
					console.log('success',this.response)
			}});
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