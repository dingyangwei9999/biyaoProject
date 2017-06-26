<template>
	<div id="updata-container">
		<div class="updata-top">
			<div class="updata-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="updata-msg">
				<p>修改密码</p>
			</div>
			<div class="updata-menu"></div>
		</div>
		<div class="updata-main">
			<div class="updata-con">
				<div class="label-password">
					<input type="password" class="password" placeholder="请输入原登录密码" maxlength="32" v-model="oldpsw">
				</div>
				<div class="label-password">
					<input type="password" class="password" placeholder="请设置新登录密码" maxlength="32" v-model="psw">
				</div>
				<div class="label-password">
					<input type="password" class="password" placeholder="请再次输入新登录密码" maxlength="32" v-model="pswtoo">
				</div>
				<button class="updata-btn" @click="updata">提交</button>
			</div>
			<div class="register-psw">
					<a class="psw-txt" @click="find">
						忘记密码！
					</a>
				</div>
			<div class="text-list">
				<ul>
					<li>为了您的账号安全，新旧密码不能相同</li>
					<li>请输入6-32位字符，需要字母、数字、符号两种以上组合</li>
					<li>请区分大小写</li>
				</ul>
			</div>
		</div>
		<foot></foot>
	</div>
</template>


<script type="text/javascript">
	import './updataPsw.scss'
	import Footer from '../foot/foot.vue'
	import {mapActions } from 'vuex';

	export default{
		components:{
			'foot':Footer
		},
		data:function(){
			return {
				oldpsw : '',
				psw : '',
				pswtoo:''
			}
		},
		methods:{
			updata:function(){
				this.$store.dispatch('updata',{
					oldpsw:this.oldpsw,psw:this.psw,pswtoo:this.pswtoo
				})
			},
			find:function(){
				this.$store.dispatch('find')
			},
			back:function(){
				this.$router.go(-1)
			}
		}
	}
</script>