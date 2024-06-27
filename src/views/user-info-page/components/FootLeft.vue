<script setup lang="ts">
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <div class="person_body_left">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
                <span class="person_body_list" style="border-bottom: none">个人中心</span>
            </div>

            <el-menu active-text-color="#00c3ff" class="el-menu-vertical-demo" :default-active="'info'"
                @open="handleOpen" @close="handleClose">
                <el-menu-item index="info">
                    <el-icon>
                        <user />
                    </el-icon>
                    <span>个人简介</span>
                </el-menu-item>
                <el-menu-item index="myarticle">
                    <el-icon>
                        <Files />
                    </el-icon>
                    <span>个人文件</span>
                </el-menu-item>
                <el-menu-item index="mycollect">
                    <el-icon>
                        <StarFilled />
                    </el-icon>
                    <span>收藏文件</span>
                </el-menu-item>
                <el-menu-item index="myfan">
                    <el-icon>
                        <DeleteFilled />
                    </el-icon>
                    <span>回收站</span>
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>

<style scoped lang="less">
.person_body_left {
    width: 27%;
    height: 500px;
    border-radius: 5px;
    margin-right: 3%;
    text-align: center;
}

.person_body_list {
    width: 100%;
    height: 50px;
    margin-top: 25px;
    font-size: 22px;
    border-bottom: 1px solid #f0f0f0;
    color: #409eff;
}

.el-menu-item {
    margin-top: 22px;
}

.box-card {
    height: 500px;
}
</style>