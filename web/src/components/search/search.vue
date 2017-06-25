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
					<h4>历史记录<i class="iconfont icon-lajixiang"></i></h4>
					<ul class="tianjia">
						<li>666</li>
						<li>666</li>
						<li>666</li>
					</ul>
					<h4>热门搜索</h4>
					<ul class="tianjia">
						<li>运动</li>
						<li>牛仔裤</li>
					</ul>
				</div>
			</div>
			<ul v-show='!this.content'>
				<li><router-link to="/">
					<div>
						<img src="../../assets/imgs/search0.jpg">
					</div>
					<p>大马士革钢切肉刀</p>
					<p class="price">229</p>
				</router-link></li>
				<li><router-link to="/">
					<div>
						<img src="../../assets/imgs/search0.jpg">
					</div>
					<p class="title">大马士革钢切肉刀</p>
					<p class="price">229</p>
				</router-link></li>											
			</ul>
		</main>
	</div>
</template>

<script type="text/javascript">
	import './search.scss'
	import $ from 'jquery'

	export default {
		data(){
			return {
				searchClose:false,
				searchValue:null,
				content:true

			}
		},
		methods: {	
			startSearch:function(){
				this.content=false;
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
			}
		}
	}
</script>