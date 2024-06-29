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
import { ref, type Ref, markRaw } from "vue";
import { useInfoStore } from "@/stores";

const isCollapse: Ref<boolean> = ref(true)

const subMenuItems = ref([
    { icon: markRaw(Picture), content: "图片" },
    { icon: markRaw(Document), content: "文档" },
    { icon: markRaw(VideoPlay), content: "视频" },
    { icon: markRaw(Headset), content: "音频" },
    { icon: markRaw(MoreFilled), content: "其他" },
])

const userClick = () => {
    const infoStore = useInfoStore()
    infoStore.isInfo = false
}
</script>

<template>
    <el-menu default-active="2" :collapse="isCollapse" class="side-bar">
        <el-menu-item index="1" @click="isCollapse = !isCollapse">
            <el-icon>
                <Expand v-if="isCollapse" />
                <Fold v-else />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="2" @click="userClick">
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
                    <component :is="item.icon" />
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
