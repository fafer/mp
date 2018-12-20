<style lang="less">
@import '../less/common.less';
.flower-item {
  width: 345rpx;
  background: #ffffff;
  box-shadow: 0 4rpx 12rpx 0 rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
  border-radius: 10rpx;
  margin-top: 20rpx;
  margin-right: 20rpx;
  &:active{
    background: #f6f6f6;
  }
  &-tit {
    margin-top: 31rpx;
    font-size: 28rpx;
    color: #000;
    font-weight: bold;
    padding: 0 20rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &-price-wrap {
    display: flex;
    height: 50rpx;
    padding: 0 20rpx;
    align-items: center;
    font-size: 0;
    box-sizing: content-box;
    margin-bottom:17rpx;
    .item-logo{
      width:26rpx;
      height:26rpx;
      vertical-align: middle;
      margin-right:10rpx;
    }
    .flower-item-price {
      font-weight: bold;
      font-size: 28rpx;
      height: 50rpx;
      color: @mainColor;
      line-height: 50rpx;
      vertical-align: middle;
    }
    .price{
      line-height: 48rpx;
    }
  }
  &-pic {
    display: block;
    width: 345rpx;
    height: 280rpx;
    background: #666;
  }
  &-hd {
    display: flex;
    padding: 20rpx;
    &-l {
      width: 30rpx;
      height: 30rpx;
      margin-right: 12rpx;
      border-radius: 50%;
      display: block;
    }
    .flower-item-username {
      font-size: 24rpx;
      color: #9ba0a4;
      line-height: 33rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }
    .flower-item-location {
      max-width: 100rpx;
      font-size: 24rpx;
      color: #999;
      line-height: 28rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
<template>
<div class="flower-item">
   <div class="flower-item-tit">{{item.title}}</div>
    <div class="flower-item-price-wrap">
        <img src="/static/logo-small-icon.png" mode="aspectFit"  class="item-logo"/>
        <div class="flower-item-price"><span class="price">{{item.price}}</span>红果</div>
    </div>
    <img :lazy-load="true" class="flower-item-pic" mode="aspectFill" :src="item.pics[0]"/>
    <div class="flower-item-hd">
      <img class="flower-item-hd-l" mode="scaleToFill" :src="item.salerPic || 'https://img.58cdn.com.cn/weixin/img/weapp-huanhuan/default-logo.jpg'"/>
       <div class="flower-item-username">{{item.salerName}}</div>
      <div class="flower-item-location">{{item.localName}}</div>
    </div>
</div>
</template>
<script>
export default {
  props: ['item'],
  data() {
    return {
    }
  },
  methods:{
    
  }
}
</script>