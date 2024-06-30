<script setup lang="ts">
import {
    ElPageHeader,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElIcon,
    ElButton,
    ElInput,
    ElMessage,
    ElButtonGroup,
    ElUpload,
    type UploadFile
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
import { ref, type Ref, markRaw, computed } from "vue";
import { useFilesStore, useUserStore } from "@/stores";
import { createFolder, uploadFile } from "@/api";
const userStore = useUserStore()
const filesStore = useFilesStore()
const uploadFileList: Ref<File[]> = ref([])
// 输入框值
const searchInput: Ref<string> = ref("")
// 面包屑路径
const paths: Ref<string[]> = ref(["homepage", "r1", "r2"])
// 当前文件夹名
const currentFolder = computed(() => {
    return paths.value[paths.value.length - 1]
})
// 返回上一页
const backButton = () => {
    ElMessage("back")
    if (paths.value.length === 1) {
        return
    }
    paths.value.pop()
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

// 上传文件按钮
const uploadFileButton = async (file: any) => {
    ElMessage("上传文件")

    let Id = userStore.userRootDir
    console.log("这是文件" + file);

    let res = await uploadFile({
        file: file.file,
        parentFolderId: Id,
        fileType: "txt",
    })

    if (res.status !== 200) {
        ElMessage.error("上传失败")
        return
    }

    if (res.data.code === 0) {
        ElMessage.success("上传成功")
        return
    }
}
// 创建新文件夹按钮
const createNewFolder = async () => {
    // ElMessage("创建新文件夹")
    let name = "新建文件夹"
    let Id = userStore.userRootDir
    let res = await createFolder({
        folderName: name,
        parentFolderId: Id
    })

    if (res.status !== 200) {
        console.error("新文件夹创建失败")
        return
    }

    if (res.data.code == 0) {
        console.log("新文件夹创建成功")
        return
    }

}




</script>

<template>
    <div class="buttons">
        <div>
            <div v-if="filesStore.isEmpty" style="display: flex;">
                <el-upload :show-file-list="false" :auto-upload="true" :http-request="uploadFileButton" :limit="1"
                    :on-success="() => ElMessage.success('上传成功')">
                    <el-button type="primary">
                        <el-icon>
                            <Upload />
                        </el-icon>
                        <span>上传文件</span>
                    </el-button>
                </el-upload>
                <el-button type="primary" text @click="createNewFolder">
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
            <span class="text-large font-600 mr-3"> {{ currentFolder }} </span>
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
