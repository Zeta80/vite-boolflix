<script>
import { store } from '../store'
export default {
    name: "CardMaker",
    props: {
        result: Object
    },
    data() {
        return {
            flag: "../assets/immagini-flag/italia.png",
            store,

        }
    },
    methods: {
        flagConvertor(flag) {
            if (this.result.original_language == "it") {
                return "../assets/immagini-flag/italia.png"
            }
        }
    },
}
</script>

<template>
    <div class="container wrapper">
        <div class="img-card">
            <img :src="`${store.imgCard}${result.backdrop_path} `">
        </div>
        <div v-if="result.original_title" class="character-item text-center">
            <h4>{{ result.original_title }}</h4>
        </div>
        <div v-else>
            <h4>{{ result.name }}</h4>
        </div>
        <div class="flag">
            <img :src="flagConvertor(flag)" alt="">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.flag {
    img {
        max-width: 50px;
    }
}
</style>