<template>
<transition name="fade-goTop">
	<div class="go-top" @touchstart="changeScrollTop" v-show="this.show">
		<i class="iconfont icon-xiangshangjiantou"></i>
	</div>
</transition>
</template>

<script type="text/javascript">
	import './goTop.scss'
	import $ from 'jquery'
	export default {
		data(){
			return {
				target: null,
				value: null,
				show: false
			}
		},
		methods: {	
			changeScrollTop(){
				this.target.animate({'scrollTop':0} ,300);
			},
			getScrollTarget(target){
				this.target = target;
			},
			//threshold阈值 达到指定值决定显示隐藏，默认200px
			ctrlShow(value, threshold){
				threshold = threshold || 200;
				this.value = value;
				if(this.value >= threshold){
					this.show = true;
				}else{
					this.show = false;
				}
			}
		}
	}
</script>