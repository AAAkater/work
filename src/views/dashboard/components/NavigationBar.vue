<script setup lang="ts">
import { ElSubMenu, ElMenu, ElMenuItem, ElAvatar, ElIcon } from "element-plus";
import { UserFilled, Back, Help } from "@element-plus/icons-vue";
import { ref, type Ref } from "vue";

const activeIndex: Ref<string> = ref("1");
const errorHandler = () => true

</script>

<template>
    <el-menu :default-active="activeIndex" class="Navigation-Bar" mode="horizontal" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">盘网网盘</el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-avatar @error="errorHandler">
                    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                </el-avatar>
            </template>
            <el-menu-item index="2-1">
                <el-icon>
                    <UserFilled />
                </el-icon>
                <span>个人主页</span>
            </el-menu-item>
            <el-menu-item index="2-2">
                <el-icon>
                    <Help />
                </el-icon>
                <span>帮助中心</span>
            </el-menu-item>
            <el-menu-item index="2-3">
                <el-icon>
                    <Back />
                </el-icon>
                <span> 退出登录</span>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style scoped lang="less">
.Navigation-Bar {
    display: flex;
    justify-content: space-between;
}
</style>
