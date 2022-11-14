<script>
import AppMovie from './AppMovie.vue';
import AppTv from './AppTv.vue';

export default {
    name: "AppMain",
    components: {
        AppMovie,
        AppTv
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <AppMovie />
    <AppTv />
</template>

<style lang="scss" scoped>

</style>