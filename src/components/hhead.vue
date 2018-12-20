<style lang="less">
@import '../less/common.less';
.swiper-wrap{
  position: relative;
  height:180rpx;
}
.swiper{
  height:180rpx;
  background: @mainBgColor;
}
.slide-image{
  width:750rpx;
  height:180rpx;
}
.indicator-dots{
  position: absolute;
  bottom:14rpx;
  right:30rpx;
  right:30rpx;
  height:30rpx;
  line-height: 30rpx;
  z-index:100;
  .dots-item{
    width: 11rpx;
    height:25rpx;
    margin-left:15rpx;
  }
}
</style>
<template>
<div class="swiper-wrap">
  <img src="https://img.58cdn.com.cn/weixin/img/weapp-huanhuan/header.png" mode="widthFit" class="slide-image" />
</div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods:{
    gotoPage(url){
    },
    handleChange(e){
    }
  }
}
</script>