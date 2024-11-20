<template>
    <div class="slider-container">
      <button class="arrow left-arrow" @click="prevSlide">←</button>
  
      <div class="cards-wrapper">
        <div class="card" v-for="(card, index) in visibleCards" :key="card.id">
          <div class="card-content">
            <img :src="card.image" alt="Card Image" />
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
  
      <button class="arrow right-arrow" @click="nextSlide">→</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        cards: [
          { id: 1, title: 'Card 1', description: 'This is card 1', image: 'path_to_image1.jpg' },
          { id: 2, title: 'Card 2', description: 'This is card 2', image: 'path_to_image2.jpg' },
          { id: 3, title: 'Card 3', description: 'This is card 3', image: 'path_to_image3.jpg' },
          { id: 4, title: 'Card 4', description: 'This is card 4', image: 'path_to_image4.jpg' },
          { id: 5, title: 'Card 5', description: 'This is card 5', image: 'path_to_image5.jpg' }
        ]
      }
    },
    computed: {
      visibleCards() {
        // Define how many cards should be visible at a time, e.g. 3 cards.
        const visibleCount = 3;
        const cards = this.cards;
        return cards.slice(this.currentIndex, this.currentIndex + visibleCount);
      }
    },
    methods: {
      prevSlide() {
        // Decrease the index and loop back if needed
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.cards.length - 3; // Adjust based on visibleCount
        }
      },
      nextSlide() {
        // Increase the index and loop back if needed
        if (this.currentIndex < this.cards.length - 3) { // Adjust based on visibleCount
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 80%; /* Adjust as needed */
    overflow: hidden;
  }
  
  .cards-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .card {
    width: 200px; /* Adjust based on your design */
    margin: 0 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    overflow: hidden;
  }
  
  .card img {
    width: 100%;
    height: auto;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    font-size: 2rem;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
  }
  
  .left-arrow {
    left: 0;
  }
  
  .right-arrow {
    right: 0;
  }
  </style>
  