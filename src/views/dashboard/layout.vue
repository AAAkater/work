<script setup lang="ts">
import {
    ElMain,
    ElContainer,
    ElHeader,
    ElAside
} from "element-plus"
import NavigationBar from "./components/NavigationBar.vue";
import SideBar from "./components/SideBar.vue"
import PageHeader from "./components/PageHeader.vue"
import FileTable from "./components/FileTable.vue"
import UserInfo from "../user-info-page/UserInfo.vue";

</script>

<template>
    <el-container class="layout-container">
        <el-header style="padding: 0">
            <navigation-bar></navigation-bar>
        </el-header>
        <el-container>
            <side-bar />
            <el-main>
                <!-- <page-header />
                <file-table /> -->
                <user-info />
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
