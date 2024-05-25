<script setup lang="ts">
import { ElIcon, ElTable, ElTableColumn } from "element-plus"
import { ref, type Ref } from "vue";

import {
    Document,
    Menu as IconMenu,
    Share,
    VideoPlay,
    MoreFilled,
} from "@element-plus/icons-vue";

interface file{
    name: string
    isFolder: boolean
    updateTime: string
    id: string
    fileType: string
    size: number
    icon:any
}

const files:Ref<file[]> = ref([
    {
        name: "123",
        isFolder: false,
        updateTime: "2003-01-2",
        id: "adsacafasf",
        fileType: "image",
        size: 22,
        icon:Document
    },
    {
        name: "sffdasd",
        isFolder: false,
        updateTime: "2023-01-12",
        id: "adsacaf",
        fileType: "video",
        size: 22,
        icon:VideoPlay
    }
])
</script>
<template>
    <el-table :data="files" class="table" :default-sort="{ prop: 'date', order: 'descending'}">
        <el-table-column type="selection" width="55"/>
        <el-table-column label="文件名" width="180" >
            <template #default="scope">
                <div style="display: flex; align-items: center">
                <el-icon>
                    <component :is="scope.row.icon"></component>
                </el-icon>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column  label="">
        <template #default="scope">
            <div style="display: flex; align-items: center" v-show="scope.row.isHovered">
 <el-icon><Download /></el-icon>
<el-icon><DocumentDelete /></el-icon>
<el-icon><Share /></el-icon>
<el-icon><Edit /></el-icon>
<el-icon><MoreFilled /></el-icon>
            </div>
        </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="修改日期" width="180" />
        <el-table-column prop="fileType" label="文件类型" width="180" />
        <el-table-column prop="size" label="大小" />

    </el-table>
</template>

<style scoped lang="less">
.table {
    width: 100%;
    // outline: auto red;
}
</style>