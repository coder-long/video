<template>
  <div class="variety">
    <div class="variety_content" v-for="(item,index) in title" :key="index">
      <HelloWorld :title="item.name" more="更多" :iconClassName="item.iconClassName">
        <VideoList :video="item.variety" :height="255+'px'" slot="move"></VideoList>
      </HelloWorld>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import VideoList from "../components/VideoList";
import { getVideo } from "../api/common";

export default {
  name: "variety",
  data() {
    return {
      title: [
        { name: "内地综艺", iconClassName: "el-icon-receiving", variety: [] },
      ],
    };
  },
  components: {
    HelloWorld,
    VideoList,
  },
  created() {
    getVideo({ size: 2 }).then((res) => {
      console.log(res.data.data);
      this.title[0].variety = res.data.data;
      console.log(this.title[0].variety,'safjklxhlasfh');
    });
  },
};
</script>

<style lang="scss" scoped>
.variety_content {
  width: 1160px;
  margin: auto;
  margin-bottom: 15px;
}
</style>