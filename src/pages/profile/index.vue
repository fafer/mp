<style lang="less">
page {
  background: #f8f8f8;
  font-family: PingFangSC-Regular;
}
.list-page-wrap {
  position: relative;
  height: 100vh;
}
.no-more-tip {
  font-size: 26rpx;
  color: #666;
  line-height: 56rpx;
  text-align: center;
}

.nav-hd {
  height: 100rpx;
  background: #fff;
  z-index: 10;
  white-space: nowrap;
  // display: flex;
  &.nav-fixed {
    position: fixed;
    top: 0;
  }
  .nav-hd-form {
    display: inline-block;
    padding:0 30rpx;
    // width: 100%;
    // flex: 1;
  }
  .nav-hd-btn {
    width: 100%;
  }
  .nav-hd-item {
    width: 100%;
    text-align: center;
    line-height: 100rpx;
    height: 100rpx;
    font-size: 28rpx;
    color: #765338;
  }
  .active {
    font-weight: bold;
    font-size: 36rpx;
    color: #ff3d02;
    &::before {
      content: '';
      position: absolute;
      bottom: 11rpx;
      height: 9rpx;
      width: 53rpx;
      left: 50%;
      transform: translateX(-50%);
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAICAYAAAC2wNw9AAAABGdBTUEAALGPC/xhBQAAAilJREFUOBHNlLtqVFEUhv915pLMLeKVGKwkELESAxZCRBkCKjY+gI2FL2AlEogv4KPYpbCbIhIUC8VCsRosFNTCJDPkTMZzlt+akxGLiXiBkA2Lf93OPmvvtfZv+sPlN+antPthQVl2Xu5nldusTLNynZJ5C2xgN9mugZSxSyPUCI1Yhi/Hl430QNcAO8UuUDbAF3Yffw/pY/eVWE+eFz63TeJbCkzAcrKprLQlNb9Z50vP+Gji8uX6nAaDJckuSx5ygc3LE5MPi9OSRz8L9HuLFb1/3Vbutyi+rTQ9V9TpB1nukJ+lyBhDp2MWnaIL2kZ6dGgKnEGOMC0z2KDqUr5t3m4d13DnAS29S8JRZLy22Widwz2jvbfBxXHgtxijJe0gUcx3JEYrxszAGMMKWh29hp4gf7vihj9RWxd8S11v5KUNtR++tNXV3PxK6TmnvLS3Kzdja/zmibyyLk9SVS1Xli4r88fknNzL+x+IgoYcKrpQHLA46P57mm0Q5EL8NDiHVCYkf1bJ7psvJe8ILkxIODyuxG7q2spTdTp09BXE059XnjEx1uaQ1ym0NSrW1DO/2joh79+BtS7iPEMLj41GQprGjhuMsSgxIoFlYlX0mOF9CYXYwa+CRVf+uagRje98ramyW9cwq8vyBmMZlN2ExguUNyFq7GRsN7iMoPewC13xljze0zT+GvHAKnZQf4zWr+8saD8onvcdJGEf0bt8/0JJdc06afcH0yPBYTTvGgIAAAAASUVORK5CYII=);
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: left top;
    }
  }
}
.nav-hd ::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.nav-bd {
  width: 100%;
  padding-left: 20rpx;
  padding-bottom: 20rpx;
  // padding: 0 20rpx 20rpx;
  box-sizing: border-box;
  overflow: hidden;
  background: #f6f6f6;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
}

.ph100 {
  height: 100rpx;
  background: #fff;
}

//list start
.info-list {
  background: #fff;
  padding: 0 40rpx;
}
.list-item {
  display: flex;
  height: 200rpx;
  padding: 30rpx 0;
  background: #fff;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
}
.info-item-detail {
  flex: 1;
}
.info-item-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 28rpx;
  color: #333333;
  line-height: 41rpx;
  min-height: 82rpx;
  word-break: break-all;
}
.info-top-icon {
  width: 28rpx;
  height: 28rpx;
  line-height: 41rpx;
  margin-right: 10rpx;
}
.info-img-wrap,
.info-img {
  height: 128rpx;
  width: 110rpx;
}
.info-img-wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 28rpx;
}
.info-item-label {
  border: 1rpx solid #ff552e;
  border-radius: 6rpx;
  font-size: 22rpx;
  line-height: 22rpx;
  color: #ff552e;
  padding: 0 10rpx;
  margin-right: 20rpx;
}
.info-item-time {
  font-size: 22rpx;
  color: #999999;
  line-height: 22rpx;
}
.back-flower {
  position: fixed;
  bottom: 40rpx;
  left: 0rpx;
  z-index: 50;
  width: 115rpx;
  height: 50rpx;
  border-top-right-radius: 25rpx;
  border-bottom-right-radius: 25rpx;
  font-size: 28rpx;
  text-align: center;
  line-height: 50rpx;
  background: #f26037;
  color: #fff;
}
.get-flower {
  position: fixed;
  bottom: 20rpx;
  right: 20rpx;
  z-index: 50;
  width: 119rpx;
  height: 157rpx;
  background: url('https://img.58cdn.com.cn/weixin/img/weapp-tongzhen/flower/get_flower.gif')
    no-repeat;
  background-size: cover;
}
.goto-top-wrap {
  position: fixed;
  bottom: 20rpx;
  left: 30rpx;
  width: 96rpx;
  height: 96rpx;
  .goto-top {
    width: 96rpx;
    height: 96rpx;
  }
}
//list end
</style>
<template>
  <div class="container">
    <div class="list-page-wrap">
      <headerBanner />
    </div>
  </div>
</template>

<script>
import headerBanner from '@/components/hhead'
export default {
  data () {
    return {
      name:'profile'
    }
  },

  components: {
    headerBanner
  },

  methods: {
    
  },

  created () {
  }
}
</script>
