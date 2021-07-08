<template>
    <button :disabled="disabled" @click="$emit('click')" :class="[size, type]">
        <img v-if="icon" :src="icon" alt="">
        <span>
            <slot/>
        </span>
    </button>
</template>

<script>
export default {
    props: ["icon", "disabled", "size", "type",]
}
</script>

<style scoped>
    button[disabled] {
        opacity: 0.5;
    }
    button {
        @apply flex items-center bg-blue-500 rounded-xl w-full text-white text-lg p-2 px-4 shadow;
    }
    button span {
        @apply flex-1 text-center;
    }
    button img {
        @apply h-5;
    }
    button.small {
        @apply text-base p-1 px-8;
    }
    button.danger {
        @apply bg-red-500;
    }
</style>