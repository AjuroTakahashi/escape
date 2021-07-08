<template>
    <div class="room">
        <div class="room-title">
            Pièce
        </div>
        <ul class="items-list">
            <li class="item" v-for="(item, index) in items" :key="index">
                <div class="items-infos">
                    <img class="item-icon" :src="item.icon" height="30"/>
                    <span>
                        {{item.name}} ({{item.status}})
                    </span>
                </div>
                <div class="items-actions">
                    <button @click="$emit('use', item)">
                        <img class="item-icon" src="https://image.flaticon.com/icons/png/512/484/484664.png" alt="utiliser">
                    </button>
                    <button @click="$emit('take', item)">
                        <img class="item-icon" src="https://image.flaticon.com/icons/png/512/2165/2165693.png" alt="prendre">
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["items"],
}
</script>

<style scoped>
    .room {
        @apply bg-white rounded-xl shadow-xl my-5 overflow-hidden;
    }
    .room-title {
        @apply bg-blue-400 text-white text-center text-lg p-3;
    }
    .items-list {
        /* @apply ; */
    }
    .item {
        @apply flex border-b p-4 justify-between items-center;
    }
    .item-icon {
        @apply h-10 pr-2;
    }
    .items-infos {
        @apply flex justify-between items-center h-8 mr-2;
    }
    .items-actions button {
        @apply mx-2;
    }
</style>