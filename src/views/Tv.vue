<template>
  <div class="tv">
    <div class="tv_content" v-for="(item,index) in title" :key="index">
      <HelloWorld :title="item.name" :iconClassName="item.iconClassName" more="更多">
        <VideoList slot="move" :video="item.TV" :height="255+'px'"></VideoList>
      </HelloWorld>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import VideoList from "../components/VideoList";
import { getVideo, getTV } from "../api/common";

export default {
  name: "tv",
  data() {
    return {
      title: [
        { name: "国产剧", iconClassName: "el-icon-date", TV: [] },
        { name: "欧美剧", iconClassName: "el-icon-document", TV: [] },
        { name: "日本剧", iconClassName: "el-icon-takeaway-box", TV: [] },
      ],
      TV: [],
    };
  },
  components: {
    HelloWorld,
    VideoList,
  },
  created() {
    getVideo({ size: 6 }).then((res) => {
      console.log(res.data.data);
      this.title[0].TV = res.data.data;
    });
    getVideo({ size: 5 }).then((res) => {
      console.log(res.data.data);
      this.title[1].TV = res.data.data;
    });
    getVideo({ size: 1 }).then((res) => {
      console.log(res.data.data);
      this.title[2].TV = res.data.data;
    });
  },
};
</script>

<style>
</style>
<style lang="scss" scoped>
.tv_content {
  width: 1160px;
  margin: auto;
  margin-bottom: 15px;
}
</style>