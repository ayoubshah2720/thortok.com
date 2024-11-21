<template>
    <div class="flex">
        <img class="w-[291px] h-[291px] rounded-l-xl" :src="card?.img1" alt="card1-img1">
        <div>
            <img class="w-[180px] h-[145px] rounded-r-xl" :src="card?.img2" alt="card1-img1">
            <img class="w-[180px] h-[145px] rounded-r-xl" :src="card?.img3" alt="card1-img1">
        </div>
    </div>
    <div class="space-y-4 mt-4">
        <p class="text-lg font-bold"> {{card?.title}} </p>
        <div class="flex gap-2">
            <button class="px-3 py-2 border-1 rounded-md bg-gray-200"
            v-for="(tag,index) in card?.tags" :key="index">{{tag?.name}}</button>
        </div>
    </div>
</template>

<script setup>
  const {card} = defineProps(['card']);
</script>

<style lang="scss" scoped>

</style>