<template>
	<div class="mine">
		<img src="../../../../upload/emptymessage.png" height="495" width="375">
	</div>
</template>

<script>
	import './message.scss';

	export default{
		components:{

		},
		methods:{
			back:function(){
				this.$router.go(-1)
			}
		}
		
	}
</script>	