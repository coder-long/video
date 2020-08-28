<template>
  <div class="newvideo">
    <div class="row" slot="home" v-for="(item,index) in video" :key="index">
      <div class="col-md-12">
        <div class="row list">
          <i class="col-md-1" :class="'num'+(index+1)">{{ index+1 }}</i>
          <a href="javascript:void(0)" class="col-md-9" @click="gotype(item._id)">{{ item.videoTitle }}</a>
          <span class="col-md-2">HD</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewVidfeo",
  props: {
    video: Array,
  },
  data() {
    return {};
  },
  methods: {
    gotype(id) {
      this.$router.push(`/detill/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  font-size: 14px;
  padding: 0 16px;
  > .num1 {
    background: #ff4a4a;
    color: whitesmoke;
  }
  > .num2 {
    color: whitesmoke;
    background: #ff7701;
  }
  > .num3 {
    color: whitesmoke;
    background: #ffb400;
  }
  > a {
    text-align: left;
    padding: 0 10px 0 5px;
  }
  > i {
    text-align: center;
    background-color: #eeeeee;
    display: block;
    /* width: 16px; */
    height: 20px;
    padding: 0px;
    line-height: 21px;
    font-size: 12px;
    border-radius: 2px;
  }
  > span {
    color: #999;
  }
}
</style>