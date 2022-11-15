<script>
import { store } from '../store'
export default {
    name: "CardMaker",
    props: {
        result: Object
    },
    data() {
        return {
            availableFlags: ['en', 'it'],
            store,



        }
    },
    computed: {
        getStarsNumber() {

            return parseInt((Number(this.result.vote_average) / 2).toFixed(0))
        }
    },
    methods: {
        flagConvertor() {
            if (this.result.original_language == "it") {
                return "../assets/immagini-flag/italia.png"
            }
        },
        getImgUrl(imgName) {
            return new URL(`../assets/immagini-flag/${imgName}.png`, import.meta.url).href;
        },


    },
}
</script>

<template>
    <div class="container ">
        <div class="wrapper">
            <div class="img-card">

                <img :src="`${store.imgCard}${result.poster_path} `">
            </div>

            <div v-if="result.original_title" class="card-item text-center">
                <h3>Titolo film:{{ result.title }}</h3>
                <h4>Titolo orignale:{{ result.original_title }}</h4>
            </div>
            <div v-else>
                <h3>Titolo Serie:{{ result.name }}</h3>
                <h4>Titolo orignale:{{ result.original_name }}</h4>
            </div>
            <div class="flag">
                <img v-if="availableFlags.includes(result.original_language)"
                    :src="getImgUrl(result.original_language)">
                <p v-else> Lenguage: {{ result.original_language }} </p>
            </div>
            <div class="star">
                <p>{{ result.vote_average }} - {{ getStarsNumber }}</p>
                <span v-for="item in getStarsNumber">
                    1
                </span>
                <span v-for="item in (5 - getStarsNumber)">
                    0
                </span>

            </div>
        </div>
    </div>

</template>
            
<style  lang ="scss" scoped>
.wrapper {
    text-align: start;
}

.img-card {
    position: relative;
}

.card-item {
    padding: 15px;
    height: 100%;
}

.flag {
    img {
        max-width: 50px;
    }
}
</style>