<script setup lang="ts">
import {
    ElSubMenu,
    ElMenu,
    ElMenuItem,
    ElIcon,

} from "element-plus";
import {
    Document,
    Menu as IconMenu,
    Share,
    Files,
    Picture,
    VideoPlay,
    Headset,
    Fold,
    Expand,
    MoreFilled,
    House,
    Delete
} from "@element-plus/icons-vue";
import { ref, type Ref } from "vue";

const isCollapse: Ref<boolean> = ref(true)

const subMenuItems = ref([
    { icon: Picture, content: "图片" },
    { icon: Document, content: "文档" },
    { icon: VideoPlay, content: "视频" },
    { icon: Headset, content: "音频" },
    { icon: MoreFilled, content: "其他" },
])


</script>

<template>
    <el-menu default-active="2" :collapse="isCollapse" class="side-bar">
        <el-menu-item index="1" @click="isCollapse = !isCollapse">
            <el-icon>
                <Expand v-if="isCollapse" />
                <Fold v-else />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon>
                <House />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <Files />
                </el-icon>
                <span>文件</span>
            </template>
            <el-menu-item v-for="item, index in subMenuItems" :key="index">
                <el-icon>
                    <component :is="item.icon"></component>
                </el-icon>
                <span>{{ item.content }}</span>
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">
            <el-icon>
                <Share />
            </el-icon>
            <span>分享</span>
        </el-menu-item>
        <el-menu-item index="5">
            <el-icon>
                <Delete />
            </el-icon>
            <span>回收站</span>
        </el-menu-item>
    </el-menu>

</template>

<style scoped lang="less">
.side-bar {
    height: 100%;
    // outline: auto red;
}
</style>
