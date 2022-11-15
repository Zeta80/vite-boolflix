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
    <header>
        <div class="container">

            <div class="wrapper  d-flex">

                <h1 class=" text-start ">BoolFix</h1>
                <div class="form d-flex">

                    <input type="text" class="form-control" v-model="store.searchKey">
                    <button class="btn btn-primary" @click="$emit('titleSearch')">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 9999;

    .wrapper {
        justify-content: space-between;
    }

    h1 {
        color: red;
    }

    .form {
        align-items: center;
    }

}
</style>