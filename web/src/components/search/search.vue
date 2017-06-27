<template>
	<div class="search-box">
		<header>
			<input type="text" placeholder="请输入要搜索的商品" v-on:input="inputFn"  v-model='searchValue'>
			<i class="iconfont icon-search" @touchstart="startSearch"></i>
			<i class="iconfont icon-cha" @touchstart='s_close' v-show='this.searchClose' id="search_cha"></i>
		</header>
		<main>
			<div v-show='this.content' class="search-history">
				<div class="search-warp">
					<h4>历史记录<i class="iconfont icon-lajixiang" @click='del'></i></h4>
					<ul class="tianjia" >
						<li v-for='item in history'>{{item}}</li>
					</ul>
					<h4>热门搜索</h4>
					<ul class="tianjia">
						<li v-for='(item1,idx) in hot' @click='hotSearch(idx,$event)'>{{item1}}</li>
					</ul>
				</div>
			</div>
			<ul v-show='!this.content' class="b_ist" @scroll="scroll" >
				<li v-for="(items,index) in searchData"><router-link :to="{name:'detail',params:{_id:items._id}}" >
					<div>
						<img :src="erp.uploadUrl+items.listImg">
					</div>
					<p class="title">{{items.name}}</p>
					<p class="price">{{items.price}}</p>
				</router-link></li>
				<!-- <img src="erp.uploadUrl+imgNull"> -->
				<div class="halvingLine">
		-----------------  我是有底线的 ----------------- 
	    	</div>	
			</ul>

		</main>
		<classify_backTop ref='goTop'></classify_backTop>
	</div>
</template>

<script type="text/javascript">
	import './search.scss'
	import $ from 'jquery'
	import { mapGetters, mapActions } from 'vuex'
	import http from '../../utils/HttpClient.js'
	import erp from '../../global.js'
	import backTop from '../goTop/goTop.vue'

	export default {
		components:{
			'classify_backTop':backTop

		},		
		data(){
			return {
				searchClose:false,
				searchValue:null,
				content:true,
				searchData:[],
				erp:erp,
				hot:['运动','运动鞋','男鞋','女装','男包','女包','女鞋'],
				history:[],
				imgNull:null
			}
		},
		methods: {	
			scroll(event){
				this.$refs.goTop.ctrlShow(event.target.scrollTop);
			},			
			startSearch:function(){
				this.content=false;
				// console.log(this.searchValue)
				http.post(erp.baseUrl+'searchProduct',{classify:this.searchValue}).then(response => {
					this.searchData = response;
					if(!response[0]){
						console.log('输入的数据找不到啊！！！！！')
					}
				})
			},
			inputFn:function(){
				this.searchValue?this.searchClose=true : this. 	searchClose=false;
					if(!this.searchValue){
						this.content=true;
					}			
			},
			s_close:function(){
				this.searchValue=null;
				this.searchClose=false;
				this.content=true;
			},
			hotSearch:function(idx,e){
				// console.log(idx,this.hot[idx])
				if(!(this.history.indexOf(this.hot[idx])>-1)){
					this.history.push(this.hot[idx])
					// window.sessionStorage.setItem('searchData',JSON.stringify(this.history))
					// let sesiongSearch = window.sessionStorage.getItem('searchData');
					// console.log(sesiongSearch,"=====>")
					// this.history = sesiongSearch;
				}
				let shuzhi = this.hot[idx]
				http.post(erp.baseUrl+'searchProduct',{classify:shuzhi}).then(response => {
					this.searchData = response;
				})	
				this.content=false;			

			},
			del:function(){
				// window.sessionStorage.removeItem('searchData')
				this.history=[];			

			}
		},
		mounted(){
			let target = $('.b_list');
			this.$refs.goTop.getScrollTarget(target);
			let indexCome=this.$route.params.keyword;
			let self = this;
			if(indexCome){console.log(indexCome,'======>')	
				http.post(erp.baseUrl+'searchProductByclass',{classify:indexCome}).then(response => {
					self.searchData = response;
					self.content=false;
				})
			}
		},
		create(){

		}
	}
</script>