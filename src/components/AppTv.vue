<script>
import { store } from "../store";
import CardsMaker from "./CardsMaker.vue";
export default {
    name: "AppTv",
    components: {
        CardsMaker,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <h2 class="text-center">Lista Serie Tv</h2>

    <div class="row row-cols-2 row-cols-md-4 g-3">
        <div class="col" v-for="result in store.arrayTv.results" :key="store.arrayTv.results.id">
            <CardsMaker :result="result" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>