<template>
	<div id="login-container">
		<div class="login-top">
			<div class="login-back">
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
					<input type="text" class="username" placeholder="请输入手机号" maxlength="11">
				</div>
				<div class="label-password">
					<input type="password" class="password" placeholder="请输入登录密码" maxlength="32">
				</div>
				<button class="login-btn">登录</button>
				<div class="register-psw">
					<a href="" class="register-txt">
						还没有账号？快速注册
					</a>
					<a href="" class="psw-txt">
						忘记密码？
					</a>
				</div>
			</div>
		</div>
		<div class="login-footer"></div>
	</div>
</template>


<script type="text/javascript">
	import './logins.scss'
	// import { mapGetters, mapActions } from 'vuex';

	export default{
		components:{

		}
	}
</script>
