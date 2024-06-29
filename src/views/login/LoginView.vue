<script setup lang="ts">
import { userLogin, getCaptcha, userRegister } from "@/api";
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

// do not use same name with ref
const form = reactive({
    username: '',
    password: '',
    captcha: '',
    captchaId: ''
})


const formRef = ref(null)
//登录接口
const onSubmit = async () => {
    await formRef.value.validate(async (valid: any) => {
        if (!valid) {
            return false
        }
        // 请求登录
        // let res = await userLogin({
        //     username: form.username,
        //     password: form.password,
        //     captcha: form.captcha,
        //     captchaId: form.captchaId
        // })
        // if (res.status !== 200) {
        //     return false
        // }

        // if (res.data.data.message === 'ok') {
        //     console.log("验证通过");
        // }

        await userLogin({
            username: form.username,
            password: form.password,
            captcha: form.captcha,
            captchaId: form.captchaId
        }).then((res) => {
            console.log("验证通过");
            console.log(res)

            //提示成功
            ElNotification({
                message: '登陆成功！',
                type: 'success',
                duration: 2000
            })
            //存储token

            //跳转
            router.push("/layout")
        }).catch(err => {
            console.log(err);
            ElNotification({
                message: err.data.data.message || '请求失败',
                type: 'error',
                duration: 2000
            })
        })

    })
}
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('你是否确定取消注册?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        iconClass: 'el-icon-warning',
        customClass: 'custom-confirm-box'
    })
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
const dialogVisible = ref(false)

const rules1 = {
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        },
        { min: 2, max: 10, message: '长度在2到10个字符', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
        },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    captcha: [
        { required: true, message: '请输入验证码', trigger: 'blur' }
    ]
}

const imgSrc = ref('')
const base64Data = ref('');
const convertBase64ToStr = (base64Str: any) => {
    return 'data:image/png;base64,' + base64Str;
};
const convertBase64ToImage = () => {
    const img = new Image();
    img.src = base64Data.value;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageURL = canvas.toDataURL('image/png');
        imgSrc.value = imageURL;
    };
};

//获取验证码
const gainCaptcha = async () => {
    let res = await getCaptcha()
    if (res.status != 200) {
        console.log("获取失败");

        return false
    }
    // if (res.data.data.message === 'ok') {
    //     console.log("获取成功");
    //     base64Data.value = convertBase64ToStr(res.data.data.captcha);
    //     convertBase64ToImage()
    // }
    else {//todo if (res.data.data.message === 'ok')
        console.log("获取成功");
        base64Data.value = convertBase64ToStr(res.data.data.captcha);
        convertBase64ToImage()
    }
}

//注册表单验证
interface RuleForm {
    username: string
    password: string
    checkPass: string
    email: string
    emailCode: string
    captcha: string
    captchaId: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    username: '',
    password: '',
    checkPass: '',
    email: '',
    captcha: '',
    captchaId: '',
    emailCode: ''
})



const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== ruleForm.password) {
        callback(new Error("两次密码不正确!"))
    } else {
        callback()
    }
}
const rules = reactive<FormRules<RuleForm>>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 10, message: '长度在2到10个字符', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    checkPass: [
        { required: true, validator: validatePass2, trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
    ],
    captcha: [
        { required: true, message: '请输入验证码', trigger: 'blur' }
    ]
})

//注册接口
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })

    await userRegister({
        username: ruleForm.username,
        password: ruleForm.password,
        captcha: ruleForm.captcha,
        captchaId: ruleForm.captchaId,
        email: ruleForm.email,
        emailCode: ruleForm.emailCode
    }).then((res) => {
        console.log("验证通过");
        console.log(res)

        //提示成功
        ElNotification({
            message: '注册成功！',
            type: 'success',
            duration: 2000
        })
        // //跳转
        // router.push("/layout")
    }).catch(err => {
        console.log(err);
        ElNotification({
            message: err.data.data.message || '请求失败',
            type: 'error',
            duration: 2000
        })
    })

}
//重置函数
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}


</script>

<template>
    <el-row style="min-height: 100vh;">
        <el-col :span="16" id="col" style="background-color: #6366f1;">
            <div>
                <div style="font-weight: bold; font-size: 3rem; color: #fdfdfd;">
                    欢迎光临
                </div><br>
                <div style="color: #e5e7eb; font-size: small;">此站点专注致力于更方便、快捷的文件管理工具《xxx文件管理系统》</div>
            </div>
        </el-col>

        <el-col :span="8" id="col" style="background-color: #fdfdfd;">
            <h2 style="font-weight: bold; font-size: 3rem; color: #1f2937;">欢迎回来</h2>
            <div id="gray">
                <span>——————&nbsp;&nbsp; </span>
                <span>账户密码登录</span>
                <span>&nbsp;&nbsp;——————</span>
            </div>
            <el-form ref="formRef" :rules="rules1" :model="form" label-width="auto" style="width: 320px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名" clearable>
                        <template #prefix>
                            <el-icon>
                                <user />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码" show-password>
                        <template #prefix>
                            <el-icon>
                                <lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item label="验证码" prop="captcha">
                    <el-input v-model="form.captcha" placeholder="请输入验证码" clearable>
                        <template #prefix>
                            <el-icon>
                                <FullScreen />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <img :src="imgSrc" alt="验证码图片"> <!-- 展示验证码图片 -->
                <el-button type="text" @click="gainCaptcha">获取验证码</el-button> <!-- 获取验证码图片的按钮 -->

                <el-form-item>
                    <el-button type="primary" round color="#626aef" @click="onSubmit" style="width: 100%;">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
            <el-button type="text" @click="dialogVisible = true">点击注册</el-button>
        </el-col>
    </el-row>


    <el-dialog v-model="dialogVisible" title="注册账户" width="650" :before-close="handleClose" draggable="true">

        <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
            class="demo-ruleForm" :size="formSize" status-icon>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"
                    placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
                <el-input v-model="form.captcha" placeholder="请输入验证码" clearable>
                </el-input>
            </el-form-item>
            <img :src="imgSrc" alt="验证码图片"> <!-- 展示验证码图片 -->
            <el-button type="text" @click="gainCaptcha">获取验证码</el-button> <!-- 获取验证码图片的按钮 -->


            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    注册
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>

    </el-dialog>



</template>

<style scoped lang="less">
#col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #d1d5db;
}

#gray {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
}
</style>