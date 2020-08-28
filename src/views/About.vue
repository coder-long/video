<template>
  <div class="about">
    <div class="about_content" v-for="(item,index) in title" :key="index">
      <HelloWorld :title="item" :iconClassName="iconClassName" :more="more">
        <!-- <p slot="move">这是使用了插槽,如果没有插槽,这里的内容不会显示</p> -->
        <VideoList slot="move" :video="video" :height="255+'px'"></VideoList>
      </HelloWorld>
    </div>

    <!--  -->
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import VideoList from "../components/VideoList";
export default {
  name: "About",
  data() {
    return {
      // title: "动作片",
      title: [
        "动作片",
        "喜剧片",
        "爱情片",
        "科幻片",
        "恐怖片",
        "剧情片",
        "战争片",
      ],
      iconClassName: "el-icon-s-unfold",
      more: "更多",
      video: [],
    };
  },
  components: {
    HelloWorld,
    VideoList,
  },
  created() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      this.$http.post("/api/video/list", { size: 12 }).then((res) => {
        this.video = res.data.data;
        console.log(res.data);
        console.log(this.video);
      });
    },
  },
};
</script>
<style lang='scss'  scoped>
.about {
  max-width: 1160px;
  margin: auto;
  > .about_content {
    margin-bottom: 15px;
  }
}
.row img {
  height: 255px;
  object-fit: cover;
}
.row > div {
  padding: 5px 14px;
}
.img {
  position: relative;
  display: block;
  height: 255px;
  background-position: 50% 50%;
  background-size: cover;
  overflow: hidden;
}
.play-ico {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3)
    url("http://49.234.215.103:9999/image/play.png") center no-repeat;
  transition: all 0.4s;
  opacity: 0;
  transform: scale(2);
}
.play-ico:hover {
  opacity: 0.9;
  transform: scale(1);
}
.cart-item .footer-tip h3 {
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  margin-top: 5px;
}
.cart-item .footer-tip p {
  line-height: 18px;
}
.cart-item .footer-tip h3 a {
  color: #333;
}
.cart-item .footer-tip .perf {
  color: #999;
  font-size: 12px;
  margin-top: 5px;
}
.text-ellipsis {
  text-align: left;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  font-size: 12px;
  margin-top: 10px;
  > a {
    font-size: 14px;
  }
}
</style>
