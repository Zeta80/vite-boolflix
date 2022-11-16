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

        <div class="front-display">
            <div class="img-card">
                <!-- <img :src="`${store.imgCard}${result.poster_path} `"> -->


                <img v-if="result.poster_path" :src="`${store.imgCard}${result.poster_path}`" alt="">
                <img class="not-found" v-else src="../assets/immagini-flag/wc-placeholder.jpg" alt="">



            </div>


            <div class="back-display">
                <div v-if="result.original_title" class="card-item text-start">
                    <h3>{{ result.title }}</h3>
                    <h4>Titolo orignale:{{ result.original_title }}</h4>
                </div>
                <div v-else>
                    <h3>{{ result.name }}</h3>
                    <h4>Titolo orignale:{{ result.original_name }}</h4>
                </div>
                <div>
                    <p>{{ result.overview }}</p>
                </div>
                <div class="flag ">
                    <img v-if="availableFlags.includes(result.original_language)"
                        :src="getImgUrl(result.original_language)">
                    <p v-else> Lenguage: {{ result.original_language }} </p>
                </div>
                <div class="star ">
                    <span v-for="item in getStarsNumber">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="item in (5 - getStarsNumber)">
                        <i class="fa-regular fa-star"></i>
                    </span>

                </div>
            </div>
        </div>


    </div>

</template>
            
<style lang ="scss" scoped>
.front-display {
    position: relative;
    background-color: black;

    &:hover .img-card {
        opacity: 0.2;
    }

    &:hover .back-display {
        opacity: 1;
        display: block;

    }

}

.back-display {
    position: absolute;
    max-height: 90%;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    overflow: scroll;
    overflow-x: hidden;

    color: white;
    display: none;
    font-size: 0.7rem;

    & h3 {
        font-size: 1.3rem;
    }

    & h4 {
        font-size: 0.8rem;
    }
}

.card-item {
    padding: 15px;
    height: 100%;
}

.flag {
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;

    img {
        max-width: 30px;
    }

}

.star {
    margin-left: 0.5rem;
}
</style>