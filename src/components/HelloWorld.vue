<template>
  <div class="hello" :style="{width:width,minHeight:height}">
    <div class="panel panel-default" width="1000px" :style="{minHeight:height,paddingTop:padding}">
      <h1 :style="{display:display}">
        <i :class="iconClassName"></i>
        <span>{{ title }}</span>
        <a href="javascript:void(0);">{{ more }}</a>
      </h1>
      <div class="panel-body">
        <!-- 首页 -->
        <slot name="home">
          <!-- <div class="row" slot="home">
            <div class="col-6 col-md-2" v-for="(item,index) in video" :key="index">
              <a href class="img">
                <img :src="item.videoImage" alt />
                <i class="play-ico"></i>
              </a>
              <div class="footer-tip">
                <h3 class="text-ellipsis">
                  <a
                    href="http://49.234.215.103:9999/detill/5f4383bcda017e48280b61af.html"
                  >{{item.videoTitle}}</a>
                </h3>
                <p style="line-height: 16px;" class="mt10 perf text-ellipsis">{{item.performer}}</p>
              </div>
            </div>
          </div>-->
        </slot>
        <slot name="move"></slot>
        <slot name="tv"></slot>
        <!-- 综艺 -->
        <slot name="variety"></slot>
        <!-- 动漫 -->
        <slot name="animation"></slot>
        <!-- 福利 -->
        <slot name="welfare"></slot>
        <!-- 咨询 -->
        <slot name="infomation"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import VideoList from "./VideoList";
export default {
  name: "HelloWorld",
  props: {
    title: String, //标题
    iconClassName: String, //图标类名
    more: String, //更多
    width: String, //宽度
    height: String,
    film: Array, //电影
    TV: Array, //电视
    varuety: [], //综艺
    display: String,
    padding: String,
  },
  components: {
    VideoList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h3 {
  margin: 40px 0 0;
}
h1 {
  position: relative;
  text-align: left;
  font-size: 24px;
  > a {
    font-size: 13px;
    float: right;
    vertical-align: middle;
    line-height: 28px;
  }
  > i {
    font-size: 25px;
  }
  > span {
    padding-left: 10px;
    font-size: 23px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.panel {
  padding: 10px;
  border: 1px solid gainsboro;
  border-radius: 4px;
  background: white;
}
</style>
