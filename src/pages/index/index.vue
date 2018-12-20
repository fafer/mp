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
    position: relative;
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
  <div class="list-page-wrap" >
    <headerBanner/>
    <div class="nav-hd">
      <form class="nav-hd-form" v-for="(item, index) in navTopArr" :key="index"><button
            form-type="submit"
            hover-class="none"
            class="nav-hd-btn"
            ><div :class="curInd == index ? 'nav-hd-item active' : 'nav-hd-item '">{{item.value}}</div></button>
            </form>
    </div>
    <div class="nav-bd">
      <item v-for="(item, index) in items" :item="item" :key="index"></item>
    </div>
  </div>
</template>

<script>
import headerBanner from '@/components/hhead'
import item from '@/components/item'

export default {
  data () {
    return {
      curInd:0,
      scrollLeft: 0,
      toview: '',
      navTopArr:[{"log":"quanbu","cateid":"35|36|37|39|40|41|42|43|44|45|46|48|50|248|249|250|254|481|558|559|770|2072|2073|248|249|250|254|481|559|30|240","name":"0","value":"全部"},{"log":"jiadian","cateid":"39","name":"39","value":"家电"},{"log":"shuma","cateid":"37","name":"37","value":"数码"},{"log":"jiaju","cateid":"558","name":"558","value":"家具"},{"log":"muying","cateid":"45","name":"45","value":"母婴"},{"log":"danche","cateid":"30","name":"30","value":"摩托车"},{"log":"zixingche","cateid":"240","name":"240","value":"自行车电动车"},{"log":"qita","cateid":"35|36|40|41|42|43|44|46|48|50|248|249|250|254|481|559|770|2072|2073|248|249|250|254|481|559","name":"50","value":"其它"}],
      items:[{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false},{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false},{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false},{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false},{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false},{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false},{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false},{"id":"36077114671678","title":"转让减肥药奥利司他胶囊","detail":"全新，去药企临走赠送了十盒，本人很瘦就不用减肥了，为了避免浪费现在低价转让，看了下京东自营价格55每盒，想要的自己报个合适的价格即可","state":3,"price":3500,"pics":["https://pic3.58cdn.com.cn/mobile/big/n_v2174be61dce524dad85a2be002b9969fd.jpg?w=400&watermark=1","https://pic7.58cdn.com.cn/mobile/big/n_v28b12f5bb6fd549368b3387ef8ef87ba3.jpg?w=400&watermark=1","https://pic4.58cdn.com.cn/mobile/big/n_v2e1cef0f886074d6cb5ccf577d2eaae82.jpg?w=400&watermark=1"],"localName":"s","address":"北京市朝阳区朝外大街8号蓝岛大厦东区5层","longti":"116.456284","lati":"39.928215","salerPic":"https://pic2.58cdn.com.cn/m1/bigimage/n_v21a1dec15332445e0ba60b529809a0085.jpg","salerName":"汇聚传媒","isSaler":0,"time":"11-10","cateId":44,"userid":0,"store":false}],
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    headerBanner,
    item
  },

  methods: {
   init() {
     console.log('init')
   }
  },

  created () {
    this.init()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
