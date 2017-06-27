<template>
	<div class="register-container">
		<div class="register-top">
			<div class="register-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="register-msg">
				<p>注册必要</p>
			</div>
			<div class="register-menu"></div>
		</div>
		<div class="register-main">
			<div class="register-con">
				<div class="label-username">
					<input type="text" class="username" placeholder="请输入手机号" maxlength="11" v-model="username" @input="inputs">
					<i class="iconfont icon-jinakangbaoicons18" v-show="show" @click="del"></i>
				</div>
				<div class="label-password">
					<input type="password" class="password" placeholder="请输入6-32位登录密码" maxlength="32" v-model="psw" @input="inputss" ref="psw">
					<i class="iconfont icon-yanjing" id="yanjing" v-show="shows" :style="{color:color}" @click="colors"></i>
					<i class="iconfont icon-jinakangbaoicons18" id="cha"v-show="shows" @click="dels"></i>
				</div>
				<button class="register-btn" @click="register">注册</button>
				<div class="register-psw">
					<a class="register-txt" @click="denglu">
						已有账号！立即登录
					</a>
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import './register.scss';
	import Footer from '../foot/foot.vue'
	import {mapActions } from 'vuex'

	export default{
		components:{
			foot:Footer
		},
		data:function(){
			return {
				username : '',
				psw : '',
				show:false,
				shows:false,
				color:'#aaa'
			}
		},
		methods: {
			register:function(){
				this.$store.dispatch('register',{
					username:this.username,psw:this.psw
				})
			},
			denglu:function(){
				this.$store.dispatch('denglu')
			},
			back:function(){
				this.$router.go(-1)
			},
			inputs:function(){
				console.log(111)
				this.show = true;
				if (!this.username) {
					this.show = false
				}
			},
			inputss:function(){
				this.shows = true;
				this.color = '#aaa'
				if (!this.psw) {
					this.shows = false
				}
			},
			del:function(){
				this.username= '';
				if (!this.username) {
					this.show = false
				}
			},
			dels:function(){
				this.psw= '';
				if (!this.psw) {
					this.shows = false
				}
			},
			colors:function(){
				if (this.$refs.psw.type == 'password'){
					this.color = '#7f4395'
					this.$refs.psw.type = 'text'
				}else{
					this.color = '#aaa'
					this.$refs.psw.type = 'password'
				}
			}
		}
	}
</script>