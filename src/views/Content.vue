<template>
  <div class="content">
    <div class="row">
      <div class="col-md-9">
        <HelloWorld height="330px" display="none">
          <div class="row" slot="home">
            <div class="col-md-4">
              <a href="javascript:void(0);" class="img" style="width:190px;height:285px">
                <img
                  v-lazy="videoOne.videoImage"
                  alt
                  style="width:190px;height:285px"
                  class="detillImg"
                />
                <i class="play-ico"></i>
              </a>
            </div>
            <div class="col-md-8">
              <div class="row right_list">
                <div class="col-md-12">
                  <h1>{{ videoOne.videoTitle }}</h1>
                </div>
                <div class="col-md-12">
                  <P>
                    <span>状态：</span>
                    <span>{{ videoOne.remind_tip }}</span>
                  </P>
                </div>
                <div class="col-md-12">
                  <P>
                    <span>导演：</span>
                    <span>{{ videoOne.director.split(',').join(' ') }}</span>
                  </P>
                </div>
                <div class="col-md-12">
                  <P>
                    <span>主演：</span>
                    <span>{{ videoOne.performer.split(',').join(' ') }}</span>
                  </P>
                </div>
                <div class="col-md-12">
                  <P>
                    <span>类型：</span>
                    <a href="javascript:void(0)" @click="goType">{{ videoOne.video_type }}</a> |
                    <span>语言：</span>
                    <a href="javascript:void(0)" @click="goType">{{ videoOne.language }}</a> |
                    <span>地区：</span>
                    <a href="javascript:void(0)" @click="goType">{{ videoOne.sub_region }}</a> |
                    <span>时间：</span>
                    <a href="javascript:void(0)" @click="goType">{{ videoOne.rel_time }}</a>
                  </P>
                </div>
                <div class="col-md-12">
                  <P>
                    <span>评分：</span>
                    <span>{{videoOne.video_rate}} 分</span>
                  </P>
                </div>
                <el-button type="warning">点击播放</el-button>
              </div>
            </div>
          </div>
        </HelloWorld>
      </div>
      <div class="col-md-3">
        <HelloWorld title="热门推荐" class></HelloWorld>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import { getVideo, getOne, getNavList } from "../api/common";
export default {
  name: "content",
  data() {
    return {
      video: [],
      videoOne: {},
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    goType() {
      this.$router.replace("/type");
    },
  },
  filters: {},
  mounted() {},
  created() {
    getVideo({ size: "" }).then((res) => {
      console.log(res.data.data, 999);
      this.video = res.data.data;
    });
    console.log(this.$route.params.id);
    getOne({ video_id: this.$route.params.id }).then((res) => {
      console.log(res.data.data);
      this.videoOne = res.data.data;
    });
  },
  //计算属性
  computed: {},
};
</script>

<style lang="scss" scoped>
.content {
  width: 1160px;
  margin: auto;
  > .row {
    // padding: 0;
    margin: 0;
  }
  > .img {
    position: relative;
    display: block;
    overflow: hidden;
    > img {
      object-fit: cover;
    }
    > img[lazy="loading"] {
      object-fit: cover;
    }
    > img[lazy="loaded"] {
      width: 100%;
      // height: 100%;
    }
    > .play-ico {
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
    > .play-ico:hover {
      opacity: 0.9;
      transform: scale(1);
    }
  }
}
.detillImg {
  object-fit: cover !important;
}
.row.right_list {
  text-align: left;
  > h1 {
    font-size: 18px;
  }
}
</style>