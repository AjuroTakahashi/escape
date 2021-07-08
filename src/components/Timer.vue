<template>
    <div class="timer">
        <span>
            {{ time_str }}
        </span>
    </div>
</template>

<script>
    export default{ 
        props: ["time"],
        computed: {
            time_str: function() {
                const seconds = (this.time % 60).toString();
                const minutes = Math.floor(this.time / 60) + "";
                return minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
            }
        }
    }
</script>

<style scoped>
    .timer{
        @apply flex items-center p-4 bg-gray-900 rounded-lg text-white;
    }
    .timer span {
        @apply text-2xl;
    }
</style>
