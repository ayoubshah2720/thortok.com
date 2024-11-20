<template>
    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Main Image -->
      <img src="/assets/images/card1-img1.png" alt="Main Image" class="w-full h-64 object-cover">
  
      <!-- Card Content -->
      <div class="p-4">
        <!-- Circular Profile Image -->
        <div class="flex items-center justify-between mt-4">
            <div class="flex items-center">
            <img src="/assets/images/card1-img1.png" alt="Profile Image" class="w-8 h-8 rounded-full border-4 border-white shadow-lg">
            <p class="text-center text-lg font-semibold">{{ 'username' }}</p>
        </div>
        <div class="flex items-center gap-2">
            <p class="text-center text-lg font-semibold line-through">{{ '$40' }}</p>
            <p class="text-center text-lg font-semibold">{{ '$35' }}</p>
        </div>
        </div>
  
        <!-- Title -->
        <p class="mt-4 pl-2 text-xl font-bold">{{ 'title' }}</p>
  
        <!-- Buttons -->
        <div class="flex justify-around mt-6">
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Button 1</button>
          <button class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">Button 2</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    // const props = defineProps({
    //   mainImage: {
    //     type: String,
    //     required: true,
    //   },
    //   profileImage: {
    //     type: String,
    //     required: true,
    //   },
    //   username: {
    //     type: String,
    //     required: true,
    //   },
    //   title: {
    //     type: String,
    //     required: true,
    //   },
    // });
  </script>
  
  <style scoped>

</style>
  