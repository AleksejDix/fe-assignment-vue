<template>
    <div id="app">
        <div id="nav">
        <router-link :to="{name: 'home'}">Home</router-link>
        </div>
        <router-view :key="$router.fullPath"/>
    </div>
</template>

<style lang="scss">
    @import 'assets/variables.scss';

    body {
        font-family: Helvetica;
        margin: 0;
        padding: $layout-space-base;
    }

    $color-todo-light: #FDEDAC;
    $color-todo-dark: #FEDE69;
    .todo {
        float: left;
        padding: $layout-space-base;
        margin: $layout-space-base / 2;
        background: linear-gradient(to right bottom, $color-todo-dark 0%, $color-todo-light 100%);
    }
    .listing-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
