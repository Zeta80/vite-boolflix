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
    <div class="container">
        <div class="wrapper">


            <h2 class="text-center">Lista Serie Tv</h2>

            <div class="cards row row-cols-2 row-cols-md-4 g-3">
                <div class="col" v-for="result in store.arrayTv.results" :key="store.arrayTv.results.id">
                    <CardsMaker :result="result" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 90%;
    padding: 40px 0;
    margin: 0 auto;
}
</style>