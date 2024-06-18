<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

const iconStyle = computed(() => {
    const marginMap = {
        large: '8px',
        default: '6px',
        small: '4px',
    }
    return {
        marginRight: marginMap[size.value] || marginMap.default,
    }
})
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const nickname = ref('用户名')
const v = ref(3)
const design = ref("我行我素")
const recycleCounts = ref()
const collectCounts = ref()
const goodCounts = ref()
const avatar = ref()
const account = ref('Asher')
const age = ref()
const sex = ref('男')
const email = ref()
const mobilePhoneNumber = ref('18428074640')
const area = ref("四川")
const hobby = ref()
const work = ref()

const dialogFormVisible = ref(false)
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const formLabelWidth = '50px'
</script>

<template>
    <div>
        <div class="PersonTop">
            <div class="PersonTop_img">
                <img v-image-preview />
            </div>
            <div class="PersonTop_text">
                <div class="user_text">
                    <div class="user_name">
                        <span> {{ nickname }} </span>
                    </div>
                    <div class="user-v" v-if="v === 3">
                        <span class="user-v-font">优质网盘作者</span>
                    </div>
                    <div class="user_qianming">
                        <span> {{ design }}</span>
                    </div>
                    <div class="user_anniu">
                        <el-button class="el-icon-edit" type="primary" size="medium" plain @click="">编辑</el-button>
                    </div>
                </div>
                <div class="user_num">
                    <div style="cursor: pointer" @click="">
                        <div class="num_number">{{ recycleCounts }}</div>
                        <span class="num_text">回收数</span>
                    </div>
                    <div style="cursor: pointer" @click="">
                        <div class="num_number">{{ collectCounts }}</div>
                        <span class="num_text">收藏数</span>
                    </div>
                    <div>
                        <div class="num_number">{{ goodCounts }}</div>
                        <span class="num_text">文件数</span>
                    </div>
                </div>
            </div>
        </div>


        <div class="person_body">
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

            <div class="person_body_right">
                <div>
                    <el-card>
                        <el-descriptions class="margin-top" title="简介" :column="2" size="large" border>
                            <template #extra>
                                <el-button type="primary" size="medium" plain
                                    @click="dialogFormVisible = true">操作</el-button>
                            </template>


                            <!-- 列表 -->
                            <el-descriptions-item width>
                                <template #label>
                                    <el-icon>
                                        <PictureFilled />
                                    </el-icon>
                                    头像
                                </template>
                                <img class="img" src="@/assets/favicon.ico" alt="" />
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                        <el-icon :style="iconStyle">
                                            <user />
                                        </el-icon>
                                        username
                                    </div>
                                </template>
                                {{ account }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Avatar />
                                    </el-icon>
                                    昵称
                                </template>
                                {{ nickname }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Odometer />
                                    </el-icon>
                                    年龄
                                </template>
                                {{ age }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Female />
                                    </el-icon>
                                    <el-icon>
                                        <Male />
                                    </el-icon>
                                    性别
                                </template>
                                <el-tag size="small">{{ sex }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Message />
                                    </el-icon>
                                    邮箱Email
                                </template>
                                {{ email }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Iphone />
                                    </el-icon>
                                    手机号码
                                </template>
                                {{ mobilePhoneNumber }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Location />
                                    </el-icon>
                                    地区
                                </template>
                                {{ area }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <OfficeBuilding />
                                    </el-icon>
                                    职业
                                </template>
                                {{ work }}
                            </el-descriptions-item>

                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Star />
                                    </el-icon>
                                    兴趣爱好
                                </template>
                                {{ hobby }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Star />
                                    </el-icon>
                                    个性签名
                                </template>
                                {{ design }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template #label>
                                    <el-icon>
                                        <Calendar />
                                    </el-icon>
                                    注册日期
                                </template>
                                {{ createDate | formatDate }}
                            </el-descriptions-item>
                        </el-descriptions>
                    </el-card>
                </div>

            </div>
        </div>
        <personal-dia ref="dia" @flesh="" />
    </div>



    <!-- 操作对话框 -->
    <el-dialog v-model="dialogFormVisible" title="修改个人简介" width="500" top="20%" draggable="true">
        <el-form :model="form">
            <el-form-item label="头像:" :label-width="formLabelWidth">
                <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择性别">
                    <el-option label="男" value="1" />
                    <el-option label="女" value="0" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                    确认修改
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>



<style scoped>
.me-video-player {
    background-color: transparent;
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
    position: fixed;
    left: 0;
    z-index: 0;
    top: 0;
}

.PersonTop {
    width: 1000px;
    height: 140px;
    padding-top: 20px;
    background-color: white;
    margin-top: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    border-radius: 5px;
}


.PersonTop_img {
    width: 150px;
    height: 120px;
    background-color: #8c939d;
    margin-right: 24px;
    margin-left: 20px;
    overflow: hidden;
    border-radius: 20px;
}

.PersonTop_img img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.PersonTop_text {
    height: 120px;
    width: 880px;
    display: flex;
}

.user_text {
    width: 60%;
    height: 100%;
    line-height: 30px;
}

.user_name {
    font-weight: bold;
}

.user-v {
    margin-bottom: -5px;
}

.user-v-img {
    width: 15px;
    height: 15px;
}

.user-v-font {
    font-size: 15px;
    color: #00c3ff;
}

.user_qianming {
    font-size: 14px;
    color: #999;
}

.user_num {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
}

.user_num>div {
    text-align: center;
    border-right: 1px dotted #999;
    box-sizing: border-box;
    width: 80px;
    height: 40px;
    line-height: 20px;
}

.num_text {
    color: #999;
}

.num_number {
    font-size: 20px;
    color: #333;
}



/* 下面部分样式 */
.person_body {
    width: 1000px;
    margin-top: 210px;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
}

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

.person_body_right {
    width: 70%;
    height: 500px;
    border-radius: 5px;
    background-color: white;
}

.box-card {
    height: 500px;
}



/*ui样式*/
.el-button {
    width: 84px;
}

.el-descriptions {
    margin-top: 20px;
}

.cell-item {
    display: flex;
    align-items: center;
}

.margin-top {
    margin-top: 20px;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    text-align: center;
}
</style>