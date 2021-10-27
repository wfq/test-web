<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()

    const handleClick = (el) => {
        router.push({path: "/bank"})
    }
</script>

<template>
    <el-aside>
        <el-menu default-active="/bank">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="/bank" click="">银行</el-menu-item>
            <el-menu-item index="3">股票</el-menu-item>
            <el-menu-item index="4">基金</el-menu-item>
        </el-menu>
    </el-aside>
</template>

<style>
.el-aside {
    height: 100%;
}
</style>