<template>
    <div class="max-w-sm mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
        <!-- Main Image -->
        <img :src="card?.cardimage" alt="Main Image" class="w-full h-64 object-cover">

        <!-- Card Content -->
        <div class="p-2">
            <!-- Circular Profile Image -->
            <div class="flex items-center justify-between mt-2">
                <div class="flex items-center gap-1">
                    <img :src="card?.userimage" alt="Profile Image"
                        class="w-10 h-10 rounded-full border-4 border-white shadow-lg">
                    <p class="text-center text-md font-semibold text-white">{{ card?.username }}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="flex items-center justify-center px-2 py-1 rounded-md text-[#DBF226] bg-black text-tiny border-2 border-[#DBF226] text-white whitespace-nowrap hover:text-black hover:bg-[#DBF226] group">
                        <p v-if="card.btnTitle == 'Follow'" class="text-[16px] text-[#DBF226] group-hover:text-black">
                            +
                        </p>
                        {{ card.btnTitle }}
                    </button>
                </div>
            </div>

            <!-- Title -->
            <p class="mt-2 pl-2 text-xl font-bold text-white">{{ card?.title }}</p>
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-2">
                <button
                    class="px-2 py-1 rounded-md bg-black text-tiny border-2 text-white whitespace-nowrap hover:text-black hover:bg-[#DBF226]"
                    v-for="(tag, index) in card?.tags" :key="index">
                    {{ tag?.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { card } = defineProps(["card"]);
</script>

<style scoped></style>