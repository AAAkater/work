<template>
    <div class="not-found">
        <el-card class="not-found-card" shadow="hover">
            <el-image src="../src/assets/404.jpg" fit="cover" class="not-found-image" />
            <h1 class="not-found-title">页面未找到</h1>
            <p class="not-found-description">抱歉，您访问的页面不存在。</p>
            <el-button type="primary" @click="goHome" class="home-button">
                <el-icon>
                    <home />
                </el-icon> 返回首页
            </el-button>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { HomeFilled as home } from '@element-plus/icons-vue';

const router = useRouter();

const goHome = () => {
    router.push('/');
};
</script>

<style scoped>
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

.not-found-card {
    text-align: center;
    padding: 15px;
    /* 调整卡片内边距 */
    max-width: 480px;
    /* 调整卡片最大宽度 */
    width: 100%;
    max-height: 420px;
    /* 调整卡片最大高度 */
    border-radius: 7.2px;
    /* 调整卡片圆角半径 */
    box-shadow: 0 3.6px 9.6px rgba(0, 0, 0, 0.15);
    background-color: white;
    box-sizing: border-box;
}

.not-found-image {
    width: 100%;
    max-width: 300px;
    /* 调整图片最大宽度 */
    max-height: 180px;
    /* 调整图片最大高度 */
    margin-bottom: 18px;
    /* 调整图片下方外边距 */
    border-radius: 7.2px;
    /* 调整图片圆角半径 */
}

.not-found-title {
    font-size: 1.5rem;
    /* 调整标题字体大小 */
    margin-bottom: 12px;
    /* 调整标题下方外边距 */
}

.not-found-description {
    font-size: 0.9rem;
    /* 调整描述字体大小 */
    margin-bottom: 18px;
    /* 调整描述下方外边距 */
}

.home-button {
    font-size: 0.75rem;
    /* 调整按钮的字体大小 */
    padding: 6px 12px;
    /* 调整按钮的内边距 */
}

.home-button el-icon {
    font-size: 0.9rem;
    /* 调整按钮图标的大小 */
}
</style>