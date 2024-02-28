<template>
  <div class="app-container home">
    <div>
      在线教育管理系统
    </div>

  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      // 版本号
      version: "3.8.7"
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    }
  }
};
</script>

<style scoped lang="scss">
.app-container{
  background-color: #409EFF;
  opacity: .6;
  color: #fff;
}
.home {
  font-size: 50px;
  font-weight: bold;
  height: calc(100vh - 85px);
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>

