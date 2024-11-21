<template>
    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Main Image -->
      <img :src="card?.cardimage" alt="Main Image" class="w-full h-64 object-cover">
  
      <!-- Card Content -->
      <div class="p-2">
        <!-- Circular Profile Image -->
        <div class="flex items-center justify-between mt-2">
            <div class="flex items-center gap-1">
            <img :src="card?.userimage" alt="Profile Image" class="w-10 h-10 rounded-full border-4 border-white shadow-lg">
            <p class="text-center text-md font-semibold">{{ card?.username }}</p>
        </div>
        <div class="flex items-center gap-2">
            <p class="text-center text-lg font-semibold line-through">{{ card?.price }}</p>
            <p class="text-center text-lg font-semibold">{{ card?.dicountedPrice }}</p>
        </div>
        </div>
  
        <!-- Title -->
        <p class="mt-2 pl-2 text-xl font-bold">{{ card?.title }}</p>
  
        <!-- Buttons -->
        <div class="flex justify-around mt-2">
          <button class="flex items-center px-1.5 py-2 gap-2 bg-[#DBF226] text-black rounded-lg hover:bg-white hover:border-2 hover:border-gray-200">
          <img class="h-5 w-5" src="/assets/icons/cart-black.png" alt="cart-black">
          <p class="text-[14px] font-[350]">Add to cart</p>
          </button>
          <button class="flex items-center px-1.5 py-2 gap-2 bg-white text-black rounded-lg border-2 hover:bg-[#DBF226] border-gray-300">
          <img class="h-4 w-4" src="/assets/icons/wishlist-outline.png" alt="cart-black">
          <p class="text-[14px] font-[350]"> Wishlist </p>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const {card} = defineProps(['card']);
  </script>
  
  <style scoped>

</style>
  