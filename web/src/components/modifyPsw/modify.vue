<template>
	<div id="modify-container">
		<div class="modify-top">
			<div class="modify-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="modify-msg">
				<p>找回密码</p>
			</div>
			<div class="modify-menu"></div>
		</div>
		<div class="modify-main">
			<div class="modify-con">
				<div class="label-username">
					<input type="text" class="username" placeholder="请输入手机号" maxlength="11" v-model="username">
				</div>
				<div class="label-password">
					<input type="password" class="password" placeholder="请输入6-32位登录密码" maxlength="32" v-model="psw">
				</div>
				<button class="modify-btn" @click="modify">提交</button>
			</div>
		</div>
		<foot></foot>
	</div>
</template>


<script type="text/javascript">
	import './modify.scss'
	import Footer from '../foot/foot.vue'
	import {mapActions } from 'vuex';

	export default{
		components:{
			'foot':Footer
		},
		data:function(){
			return {
				username : '',
				psw : ''
			}
		},
		methods:{
			modify:function(){
				console.log(111)
				this.$store.dispatch('modify',{
					username:this.username,psw:this.psw
				})
			},
			back:function(){
				this.$router.go(-1)
			}
		}
	}
</script>