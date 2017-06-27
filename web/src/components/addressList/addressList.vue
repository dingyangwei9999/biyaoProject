<template>
	<div id="address-container">
		<div class="address-top">
			<div class="address-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="address-msg">
				<p>地址管理</p>
			</div>
			<div class="address-menu"></div>
		</div>
		<div class="address-main">
			<button class="addAddress" @click="add">添加新地址</button>
			<div class="address-text">
				<div class="address0">
					<div class="address1">sdfsdf</div>
					<div class="address2">dfdfdf</div>
				</div>
				<div class="address12">
					<span class="span1">
						<i class="iconfont icon-dagou1"></i>
					</span>
					<span class="span2">设为默认地址</span>
					<span class="span3">&nbsp;删除</span>
					<span class="span4">编辑&nbsp;|</span>
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import './addressList.scss';
	import Footer from '../foot/foot.vue'
	import {mapActions } from 'vuex';

	export default{
		components:{
			'foot':Footer
		},
		data:function(){
			return {
				
			}
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			},
			add:function(){
				this.$store.dispatch('add')
			}
		}
	}
</script>