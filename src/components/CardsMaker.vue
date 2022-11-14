<script>
export default {
    name: "CardMaker",
    props: {
        result: Object
    }
}
</script>

<template>
    <div class="character-item text-center">
        <h4>{{ result.original_title }}</h4>
    </div>
</template>

<style lang="scss" scoped>

</style>