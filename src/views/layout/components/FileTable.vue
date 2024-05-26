<script setup lang="ts">
import { ElSpace, ElIcon, ElMessage, ElTable, ElTableColumn, ElPopover, ElInput } from "element-plus"
import { ref, type Ref } from "vue";

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


interface option {
    name: string
    icon: any
    click: Function
}

interface file {
    name: string
    isFolder: boolean
    updateTime: string
    id: string
    fileType: string
    size: number
    icon: any
    isVisible: boolean
    options: option[]
}

const files: Ref<file[]> = ref([
    {
        name: "123",
        isFolder: false,
        updateTime: "2003-01-2",
        id: "adsacafasf",
        fileType: "image",
        size: 22,
        icon: Picture,
        isVisible: false,
        options: [
            { name: "下载", icon: Download, click: () => { ElMessage('下载') } },
            { name: "删除", icon: DocumentDelete, click: () => { ElMessage('删除') } },
            { name: "编辑", icon: Edit, click: () => { ElMessage('编辑') } },
            { name: "更多", icon: MoreFilled, click: () => { ElMessage('更多') } },
        ]
    },
    {
        name: "sffdasd",
        isFolder: false,
        updateTime: "2023-01-12",
        id: "adsacaf",
        fileType: "video",
        size: 22,
        icon: VideoPlay,
        isVisible: false,
        options: [
            { name: "下载", icon: Download, click: () => { ElMessage('下载') } },
            { name: "删除", icon: DocumentDelete, click: () => { ElMessage('删除') } },
            { name: "编辑", icon: Edit, click: () => { ElMessage('编辑') } },
            { name: "更多", icon: MoreFilled, click: () => { ElMessage('更多') } },
        ]
    },
    {
        name: "sgdfhnd",
        isFolder: false,
        updateTime: "2013-01-12",
        id: "bsdfsdfg",
        fileType: "document",
        size: 22,
        icon: Document,
        isVisible: false,
        options: [
            { name: "下载", icon: Download, click: () => { ElMessage('下载') } },
            { name: "删除", icon: DocumentDelete, click: () => { ElMessage('删除') } },
            { name: "编辑", icon: Edit, click: () => { ElMessage('编辑') } },
            { name: "更多", icon: MoreFilled, click: () => { ElMessage('更多') } },
        ]
    },
    {
        name: "basdf",
        isFolder: false,
        updateTime: "2024-01-12",
        id: "bsddfhdhfdfg",
        fileType: "audio",
        size: 22,
        icon: Headset,
        isVisible: false,
        options: [
            { name: "下载", icon: Download, click: () => { ElMessage('下载') } },
            { name: "删除", icon: DocumentDelete, click: () => { ElMessage('删除') } },
            { name: "编辑", icon: Edit, click: () => { ElMessage('编辑') } },
            { name: "更多", icon: MoreFilled, click: () => { ElMessage('更多') } },
        ]
    }
])

const mouseEnter = (row: file) => {
    row.isVisible = true
}

const mouseLeave = (row: file) => {
    row.isVisible = false
}

</script>
<template>
    <el-table :data="files" class="table" :default-sort="{ prop: 'date', order: 'descending' }"
        @cell-mouse-enter="mouseEnter" @cell-mouse-leave="mouseLeave">
        <el-table-column type="selection" width="55" />
        <el-table-column label="文件名" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <component :is="scope.row.icon"></component>
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