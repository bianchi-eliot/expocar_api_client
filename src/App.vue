<template>
    <Header :extend="extend" @toggleExtend="handleToggle"/>
    <Navbar :extend="extend"/>
    <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: { Navbar, Header },
    data() {
        return {
            extend: false
        }
    },
    methods: {
        handleToggle() {
            this.extend = !this.extend
        }
    }
}
</script>

<style>
#app {
    margin-top: var(--header-height);
    margin-left: var(--navbar-width);
}
</style>
