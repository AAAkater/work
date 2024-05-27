<script setup lang="ts">
import { userLogin } from "@/api";
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'

// do not use same name with ref
const form = reactive({
    username: '',
    password: ''
})

const formRef = ref(null)
const onSubmit = () => {
    formRef.value.validate((valid: any) => {
        if (!valid) {
            return false
        }
        console.log("验证通过");//todo 请求登录

    })
}
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('你是否确定取消注册?')
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
    ]
}




interface RuleForm {
    username: string
    password: string
    checkPass: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    username: '',
    password: '',
    checkPass: ''
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
        { validator: validatePass2, trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

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
            <el-form ref="formRef" :rules="rules1" :model="form" label-width="auto" style="max-width: 600px">
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