<script setup>
import Aside from '../components/Aside.vue';
import Header from '../components/Header.vue';
</script>

<template>
    <el-container>
        <Aside></Aside>
        <el-container>
            <Header></Header>
            <el-main></el-main>
        </el-container>
    </el-container>
</template>

<style>

</style>