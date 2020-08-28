<template>
  <div class="videolist">
    <div class="row">
      <div
        class="col-6 col-md-2"
        v-for="(item,index) in video"
        :key="index"
        @click="changeRoute(item._id)"
      >
        <a href="javascript:void(0);" class="img" :style="{width:width,height:height}">
          <img v-lazy="item.videoImage" alt :style="{width:width,height:height}" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoList",
  data() {
    return {};
  },
  props: {
    video: Array,
    width: String,
    height: String,
  },
  methods: {
    changeRoute(id) {
      this.$router.push(`/detill/${id}`);
    },
  },
};
</script>

<style lang='scss' >
.img {
  position: relative;
  display: block;
  object-fit: cover;
  overflow: hidden;

  > img[lazy="loading"] {
    object-fit: fill;
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
.text-ellipsis {
  text-align: left;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  > a {
    font-size: 14px;
  }
}
</style>