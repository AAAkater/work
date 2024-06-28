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
// import { files } from "./test-data";
import { useFilesStore } from "@/stores";
import { getFolderInfo, getFileInfo } from "@/api";
import type { AxiosResponse } from "axios";
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

const files: Ref<file[]> = ref([])

// 获取文件信息
async function getFiles(parentFolderId: string) {
    try {
        const resp: AxiosResponse = await getFolderInfo({ folderId: parentFolderId })
        const code: number = resp.status
        if (code !== 200 || resp.data.code !== 0) {
            return
        }

        for (const fileInfo of resp.data.data) {
            if (fileInfo.isFolder) {

            }
            const resp2 = await getFileInfo({ fileId: fileInfo.id })

            const moreInfo = resp2.data.data
            files.value.push({
                name: fileInfo.name,
                isFolder: fileInfo.isFolder,
                updateTime: moreInfo.updateTime,
                id: fileInfo.id,
                fileType: moreInfo.fileType,
                size: moreInfo.size,
                isVisible: false,
                icon: markRaw(Picture),
                options: [
                    {
                        name: "下载",
                        icon: markRaw(Download),
                        click: () => {
                            ElMessage("下载");
                        },
                    },
                    {
                        name: "删除",
                        icon: markRaw(DocumentDelete),
                        click: () => {
                            ElMessage("删除");
                        },
                    },
                    {
                        name: "编辑",
                        icon: markRaw(Edit),
                        click: () => {
                            ElMessage("编辑");
                        },
                    },
                    {
                        name: "更多",
                        icon: markRaw(MoreFilled),
                        click: () => {
                            ElMessage("更多");
                        },
                    },
                ]
            })
        }

    } catch (e) {
        console.error(e);
    }
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