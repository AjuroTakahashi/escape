<template>
    <div class="craft-container">
        <div class="craft-items">
            <div class="craft-item">
                <img v-if="firstItem" :src="firstItem.icon"/>
                <button v-if="firstItem" @click="$emit('onRemoveItem', firstItem)">X</button>
            </div>
            <div class="craft-item">
                <img v-if="secondItem" :src="secondItem.icon"/>
                <button v-if="secondItem" @click="$emit('onRemoveItem', secondItem)">X</button>
            </div>
        </div>
        <Button @click="$emit('onCombine')" size="small" :disabled="!firstItem || !secondItem">Combiner</Button>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    props: [
        "firstItem",
        "secondItem"
    ],
    components: {
        Button,
    }
}
</script>

<style scoped>
    .craft-items {
        @apply flex bg-gray-200 rounded-lg shadow;
    }
    .craft-item {
        @apply w-20 h-20 bg-gray-600 m-2 rounded-full;
    }
    .craft-item img {
        @apply h-full w-full p-4;
    }
</style>