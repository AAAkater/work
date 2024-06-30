<script setup lang="ts">
import { ElIcon, ElMessage, ElTable, ElTableColumn, ElPopover, ElInput, ElButton, ElDialog } from "element-plus"
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
    Folder,
} from "@element-plus/icons-vue";
import { type file } from "@/stores/type";
// import { files } from "./test-data";
import { useFilesStore, useUserStore } from "@/stores";
import { getFolderInfo, getFileInfo, getUserInfo, getRootFolderInfo, downloadFile, deleteFile, modifyFileName } from "@/api";
import type { AxiosResponse } from "axios";
const filesStore = useFilesStore()
const userStore = useUserStore();
// 清空表格
filesStore.clearFiles()
// 获取个人信息
userStore.setUserInfo();

const icons = {
    "txt": markRaw(Document),
    "picture": markRaw(Picture),
    "folder": markRaw(Folder),
    "video": markRaw(VideoPlay),
    "audio": markRaw(Headset)
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
                centerDialogVisible: false,
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


const getRootFolder = async () => {


    const rootFolderId = userStore.userRootDir

    let res = await getRootFolderInfo({ folderId: rootFolderId })

    if (res.status !== 200) {
        console.error("无此根目录")
        return
    }

    const fileInfos = res.data.data
    console.log(fileInfos);

    for (const fileInfo of fileInfos) {
        if (fileInfo.isFolder) {

            files.value.push({
                id: fileInfo.id,
                name: fileInfo.name,
                isFolder: true,
                isVisible: false,
                fileType: "folder",
                icon: icons["folder"],
                size: "-",
                centerDialogVisible: false,
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
            continue
        }
        let res2 = await getFileInfo({ fileId: fileInfo.id })
        if (res2.status !== 200) {
            console.error(`无法查询id为${fileInfo.id}`)
            continue
        }
        const moreInfo = res2.data.data
        files.value.push({
            name: fileInfo.name,
            isFolder: fileInfo.isFolder,
            updateTime: moreInfo.lastAccessTime,
            id: fileInfo.id,
            fileType: moreInfo.fileType as string,
            size: moreInfo.size,
            isVisible: false,
            icon: icons[moreInfo.fileType],
            centerDialogVisible: false,
            options: [
                {
                    name: "下载",
                    icon: markRaw(Download),
                    click: async () => {
                        let res = await downloadFile({ fileId: fileInfo.id })
                        if (res.status !== 200) {
                            ElMessage.error("下载失败")
                            return
                        }
                        const href = URL.createObjectURL(res.data)
                        const aLink = document.createElement('a')
                        aLink.style.display = 'none'
                        aLink.href = href
                        aLink.download = fileInfo.name
                        aLink.click()

                        ElMessage.success("下载成功");

                    },
                },
                {
                    name: "删除",
                    icon: markRaw(DocumentDelete),
                    click: async () => {

                        let res = await deleteFile({
                            fileId: fileInfo.id,
                            fileType: moreInfo.fileType
                        })
                        if (res.status !== 200) {
                            ElMessage.error("删除失败")
                            return
                        }
                        ElMessage.success("删除成功");
                        filesStore.clearFiles()
                        getRootFolder()
                    },
                },
                {
                    name: "编辑",
                    icon: markRaw(Edit),
                    click: function () {
                        console.log(this.centerDialogVisible);

                        // let res = await modifyFileName({
                        //     newFileName: "asdas",
                        //     fileType: moreInfo.fileType,
                        //     fileId: fileInfo.id
                        // })
                        // if (res.status !== 200) {
                        //     ElMessage.error("编辑失败")
                        //     return
                        // }

                        // ElMessage.success("编辑成功");
                        // filesStore.clearFiles()
                        // getRootFolder()
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
}

getRootFolder()

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
        <el-table-column width="250">
            <template #default="scope">
                <div style="display: flex; align-items: center;justify-content: space-around;"
                    v-if="scope.row.isVisible">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto"
                        v-for="option in scope.row.options">
                        <template #default>
                            <h5 style="text-align: center;">{{ option.name }}</h5>
                        </template>
                        <template #reference>
                            <el-button @click="option.click()">
                                <el-icon>
                                    <component :is="option.icon" />
                                </el-icon>
                            </el-button>
                        </template>
                    </el-popover>

                    <el-dialog v-model="scope.row.centerDialogVisible" title="Warning" width="500" center>
                        <span>
                            It should be noted that the content will not be aligned in center by
                            default
                        </span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="scope.row.centerDialogVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="scope.row.centerDialogVisible = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="修改日期" width="250" />
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