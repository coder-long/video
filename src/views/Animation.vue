<template>
  <div class="animation">
    <div class="animation_content" v-for="(item,index) in title" :key="index">
      <HelloWorld :title="item.name" :more="item.more" :iconClassName="item.iconClassName">
        <VideoList :video="item.animation" :height="255+'px'" slot="animation"></VideoList>
      </HelloWorld>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

import VideoList from "../components/VideoList";
import { getVideo } from "../api/common";

export default {
  name: "animation",
  data() {
    return {
      title: [
        {
          name: "日韩动漫",
          more: "更多",
          iconClassName: "el-icon-receiving",
          animation: [],
        },
        {
          name: "欧美动漫",
          more: "更多",
          iconClassName: "el-icon-receiving",
          animation: [],
        },
        {
          name: "国漫",
          more: "",
          iconClassName: "el-icon-receiving",
          animation: [],
        },
      ],
    };
  },
  components: {
    HelloWorld,
    VideoList,
  },
  created() {
    getVideo({ size: 4 }).then((res) => {
      this.title[0].animation = res.data.data;
      console.log(this.title[0].animation);
    });
    getVideo({ size: 7 }).then((res) => {
      this.title[1].animation = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.animation_content {
  width: 1160px;
  margin: auto;
  margin-bottom: 15px;
}
</style>