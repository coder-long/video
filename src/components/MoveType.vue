<template>
  <div class="move_type">

    <div class="row nav_list">
      <h1 class="col-md-1">{{types.title}}</h1>
      <div class="col-md-1" @click="handleType('')" :class="{active:nav==''?true:0}">全选</div>
      <div
        class="col-md-1"
        @click="handleType(item.id)"
        :class="{active:nav==item.id?true:0}"
        v-for="item in types.list"
        :key="item.id"
      >{{item.name}}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "moveType",
  props: { types: Object, nav: "" },
  components: {},
  data() {
    return {};
  },
  methods: {
    handleType(id) {
      let type = this.types.id;
      this.$emit("update", {
        id,
        type,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background: #42b983;
  color: #fff;
}

.nav_list {
  margin: 5px 0;
}
.nav_list > div {
  cursor: pointer;
  padding: 0 8px;
  width: 80px;
}
.nav_list > h1 {
  font-size: 16px;
  color: #999;
  margin: 5px 0;
}
</style>