<script setup lang="ts">
import { ref } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const nickname = ref('用户名')
const v = ref(3)
const design = ref("我行我素")
const fanCounts = ref()
const followCounts = ref()
const goodCounts = ref()
const avatar = ref()
const account = ref()
const age = ref()
const sex = ref()
const email = ref()
const mobilePhoneNumber = ref()
const area = ref()
const hobby = ref()
const work = ref()
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
                        <img src="" class="user-v-img" />
                        <span class="user-v-font">优质媒体作者</span>
                    </div>
                    <div class="user_qianming">
                        <span> {{ design }}</span>
                    </div>
                    <div class="user_anniu">
                        <el-button class="el-icon-edit" type="primary" size="medium" plain @click="">编辑</el-button>
                        <!-- <el-button v-else @click="" type="primary" size="medium" icon="el-icon-check" v-text="isfollowid.indexOf(this.$route.params.id) > -1
                            ? '已关注'
                            : '关注'
                            "></el-button> -->
                    </div>
                </div>
                <div class="user_num">
                    <div style="cursor: pointer" @click="">
                        <div class="num_number">{{ fanCounts }}</div>
                        <span class="num_text">粉丝</span>
                    </div>
                    <div style="cursor: pointer" @click="">
                        <div class="num_number">{{ followCounts }}</div>
                        <span class="num_text">关注</span>
                    </div>
                    <div>
                        <div class="num_number">{{ goodCounts }}</div>
                        <span class="num_text">获赞</span>
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
                    <!-- <div class="person_body_list" v-for="(item, index) in person_body_list" :key="index">
                        <router-link :to="{ name: item.name, params: item.params }">{{
                            item.label
                            }}</router-link>
                    </div> -->
                    <el-menu router active-text-color="#00c3ff" class="el-menu-vertical-demo">
                        <el-menu-item index="info" :route="{ name: 'info', params: $route.params.id }">
                            <i class="el-icon-user"></i>
                            <span slot="title">个人简介</span>
                        </el-menu-item>
                        <el-menu-item index="myarticle" :route="{ name: 'myarticle', params: $route.params.id }">
                            <i class="el-icon-edit-outline"></i>
                            <span slot="title">发帖</span>
                        </el-menu-item>
                        <el-menu-item index="mycollect" :route="{ name: 'mycollect', params: $route.params.id }">
                            <i class="el-icon-document"></i>
                            <span slot="title">收藏</span>
                        </el-menu-item>
                        <el-menu-item index="myfan" :route="{ name: 'myfan', params: $route.params.id }">
                            <i class="el-icon-tableware"></i>
                            <span slot="title">粉丝</span>
                        </el-menu-item>
                    </el-menu>
                </el-card>
            </div>
            <div class="person_body_right">
                <div>
                    <el-card>
                        <el-descriptions class="margin-top" title="简介" :column="2">
                            <template #extra>
                                <el-button type="primary" size="small">操作</el-button>
                            </template>
                            <el-descriptions-item>
                                <template slot="label">
                                    <!-- <i class="el-icon-picture-outline"></i>
                                    头像
                                </template>
    <img class="img" :src="avatar" alt="" /> -->
                                    <el-icon :icon="ElementPlusIconsVue.User" />
                                    头像
                                </template>
                                <el-image class="img" :src="avatar" fit="cover" alt="">
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-user"></i>
                                    账户名
                                </template>
                                {{ account }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-s-custom"></i>
                                    昵称
                                </template>
                                {{ nickname }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-odometer"></i>
                                    年龄
                                </template>
                                {{ age }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-male"></i>
                                    <i class="el-icon-female"></i>
                                    性别
                                </template>
                                <el-tag size="small">{{ sex }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-message"></i>
                                    邮箱Email
                                </template>
                                {{ email }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-mobile-phone"></i>
                                    手机号码
                                </template>
                                {{ mobilePhoneNumber }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-location-outline"></i>
                                    地区
                                </template>
                                {{ area }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-office-building"></i>
                                    职业
                                </template>
                                {{ work }}
                            </el-descriptions-item>

                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-basketball"></i>
                                    兴趣爱好
                                </template>
                                {{ hobby }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-magic-stick"></i>
                                    个性签名
                                </template>
                                {{ design }}
                            </el-descriptions-item>
                            <el-descriptions-item>
                                <template slot="label">
                                    <i class="el-icon-date"></i>
                                    注册日期
                                </template>
                                <!-- {{ createDate | formatDate }} -->
                            </el-descriptions-item>
                        </el-descriptions>
                    </el-card>
                </div>

            </div>
        </div>
        <personal-dia ref="dia" @flesh="" />
    </div>
</template>



<style>
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

.el-menu-item>span {
    font-size: 16px;
    color: #999;
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
</style>