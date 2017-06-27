<template>
	<div id="login-container">
		<div class="login-top">
			<div class="login-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="login-msg">
				<p>登&nbsp;录</p>
			</div>
			<div class="login-menu"></div>
		</div>
		<div class="login-main">
			<div class="login-con">
				<div class="label-username">
					<input type="text" class="username" placeholder="请输入手机号" maxlength="11" v-model="username" @input="inputs">
					<i class="iconfont icon-jinakangbaoicons18" v-show="show" @click="del"></i>
				</div>
				<div class="label-password">
					<input type="password" class="password" placeholder="请输入登录密码" maxlength="32" v-model="psw" @input="inputss" ref="psw">
					<i class="iconfont icon-yanjing" id="yanjing" v-show="shows" :style="{color:color}" @click="colors"></i>
					<i class="iconfont icon-jinakangbaoicons18" id="cha" v-show="shows" @click="dels"></i>
				</div>
				<button class="login-btn" @click="logins">登录</button>
				<div class="register-psw">
					<a class="register-txt" @click="register">
						还没有账号？快速注册
					</a>
					<a class="psw-txt" @click="change">
						忘记密码？
					</a>
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>


<script type="text/javascript">
	import './logins.scss'
	import Footer from '../foot/foot.vue'
	import {mapActions } from 'vuex';

	export default{
		components:{
			'foot':Footer
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
		methods:{
			logins:function(){
				this.$store.dispatch('logins',{
					username:this.username,psw:this.psw
				})
			},
			register:function(){
				
				this.$store.dispatch('zhuce')
			},
			change:function(){
				this.$store.dispatch('changes')
			},
			back:function(){
				this.$router.go(-1)
			},
			inputs:function(){
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
