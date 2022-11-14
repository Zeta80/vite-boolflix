<script>
import { store } from '../store'
export default {
    name: "AppHeader",

    data() {
        return {
            store,
        }
    },
    methods: {},
};
</script>

<template>
    <header class="d-flex ">
        <h1 class=" text-center text-dark">Ciao</h1>
        <input type="text" class="form-control" v-model="store.searchKey">
        <button class="btn btn-primary" @click="$emit('titleSearch')">Search</button>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 50px;
    background-color: grey;

    input {
        width: 200px;
    }
}
</style>