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
import { useInfoStore } from "@/stores";
import Pagination from "./components/Pagination.vue"
const infoStore = useInfoStore()
</script>

<template>
    <el-container class="layout-container">
        <el-header style="padding: 0">
            <navigation-bar></navigation-bar>
        </el-header>
        <el-container>
            <side-bar />
            <el-main>
                <div v-if="!infoStore.isInfo" style="height: 100%;">
                    <div style="height: 90%;">
                        <page-header />
                        <file-table />
                    </div>
                    <div class="pa">
                        <pagination />
                    </div>
                </div>
                <user-info v-else />
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

.pa {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 0;
}
</style>
