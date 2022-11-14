<script>
export default {
    name: "CardMaker",
    props: {
        result: Object
    }
}
</script>

<template>
    <div v-if="result.original_title" class="character-item text-center">
        <h4>{{ result.original_title }}</h4>
    </div>
    <div v-else>
        <h4>{{ result.name }}</h4>
    </div>
</template>

<style lang="scss" scoped>

</style>