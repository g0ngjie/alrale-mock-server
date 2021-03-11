<template>
  <div class="container">
    <div class="box">
        <Router v-for="(item, i) in list" :key="i"/>
      <el-button class="btn" @click="handleAdd">添加</el-button>
    </div>
  </div>
</template>

<script>
import Router from "./components/router.vue";
export default {
  name: "App",
  components: { Router },
  data() {
    return {
      list: [1]
    };
  },
  methods: {
    handleAdd() {
      this.list.push(1);
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
.container {
  height: 100%;
  width: 100%;
  background-color: #f1ecec;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn {
      width: 40%;
    }
  }
}
</style>
