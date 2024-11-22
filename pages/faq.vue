<template>
  <div class="accordion">
    <div 
      v-for="(item, index) in items" 
      :key="index" 
      class="accordion-item"
    >
      <!-- Accordion Header -->
      <div
        class="accordion-header flex justify-between items-center cursor-pointer py-2 px-6  hover:bg-[#EFF1D9] rounded-md"
        @click="toggleAccordion(index)"
      >
        <h3 class="font-bold text-[#005B52]">{{ item.title }}</h3>
        <span class="text-3xl">
          {{ openIndex === index ? '-' : '+' }}
        </span>
      </div>

      <!-- Accordion Content -->
      <div
        v-if="openIndex === index"
        class="accordion-content px-6 py-2 bg-white rounded-md mt-2"
      >
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Accordion data
const items = [
  {
    title: "What is Thortok, and what does it offer?",
    content: "Thortok is a digital platform that offers unique resources and content that creators won’t find anywhere else. It provides a wide variety of digital assets, including graphic templates, PSD files, photos, and more, to help creators elevate their projects. Thortok also values the work of creators by offering multiple monetization programs, such as the Content Sharing Program, Content Sales Program, and Freelancer Service Program, allowing them to earn money and gain visibility.",
  },
  {
    title: "What are the core values of Thortok?",
    content: "Thortok is a digital platform that offers unique resources and content that creators won’t find anywhere else. It provides a wide variety of digital assets, including graphic templates, PSD files, photos, and more, to help creators elevate their projects. Thortok also values the work of creators by offering multiple monetization programs, such as the Content Sharing Program, Content Sales Program, and Freelancer Service Program, allowing them to earn money and gain visibility.",
  },
  {
    title: "Who can join Thortok as a creator?",
    content: "Thortok is a digital platform that offers unique resources and content that creators won’t find anywhere else. It provides a wide variety of digital assets, including graphic templates, PSD files, photos, and more, to help creators elevate their projects. Thortok also values the work of creators by offering multiple monetization programs, such as the Content Sharing Program, Content Sales Program, and Freelancer Service Program, allowing them to earn money and gain visibility.",
  },
  {
    title: "How does Thortok help creators monetize their content?",
    content: "Thortok is a digital platform that offers unique resources and content that creators won’t find anywhere else. It provides a wide variety of digital assets, including graphic templates, PSD files, photos, and more, to help creators elevate their projects. Thortok also values the work of creators by offering multiple monetization programs, such as the Content Sharing Program, Content Sales Program, and Freelancer Service Program, allowing them to earn money and gain visibility.",
  },
  {
    title: "How does Thortok differ from other content creation and monetization platforms?",
    content: "Thortok is a digital platform that offers unique resources and content that creators won’t find anywhere else. It provides a wide variety of digital assets, including graphic templates, PSD files, photos, and more, to help creators elevate their projects. Thortok also values the work of creators by offering multiple monetization programs, such as the Content Sharing Program, Content Sales Program, and Freelancer Service Program, allowing them to earn money and gain visibility.",
  },
];

// Track the currently open accordion index (-1 means all closed)
const openIndex = ref(0);

// Toggle the accordion
const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};
</script>

<style scoped>
.accordion {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.accordion-header {
  transition: background-color 0.3s ease;
  margin-bottom: 5px;
}

.accordion-content {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
