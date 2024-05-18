<script setup lang="ts">

  import NavigationBar from "./components/NavigationBar.vue";
  import SideBar from "./components/SideBar.vue"
  import PageHeader from "./components/PageHeader.vue"
</script>

<template>
  <el-container class="layout-container">
    <el-header style="padding: 0">
      <navigation-bar></navigation-bar>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <page-header></page-header>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
  .layout-container {
    height: 100vh;
  }

  .Navigation-Bar {
    width: 100%;
    // margin: 0;
  }

  .aside {
    height: 100%;
    // outline: auto red;
  }
</style>
