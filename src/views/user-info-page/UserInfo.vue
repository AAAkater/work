<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import type { ComponentSize } from 'element-plus'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { userLogin } from '@/api'
import Header from './components/Header.vue';
import FootLeft from './components/FootLeft.vue';


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
const nickname = ref('用户名')
const design = ref("我行我素")
const account = ref('Asher')
const age = ref('18')
const sex = ref('男')
const email = ref('3473320899@qq.com')
const mobilePhoneNumber = ref('18428074640')
const area = ref("四川")
const hobby = ref("写代码")
const work = ref("针灸推拿")



const dialogFormVisible = ref(false)
const openDialog = () => {
    form.email = email.value,
        form.gender = sex.value,
        form.username = account.value,
        dialogFormVisible.value = true
}
const submit = async () => {
    await userUpdate({
        username: form.username,
        email: form.email,
    }).then((res) => {
        console.log("修改成功");
        console.log(res);
        if (res.status == 200) {
            if (form.gender == '1') {
                sex.value = '男'
            }
            else {
                sex.value = '女'
            }

            ElMessage({
                message: '修改成功',
                type: 'success',
            })
        }
    }).catch((err) => {
        console.log(err);
        ElMessage({
            message: '修改失败',
            type: 'error'
        })
    })

    dialogFormVisible.value = false;
};
const form = reactive({
    username: '',
    email: '',
    gender: ''
})
const formLabelWidth = '70px'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
</script>

<template>
    <div>
        <Header></Header>

        <div class="person_body">
            <foot-left></foot-left>
            <div class="person_body_right">
                <div>
                    <el-card>
                        <el-descriptions class="margin-top" title="简介" :column="2" size="large" border>
                            <template #extra>
                                <el-button type="primary" size="medium" plain @click="openDialog()">操作</el-button>
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


        <!-- 操作对话框 -->
        <el-dialog v-model="dialogFormVisible" title="修改个人简介" width="600" top="20%" draggable="true">
            <el-form :model="form">
                <el-form-item label="头像:" :label-width="formLabelWidth">
                    <el-upload class="avatar-uploader"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Email" :label-width="formLabelWidth">
                    <el-input v-model="form.email" autocomplete="off" />
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-select v-model="form.gender" placeholder="请选择性别">
                        <el-option label="男" value="1" />
                        <el-option label="女" value="0" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="submit()">
                        确认修改
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>

</template>



<style scoped lang="less">
.person_body {
    width: 1000px;
    margin-top: 210px;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
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

.el-descriptions {
    margin-top: 20px;
}

.margin-top {
    margin-top: 20px;
}

.el-button {
    width: 84px;
}

.avatar-uploader .avatar {
    width: 78px;
    height: 78px;
    display: block;
}
</style>

<style>
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
    width: 128px;
    height: 128px;
    text-align: center;
}
</style>