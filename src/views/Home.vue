<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="row">
      <div class="col-md-9">
        <HelloWorld
          title="电影"
          iconClassName="el-icon-film"
          :width="100+'%'"
          :height="510+'px'"
          more="更多"
        >
          <VideoList :video="video" slot="move" :height="155+'px'"></VideoList>
        </HelloWorld>
      </div>
      <div class="col-md-3">
        <HelloWorld title="最新电影" :iconClassName="iconClassName" :width="100+'%'" :height="510+'px'">
          <NewVideo slot="home" :video="video"></NewVideo>
        </HelloWorld>
      </div>
    </div>
    <!-- 电视剧 -->
    <div class="row">
      <div class="col-md-9">
        <HelloWorld
          title="电视剧"
          :iconClassName="iconClassName"
          :width="100+'%'"
          :height="510+'px'"
          more="更多"
        >
          <VideoList :video="video" slot="tv" :height="155+'px'"></VideoList>
        </HelloWorld>
      </div>
      <div class="col-md-3">
        <HelloWorld
          title="最新电视剧"
          :iconClassName="iconClassName"
          :width="100+'%'"
          :height="510+'px'"
        >
          <NewVideo slot="home" :video="video"></NewVideo>
        </HelloWorld>
      </div>
    </div>

    <!-- 综艺 -->
    <div class="row">
      <div class="col-md-9">
        <HelloWorld
          title="综艺"
          :iconClassName="iconClassName"
          :width="100+'%'"
          :height="510+'px'"
          more="更多"
        >
          <VideoList :video="video" slot="variety" :height="155+'px'"></VideoList>
        </HelloWorld>
      </div>
      <div class="col-md-3">
        <HelloWorld title="最新综艺" :iconClassName="iconClassName" :width="100+'%'" :height="510+'px'">
          <NewVideo slot="home" :video="video"></NewVideo>
        </HelloWorld>
      </div>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import VideoList from "../components/VideoList";
import NewVideo from "../components/NewVideo";
import { getVideo, getTV } from "../api/common";

export default {
  name: "Home",
  data() {
    return {
      iconClassName: "el-icon-s-unfold",
      video: [],
    };
  },
  components: {
    HelloWorld,
    VideoList,
    NewVideo,
  },
  created() {
    // this.getFilm();
    getVideo({ size: 12 }).then((res) => {
      console.log(res.data.data);
      this.video = res.data.data;
    });
    getTV().then((res) => {
      console.log(res);
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 1160px;
  margin: auto;
  > .row {
    margin-bottom: 20px;
  }
}

// .img {
//   position: relative;
//   display: block;
//   width: 123px;
//   height: 185px;
//   background-position: 50% 50%;
//   background-size: cover;
//   overflow: hidden;
// }
// .img img {
//   width: 123px;
//   height: 185px;
//   object-fit: cover;
// }
// .text-ellipsis {
//   text-align: left;
//   margin: 0;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   color: #999;
//   font-size: 12px;
//   margin-top: 10px;
//   > a {
//     font-size: 14px;
//   }
// }
// .play-ico {
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.3)
//     url("http://49.234.215.103:9999/image/play.png") center no-repeat;
//   transition: all 0.4s;
//   opacity: 0;
//   transform: scale(2);
// }
// .play-ico:hover {
//   opacity: 0.9;
//   transform: scale(1);
// }
</style>
