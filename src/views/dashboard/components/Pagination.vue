<script setup lang="ts">
import { ref } from 'vue';
import { ElPagination, type ComponentSize } from 'element-plus';

const currentPage4 = ref(1)
const disabled = ref(false)
const pageSize4 = ref(1)
const background = ref(false)
const size = ref<ComponentSize>('default')
const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}

</script>


<template>
    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
        :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
        :total="1" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>

<style scoped lang="less"></style>