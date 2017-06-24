<template>
	<div class="register-container">
		<div class="register-top">
			<div class="register-back">
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
					<input type="text" class="username" placeholder="请输入手机号" maxlength="11">
				</div>
				<div class="label-password">
					<input type="password" class="password" placeholder="请输入6-32位登录密码" maxlength="32">
				</div>
				<button class="register-btn">登录</button>
				<div class="register-psw">
					<a href="" class="register-txt">
						已有账号！立即注册
					</a>
				</div>
			</div>
		</div>
		<div class="register-footer"></div>
	</div>
</template>

<script>
	import './register.scss';

	export default{
		components:{

		}
	}
</script>