<template>
	<div class="detail-box">
		<header>
			<a href="javascript:history.back(1)" ><i class="iconfont icon-danzuokuohao"></i></a>
			<!-- 标题 -->
			<h2>{{response.name}}</h2>
		</header>
		<main @scroll="scroll">
			<!-- 轮播图 -->
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			    	<!-- 遍历轮播图图片 -->
			    	<div v-for="(item,index) in bannerImgs" class="swiper-slide">
			    		<img :src="erp.uploadUrl + item">
			    	</div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
			<!-- 商品信息 -->
			<div class="product-msg">
				<div class="top">
					<span class="price">{{response.price}}</span>
					<p>生产周期<span>18</span>天</p>
				</div>
				<h2 @touchstart="showInfoBox">选择规格尺码</h2>
				<h2>商品评价</h2>
				<div class="grade">
					<div class="g-left">
						<span>{{qualityGrade}}</span><br>
						商品质量
					</div>
					<div class="g-right">
						<span>{{serviceGrade}}</span><br>
						服务态度			
					</div>
				</div>
			</div>
			<div class="describe">
				<!-- 遍历商品描述信息 -->
				<dl v-for="(value,key) in response" v-if="describe.indexOf(key) > -1">
					<dt>{{describeTitle[describe.indexOf(key)]}}</dt>
					<dd>{{value}}</dd>
				</dl>		
			</div>
			<div class="listImgs">
				<img v-for="item in listImgs" :src="erp.uploadUrl +item">
			</div>
		</main>
		<!-- 底部3个按钮 -->
		<footer>
			<span class="goCar" @touchstart="$router.push({'name':'shoppingCart'})"><i class="iconfont icon-gouwuche"></i></span>
			<span class="addCar" @touchstart="showInfoBox">加入购物车</span>
			<span class="buy" @touchstart="showInfoBox">立即购买</span>
		</footer>
		<goTop ref="goTop"></goTop>
		<!-- 选择规格尺码背景遮罩 -->
		<transition name="shadeFullAnimate">
		<div class="shadeFull" v-show="infoBoxShow"  @touchstart="showInfoBox"></div>
		</transition>
		<!-- 选择规格尺码弹出框 -->
		<transition name="info-boxAnimate">
		<div class="info-box" v-show="infoBoxShow">
			<div class="top clearfix">
				<div class="simg-box"><img :src="erp.uploadUrl + productPreviewImg"></div>
				<div class="t-box">
					<p class="info-price">189</p>
					<p class="cycle">生产周期18天</p>
				</div>
				<span class="iconfont icon-cha" @touchstart="showInfoBox"></span>
			</div>
			<div class="color">
				<h3>颜色</h3>
				<!-- 遍历商品颜色 -->
				<span :class="checkedColorMark === index ? 'actived' : ''" v-for="(item,index) in color" @touchstart="colorHandle(index)" >{{item}}</span>
			</div>
			<div class="size" ref="size">
				<h3>尺寸</h3>
				<!-- 遍历商品尺码 -->
				<span :class="checkedSizeMark === index ? 'actived' : ''" v-for="(item,index) in size" @touchstart="sizeHandle(index)">{{item}}</span>
			</div>
			<div class="buy-num clearfix">
				<p>购买数量</p>
				<div>
				<!-- 去除间隔不要删除 -->
					<span @touchstart="changeBuyNum" class="sub">-</span><!-- 
					 --><span ref="buyNum">{{buyNum}}</span><!-- 
					 --><span @touchstart="changeBuyNum" class="plus">+</span>
				</div>
			</div>
			<div class="b-affirm clearfix">
				<router-link to="/shoppingCart"><span class="b-goCar"><i class="iconfont icon-gouwuche"></i></span></router-link><!-- 
				--><span class="b-addCar" @touchstart="addCar">确定</span>				
			</div>
		</div>
		</transition>
	</div>
</template>

<script type="text/javascript">
	import './detail.scss'
	import {mapGetters,mapActions} from 'vuex'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.css'

	import $ from 'jquery'
	import '../../assets/jquery-swiper/swiper-3.4.2.min.js'
	import router from '../../router/index.js'
	import http from '../../utils/HttpClient.js'
	import erp from '../../global.js'
	import goTop from '../goTop/goTop.vue'

	// let erp = {baseUrl:'http://10.3.133.81:8787/'}
	export default {
		data(){
			return {
				erp: erp,
				checkedColorMark: 0,
				checkedSizeMark: 0,
				infoBoxShow: false,
				productPreviewImg:null,
				buyNum: 1,
				response: {},
				bannerImgs: [],
				listImgs: [],
				color: [],
				qualityGrade: null,
				serviceGrade: null,
				size: [],
				chooseColor: null,
				chooseSize: null,
				_id: null,
				price: null,
				name: null,
				// describe是商品描述信息，describeTitle是一一对应的中文名称
				describe: ['brand', 'type', 'origin', 'material', 'attention', 'features'],
				describeTitle: ['品牌', '类型', '生产地', '布料', '清洗事项', '商家描述']
			}
		},
		created(){
			// console.log(this.$route.params);
			// 594e332602885618ac2da3a9
			let _id = this.$route.params._id;
			http.post(erp.baseUrl + 'gainProductById',{_id: _id}).then(response => {
				console.log(response);
				response = response[0];
				this.response = response;
				this.bannerImgs = response.bannerImg;
				this.productPreviewImg = response.listImg;
				this.listImgs = response.detailImg;
				this.color = response.color.split('、');
				this.size = response.size.split(' ');
				this._id = response._id;
				this.price = response.price;
				this.name = response.name;
				//给定默认值
				this.chooseColor = this.color[0];
				this.chooseSize = this.size[0];
				//模拟评分数据
				this.qualityGrade = (Math.random()*2+3).toFixed(1);
				this.serviceGrade = (Math.random()*2+3).toFixed(1);
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
			// 加入购物车
			addCar(){

				let userId = sessionStorage.getItem('id');
				console.log(userId,'=====')
				if(!userId){
					console.log('enter')
					let res = confirm('您还未登录，是否去登陆？');
					if(res){
						router.push({'name':'logins'});
					}
					return;
				}
				let obj = {};
				obj.productId = this._id;
				obj.productPreviewImg = this.productPreviewImg;
				obj.name = this.name;
				obj.count = this.buyNum;
				obj.price = this.price;
				obj.size = this.chooseSize;
				obj.color = this.chooseColor;
				obj.selected = true;
				obj.userId = userId;
				console.log(obj);
				// http.post(erp.account + 'addCart',{data: JSON.stringify(obj)})
			},
			//显示隐藏选择规格尺码弹出框
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
			},
			// 选择指定颜色
			colorHandle(index){
				this.chooseColor = this.color[index];
				this.checkedColorMark = index;
				console.log(this.chooseColor,this.$refs);
			},
			// 选择指定尺码
			sizeHandle(index){
				this.chooseSize = this.size[index];
				this.checkedSizeMark = index;
				console.log(this.chooseSize);
			}
		},
		mounted(){
			// 实例化轮播图
			var mySwiper = new Swiper ('.swiper-container', {
				autoplay: 3000,
				loop: true,
				pagination: '.swiper-pagination',
				//修改swiper自己或子元素时，自动初始化swiper
				observer:true,
				//修改swiper的父元素时，自动初始化swiper
				observeParents:true
			});
			
			//获取窗口滚动的元素传递给返回顶部组件
			let target = $('main');
			this.$refs.goTop.getScrollTarget(target);	
		}
	}
</script>