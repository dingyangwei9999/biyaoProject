<template>
	<div class="detail-box">
		<header>
			<a href="javascript:history.back(1)" ><i class="iconfont icon-danzuokuohao"></i></a>
			<h2>{{response.name}}</h2>
		</header>
		<main @scroll="scroll">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			    	<div v-for="(item,index) in bannerImgs" class="swiper-slide">
			    		<img :src="erp.uploadUrl + item">
			    	</div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
			<div class="product-msg">
				<div class="top">
					<span class="price">{{response.price}}</span>
					<p>生产周期<span>18</span>天</p>
				</div>
				<h2 @touchstart="showInfoBox">选择规格尺码</h2>
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
				<dl v-for="(value,key) in response" v-if="describe.indexOf(key) > -1">
					<dt>{{key}}</dt>
					<dd>{{value}}</dd>
				</dl>
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
				<img v-for="item in listImgs" :src="erp.uploadUrl +item">
			</div>
		</main>
		<footer @click="getData">
			<span class="goCar"><i class="iconfont icon-gouwuche"></i></span>
			<span class="addCar">加入购物车</span>
			<span class="buy">立即购买</span>
		</footer>
		<goTop ref="goTop"></goTop>
		<div class="info-box" v-show="infoBoxShow">
			<div class="top clearfix">
				<div class="simg-box"><img src="../../assets/imgs/detailbanner.jpg"></div>
				<div class="t-box">
					<p class="info-price">189</p>
					<p class="cycle">生产周期18天</p>
				</div>
				<span class="iconfont icon-cha" @touchstart="showInfoBox"></span>
			</div>
			<div class="color">
				<h3>颜色</h3>
				<span v-for="item in color">{{item}}</span>
			</div>
			<div class="size">
				<h3>尺寸</h3>
				<span v-for="item in size">{{item}}</span>
			</div>
			<div class="buy-num clearfix">
				<p>购买数量</p>
				<div>
				<!-- 去除间隔 -->
					<span @touchstart="changeBuyNum" class="sub">-</span><!-- 
					 --><span ref="buyNum">{{buyNum}}</span><!-- 
					 --><span @touchstart="changeBuyNum" class="plus">+</span>
				</div>
			</div>
			<div class="b-affirm clearfix">
				<span class="b-goCar"><i class="iconfont icon-gouwuche"></i></span><!-- 
				--><span class="b-addCar">加入购物车</span>				
			</div>
		</div>
		<!-- {{this.$store.state.detail.response}} -->
	</div>
</template>

<script type="text/javascript">
	import './detail.scss'
	import {mapGetters,mapActions} from 'vuex'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.css'

	import $ from 'jquery'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.js'
	import http from '../../utils/HttpClient.js'
	import erp from '../../global.js'
	import goTop from '../goTop/goTop.vue'

	export default {
		data(){
			return {
				erp: erp,
				bannerImg: ['/src/assets/imgs/banner0.jpg','/src/assets/imgs/banner1.jpg','/src/assets/imgs/banner2.jpg','/src/assets/imgs/detailbanner.jpg'],
				infoBoxShow: false,
				buyNum: 1,
				response: {},
				bannerImgs: [],
				listImgs: [],
				color: [],
				size: [],
				chooseColor: null,
				chooseSize: null,
				_id: null,
				price: null,
				name: null,
				describe: ['material', 'features']
			}
		},
		created(){
			http.post(erp.baseUrl + 'getProduct',{_id:'fefefe'}).then(response => {
				console.log(response);
				response = response[0];
				this.response = response;
				this.bannerImgs = response.bannerImg;
				this.listImgs = response.detailImg;
				this.color = response.color.split('、');
				this.size = response.size.split(' ');
				this._id = response._id;
				this.price = response.price;
				this.name = response.name;
			});	
		},
		computed:{
		},
		components: {
			'goTop': goTop
		},
		methods: {
			//窗口滚动事件
			scroll(event){
				this.$refs.goTop.ctrlShow(event.target.scrollTop);
			},
			getData(){
				// this.$store.dispatch('getData',{test:1})
				// setTimeout(()=>{
				// 	this.aa = this.$store.state.detail.response
				// 	console.log(this.aa)
				// },2000)
					
				// http.post(erp.baseUrl + 'gainProductById',{_id:'fefefe'}).then(response => {
				// 	console.log(response)
				// });		
						
			},
			//显示隐藏规格尺码
			showInfoBox(){
				this.infoBoxShow = !this.infoBoxShow;
			},
			//购买数量
			changeBuyNum(event){
				let judge = event.target.className;
				if(judge === 'sub'){
					--this.buyNum<1 ? this.buyNum=1 : null;
				}else if(judge === 'plus'){
					++this.buyNum;
				}
			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
				autoplay: 3000,
				loop: true,
				pagination: '.swiper-pagination',
				//修改swiper自己或子元素时，自动初始化swiper
				observer:true,
				//修改swiper的父元素时，自动初始化swiper
				observeParents:true
			});
			// console.log(this.$route.params)
			//获取窗口滚动的元素传递给返回顶部组件
			let target = $('main');
			this.$refs.goTop.getScrollTarget(target);	
		}
	}
</script>