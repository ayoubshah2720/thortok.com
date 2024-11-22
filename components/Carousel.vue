<template>
  <div class="carousel-container">
    <!-- Left Arrow -->
    <button class="prev" @click="moveSlide(-1)">&#10094;</button>
    <!-- Carousel -->
    <div class="carousel">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index"
        :class="{ active: index === currentIndex }">
        <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
      </div>
    </div>
    <!-- Right Arrow -->
    <button class="next" @click="moveSlide(1)">&#10095;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const currentIndex = ref(0);
const slides = [
  { image: "https://via.placeholder.com/600x300?text=Slide+1" },
  { image: "https://via.placeholder.com/600x300?text=Slide+2" },
  { image: "https://via.placeholder.com/600x300?text=Slide+3" }
];

const moveSlide = (direction) => {
  currentIndex.value += direction;
  if (currentIndex.value < 0) {
    currentIndex.value = slides.length - 1;
  }
  if (currentIndex.value >= slides.length) {
    currentIndex.value = 0;
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  transition: transform 0.5s ease;
}

.carousel-slide img {
  width: 100%;
  border-radius: 10px;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-slide:not(.active) {
  display: none;
}
</style>