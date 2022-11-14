<script>
export default {
    name: "CardMaker",
    props: {
        result: Object
    }
}
</script>

<template>
    <div class="wrapper">

        <div v-if="result.original_title" class="character-item text-center">
            <h4>{{ result.original_title }}</h4>
        </div>
        <div v-else>
            <h4>{{ result.name }}</h4>
        </div>
        <div class="flag">
            <h3> {{ result.original_language }} </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>