<script setup>
import Aside from '../components/Aside.vue';
import Header from '../components/Header.vue';
</script>

<template>
    <el-container>
        <Aside></Aside>
        <el-container direction="vertical">
            <Header></Header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style>

</style>