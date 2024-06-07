<script setup lang="ts">
import { ElIcon, ElMessage, ElTable, ElTableColumn, ElPopover, ElInput } from "element-plus"
import { ref, type Ref, markRaw, inject } from "vue";

import {
    Document,
    VideoPlay,
    MoreFilled,
    Download,
    DocumentDelete,
    Edit,
    Picture,
    Headset,
} from "@element-plus/icons-vue";

import { type file } from "@/stores/type";

import { files } from "./test-data";

import { useFilesStore } from "@/stores";
// const filesStore: any = inject("filesStore")
const filesStore = useFilesStore()
filesStore.clearFiles()

const selectionChange = (files: file[]) => {
    filesStore.setFiles(files)
}


const mouseEnter = (row: file) => {
    row.isVisible = true
}

const mouseLeave = (row: file) => {
    row.isVisible = false
}

</script>
<template>
    <el-table :data="files" class="table" :default-sort="{ prop: 'date', order: 'descending' }"
        @cell-mouse-enter="mouseEnter" @cell-mouse-leave="mouseLeave" @selection-change="selectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column type="index" width="50" />
        <el-table-column label="文件名" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <component :is="scope.row.icon" />
                    </el-icon>
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center;justify-content: space-around;"
                    v-if="scope.row.isVisible">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto"
                        v-for="option in scope.row.options">
                        <template #default>
                            <h5 style="text-align: center;">{{ option.name }}</h5>
                        </template>
                        <template #reference>
                            <el-icon>
                                <component :is="option.icon" />
                            </el-icon>
                        </template>
                    </el-popover>
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