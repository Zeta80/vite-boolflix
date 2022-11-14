<script>
import { store } from "../store";
import CardsMaker from "./CardsMaker.vue";
export default {
    name: "AppMovie",
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

    <h2 class="text-center">Lista Film</h2>

    <div class="row row-cols-2 row-cols-md-4 g-3">
        <div class="col" v-for="result in store.arrayMovie.results" :key="store.arrayMovie.results.id">
            <CardsMaker :result="result" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>