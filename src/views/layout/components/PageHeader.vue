<script setup lang="ts">
import {
    ElPageHeader,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElIcon,
    ElButton
} from "element-plus";

import {
    Upload,
    FolderAdd
} from "@element-plus/icons-vue"
import { ref, type Ref } from "vue";
</script>

<template>

    <div class="buttons">
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
    <el-page-header>
        <template #breadcrumb>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: './page-header.html' }">
                    homepage
                </el-breadcrumb-item>
                <el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>
                <el-breadcrumb-item>route 2</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <template #content>
            <span class="text-large font-600 mr-3"> Title </span>
        </template>
    </el-page-header>
</template>

<style scoped lang="less">
.buttons {
    margin: 20px 0 20px 0;
}
</style>
