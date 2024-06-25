<script setup="ts">
import { ref, reactive } from 'vue';

const nickname = ref('用户名');
const design = ref("我行我素");
const recycleCounts = ref()
const collectCounts = ref()
const goodCounts = ref()
</script>

<template>
    <div class="PersonTop">
        <div class="PersonTop_img">
            <img v-image-preview />
        </div>
        <div class="PersonTop_text">
            <div class="user_text">
                <div class="user_name">
                    <span> {{ nickname }} </span>
                </div>
                <div class="user-v">
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
</template>

<style scoped>
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
</style>