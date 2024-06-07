<script setup lang="ts">
import {
    ElPageHeader,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElIcon,
    ElButton,
    ElInput,
    ElMessage,
    ElButtonGroup
} from "element-plus";

import {
    Upload,
    FolderAdd,
    Search,
    Share,
    Delete,
    Download,
    CopyDocument,
    Rank
} from "@element-plus/icons-vue"
import { ref, type Ref, inject, markRaw } from "vue";
import { useFilesStore } from "@/stores";
// const filesStore: any = inject("filesStore")
const filesStore = useFilesStore()
// 输入框值
const searchInput: Ref<string> = ref("")
// 当前文件夹名
const currentFolder: Ref<string> = ref("")
// 面包屑路径
const paths: Ref<string[]> = ref(["homepage", "r1", "r2"])
// 返回上一页
const backButton = () => {
    ElMessage("back")
}
// 被选中文件的按钮组
const buttonGroup = ref([
    {
        name: "分享",
        icon: markRaw(Share),
        click: () => {
            ElMessage("分享");
        },
    },
    {
        name: "下载",
        icon: markRaw(Download),
        click: () => {
            ElMessage("下载");
        },
    },
    {
        name: "删除",
        icon: markRaw(Delete),
        click: () => {
            ElMessage("删除");
        },
    },
    {
        name: "复制",
        icon: markRaw(CopyDocument),
        click: () => {
            ElMessage("复制");
        },
    },
    {
        name: "移动",
        icon: markRaw(Rank),
        click: () => {
            ElMessage("移动");
        },
    },
])


</script>

<template>
    <div class="buttons">
        <div>
            <div v-if="filesStore.isEmpty">
                <el-button type="primary">
                    <el-icon>
                        <Upload />
                    </el-icon>
                    <span>上传文件</span>
                </el-button>
                <el-button type="primary" text>
                    <el-icon>
                        <FolderAdd />
                    </el-icon>
                    <span>创建新文件夹</span>
                </el-button>
            </div>
            <div v-else>
                <el-button-group>
                    <el-button v-for="button, index of buttonGroup" :key="index" @click="button.click">
                        <el-icon>
                            <component :is="button.icon"></component>
                        </el-icon>
                        <div>
                            {{ button.name }}
                        </div>
                    </el-button>
                </el-button-group>
            </div>
        </div>
        <div>
            <el-input v-model="searchInput" style="width: 200px" clearable placeholder="请输入" :prefix-icon="Search"
                maxlength="10" />
        </div>
    </div>
    <el-page-header @back="backButton">
        <template #breadcrumb>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="path, index in paths " :key="index">
                    {{ path }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <template #content>
            <span class="text-large font-600 mr-3"> {{ paths.slice(-1)[0] }} </span>
        </template>
    </el-page-header>
</template>

<style scoped lang="less">
.buttons {
    margin: 20px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // outline: auto red;
}
</style>
