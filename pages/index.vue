<template>
  <div class="my-4">
    <div class="bg-cover bg-no-repeat bg-[url('/images/HERO.png')] h-[435px] w-full">
      <div class="flex-col justify-center max-w-screen-lg mx-auto px-4">
        <!-- Main Heading -->
        <p class="text-white font-bold text-[50px]">Discover, Download</p>
        <p class="text-white font-bold text-[50px] mb-4">Create!</p>

        <!-- Search Container -->
        <div class="bg-white flex flex-wrap gap-1 px-2 w-full max-w-4xl rounded-lg shadow-lg">
          <!-- Collection Dropdown -->
          <div class="w-full sm:w-[200px] flex items-center gap-2 justify-around px-3 py-2 rounded-md">
            <img class="h-6 w-6" src="/assets/icons/collection.png" alt="Collection Icon">
            <p class="text-sm font-normal">All Collections</p>
            <img class="h-2 w-2" src="/assets/icons/down-arrow.png" alt="Down Arrow">
          </div>
          <p class="text-3xl">|</p>
          <input class="flex-grow w-full sm:w-auto p-3 rounded-md border-none focus:outline-none" v-model="message"
            placeholder="Search for anything, try with Lifestyle..." />
          <div class="flex items-center justify-center gap-2">
            <img class="h-5 w-5" src="/assets/icons/cross.png" alt="Clear Icon">
            <button class="bg-[#005B52] text-white px-4 py-2 rounded-md hover:bg-[#004844]">Search</button>
          </div>
        </div>
      </div>
      <div class="flex max-w-screen-lg items-center mx-auto py-4 gap-2">
        <p class="text-white text-[10px]">Unleash your creativity with thousands of high-quality</p>
        <p class="p-1 bg-gray-400 text-white text-[10px] rounded-sm"> design assets, </p>
        <p class="text-white text-[10px]"> audio, photos, Videos and templates. </p>
        <p class="text-white text-[10px]"> Whether you’re a creator or a designer, find everything you need to bring </p>
        <p class="p-1 bg-gray-400 text-white text-[10px] rounded-sm"> your ideas to life. </p>
      </div>

    </div>

    <div class="p-4 sm:p-6 md:p-8 lg:p-3 xl:p-4 mt-1 max-w-screen-xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="left flex items-center gap-2">
          <img src="../assets/icons/calendar-icon.png" alt="calendericon" class="w-3 h-3" />
          <h3 class="text-base font-bold">Discover Seasonal Collections</h3>
        </div>
        <div class="right flex gap-2">
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]">
            <img class="w-3 h-3" src="../assets/icons/left-arrow.png" alt="left icon" />
          </div>
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]">
            <img class="w-3 h-3" src="../assets/icons/right-arrow.png" alt="right icon" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-3 max-w-screen-xl mx-auto px-4">
      <div class="bg-cover bg-no-repeat bg-[url('/images/S1.png')] rounded-lg shadow-lg
      flex items-center justify-center h-[58px] w-full">
        <p class="text-white text-base font-bold"> January 1</p>
      </div>
      <div class="bg-cover bg-no-repeat bg-[url('/images/S2.png')] rounded-lg shadow-lg
      flex items-center justify-center h-[58px] w-full">
        <p class="text-white text-base font-bold"> January 7</p>
      </div>
      <div class="bg-cover bg-no-repeat bg-[url('/images/S3.png')] rounded-lg shadow-lg
      flex items-center justify-center h-[58px] w-full">
        <p class="text-white text-base font-bold"> February 5 </p>
      </div>
      <div class="bg-cover bg-no-repeat bg-[url('/images/S4.png')] rounded-lg shadow-lg
      flex items-center justify-center h-[58px] w-full">
        <p class="text-white text-base font-bold"> February 13</p>
      </div>
      <div class="bg-cover bg-no-repeat bg-[url('/images/S5.png')] rounded-lg shadow-lg
      flex items-center justify-center h-[58px] w-full">
        <p class="text-white text-base font-bold"> February 15</p>
      </div>
    </div>

    <!-- 3rd example -->
    <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 bg-[#EFF1D9] mt-8 max-w-screen-xl mx-auto px-4">
      <h2 class="text-xl font-bold p-1">Discover our current offers</h2>
      <p class="text-base font-light p-1">
        Explore exclusive digital assets from top creators, available for
        purchase now.
      </p>
      <div class="flex justify-between p-1">
        <div>
          <button class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1">
            All
          </button>
          <button class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1">
            Special offer
          </button>
          <button class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1">
            Mockups
          </button>
          <button class="rounded-md bg-white border-2 text-black pl-3 pr-3 pt-1 pb-1">
            Stationery
          </button>
          <button class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1">
            Presets
          </button>
          <button class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1">
            Themes
          </button>
        </div>
        <div class="right flex gap-2">
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-white">
            <img class="w-3 h-3" src="../assets/icons/left-arrow.png" alt="left icon" />
          </div>
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-white">
            <img class="w-3 h-3" src="../assets/icons/right-arrow.png" alt="right icon" />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-4">
        <div class="flex-1 rounded-lg" v-for="(card, index) in featureCards">
          <OffersCards :key="index" :card="card"/>
        </div>
      </div>
    </div>

    <!-- 4th example -->
    <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 mt-8 max-w-screen-xl mx-auto px-4">
      <p class="text-xl font-bold custom-underline">Browse by collections</p>
      <p class="text-base font-light p-1">
        Discover endless possibilities with our curated digital resources,
        perfect for all your creative needs.
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto px-4">
      <div class="flex-1 rounded-lg" v-for="(card, index) in cardsData">
        <Cards :key="index" :card="card" />
      </div>
    </div>

    <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 mt-8 max-w-screen-xl mx-auto px-4">
      <h2 class="text-xl font-bold p-1">Fonts Collection</h2>
      <p class="text-base font-light p-1">
        Find the perfect fonts to give your designs a unique and professional
        touch.
      </p>
      <div class="flex justify-between p-1">
        <div class="flex gap-2">
          <button class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1">
            All
          </button>
          <button class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1">
            Serif
          </button>
          <button class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1">
            Sans-Serif
          </button>
          <button class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1">
            Slab-Serif
          </button>
          <button class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1">
            Display
          </button>
          <button class="bg-[#DBF226] border-2 text-black rounded-md pl-3 pr-3 pt-1 pb-1">
            Script
          </button>
          <button class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1">
            Monospaced-width
          </button>
          <button class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1">
            Variable
          </button>
        </div>
        <div class="right flex gap-2">
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]">
            <img class="w-3 h-3" src="../assets/icons/left-arrow.png" alt="left icon" />
          </div>
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]">
            <img class="w-3 h-3" src="../assets/icons/right-arrow.png" alt="right icon" />
          </div>
        </div>
      </div>
    </div>

    <!-- 5th example -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-2">
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner1.png" alt="s1" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner2.png" alt="s2" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner3.png" alt="s3" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner4.png" alt="s4" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner5.png" alt="s5" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner6.png" alt="s5" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner7.png" alt="s7" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner8.png" alt="s8" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner9.png" alt="s9" />
      </div>
      <div class="rounded-lg shadow-lg">
        <img class="w-['210px'] h-['140']" src="/images/sm-banner10.png" alt="s10" />
      </div>
    </div>

    <!-- 3rd example -->
    <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 bg-[#EFF1D9] mt-8">
      <div class="flex items-center justify-between p-1 max-w-screen-xl mx-auto px-4">
        <div>
          <h2 class="text-xl font-bold p-1 custom-underline">
            Featured Creators of the Week
          </h2>
          <p class="text-base font-light p-1">
            Discover the unique talents and inspiring creations of this week’s
            standout contributors.
          </p>
        </div>
        <div class="right flex gap-2">
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-white">
            <img class="w-3 h-3" src="../assets/icons/left-arrow.png" alt="left icon" />
          </div>
          <div class="rounded-full flex items-center justify-center w-8 h-8 bg-white">
            <img class="w-3 h-3" src="../assets/icons/right-arrow.png" alt="right icon" />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-4">
        <div class="flex-1 rounded-lg" v-for="(card, index) in featureCards">
          <OffersCards :key="index" :card="card"/>
        </div>
      </div>
    </div>

    <!-- <Carousel />  -->
    <!-- Choose plan view -->
    <div class="max-w-screen-lg mx-auto px-4 mt-8">
      <div>
        <h2 class="text-xl p-1">
          <b>Choose the Plan </b> That Fits Your Needs
        </h2>
        <p class="text-base font-light p-1">
          Whether you’re starting for free or ready to unlock all features, we
          have a plan for you.
        </p>
      </div>
    
      <div class="flex flex-col md:flex-row mt-4 gap-4">
  <!-- Free Plan -->
  <div class="flex-1 md:basis-1/3 rounded-md shadow-lg border-2 p-10">
    <h2 class="text-xl p-1 font-bold">Free Plan</h2>
    <p class="text-base font-light p-1">
      Join Thortok today with our free plan and enjoy access to a curated
      selection of design assets, templates, and photos.
    </p>
    <button class="rounded-md bg-[#DBF226] px-10 py-4">
      Get started for Free!
    </button>
    <p class="font-[700] text-[17px] p-2">No commitment required:</p>
    <div class="space-y-4">
      <!-- Features -->
      <div class="flex items-center gap-3">
        <div class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]">
          <img class="w-4 h-4" src="../assets/icons/tick.png" alt="tick icon" />
        </div>
        <p class="text-[14px]"><b>10 items</b> downloaded per day</p>
      </div>
      <!-- Additional features... -->
    </div>
    <p class="text-green-600 text-[18px] font-[400]">
      Sign up and take advantage of all these benefits to boost your
      creativity!
    </p>
  </div>

  <!-- Pro Plan -->
  <div class="flex-2 md:basis-2/3 rounded-md shadow-lg border-2 p-10">
    <h2 class="text-xl p-1 font-bold">Pro Plan</h2>
    <div class="flex flex-col md:flex-row gap-4 mt-6">
  <!-- Left Section -->
  <div class="flex-1 flex flex-col gap-4">
    <p class="text-base font-light p-1">
      Take your projects to the next level with Thortok’s Pro Plan. Get unlimited downloads, access to premium design assets, exclusive templates, and priority support.
    </p>
    <!-- Monthly Plan -->
    <div class="rounded-md border shadow-md p-6">
      <h3 class="text-lg font-bold text-center">Monthly Plan</h3>
      <div class="text-center mt-4">
        <p class="font-light text-[18px]">USD $<span class="text-[40px] font-semibold">2.99</span>/month</p>
        <button class="mt-4 bg-black text-white px-8 py-2 rounded-md">Get Monthly</button>
      </div>
    </div>
  </div>

  <!-- Right Section -->
  <div class="flex-1 flex flex-col gap-4">
    <div>
      <!-- Features -->
      <p class="font-[700] text-[14px] p-2">Pro Plan includes:</p>
                  <div class="space-y-1 mt-2">
                    <div class="flex items-center gap-3">
                      <div class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]">
                        <img class="w-4 h-4" src="../assets/icons/tick.png" alt="tick icon" />
                      </div>
                      <p class="text-[14px] font-bold">Unlimited downloads</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]">
                        <img class="w-4 h-4" src="../assets/icons/tick.png" alt="tick icon" />
                      </div>
                      <p class="text-[14px] font-bold">
                        Priority access to support
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]">
                        <img class="w-4 h-4" src="../assets/icons/tick.png" alt="tick icon" />
                      </div>
                      <p class="text-[14px] font-bold">
                        Commercial license included
                      </p>
                    </div>
                    </div>
      <!-- Additional Features -->
    </div>

    <!-- Yearly Plan -->
    <div class="rounded-md border shadow-md p-4 mt-1">
      <h3 class="text-lg font-bold text-center">Yearly Plan</h3>
      <div class="flex justify-between">
        <p></p>
        <p class="p-1 rounded-md bg-[#DBF226] text-right text-[14px]"> 2 months free </p>
      </div>
      <div class="text-center">
        <p class="font-light text-[18px]">USD $<span class="text-[40px] font-semibold">35.88</span>/year</p>
        <button class="mt-3 mb-1 bg-black text-white px-10 py-2 rounded-md">Get Yearly</button>
      </div>
    </div>
  </div>
</div>



    <div class="text-center mt-6">
      <p class="text-black">Tax excluded.</p>
      <div class="flex justify-center items-center gap-2 mt-2">
        <p class=""> Payment methods: </p>
          <img class="w-[35px] h-[24px]:" src="/images/Visa.png" alt="Visa">
          <img class="w-[35px] h-[24px]:" src="/images/Amex.png" alt="Amex">
          <img class="w-[35px] h-[24px]:" src="/images/Mastercard.png" alt="Mastercard">
          <img class="w-[35px] h-[24px]:" src="/images/UnionPay.png" alt="UnionPay">
          <img class="w-[35px] h-[24px]:" src="/images/PayPal.png" alt="Paypal">
          <img class="w-[35px] h-[24px]:" src="/images/GooglePay.png" alt="GooglePay">
          <img class="w-[35px] h-[24px]:" src="/images/ApplePay.png" alt="ApplePay">
      </div>
    </div>
  </div>
</div>

    </div>


    <!-- Monetize your Talent -->
    <div class="mt-8">
      <MonetizeTalent />
    </div>

    <!-- Freelance Service Programs -->
    <div class="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 mt-8">
      <div class="w-[570px] h-[350px] max-w-full max-h-[350px] bg-[#EFF1D9] md:w-full md:h-auto">
      <img 
        src="/images/freelance-img.png" 
        alt="freelance-img" 
        class="w-full h-full object-cover md:object-contain"
      >
      </div>

      <div class="p-4 flex-1 items-center ml-4">
        <div class="flex items-center gap-4">
          <img class="w-[30px] h-[30px]" src="/assets/icons/edit.png" alt="edit-icon">
          <p class="text-[36px] font-[700]"> Freelance</p>
        </div>
        <div class="flex items-center gap-4">
          <p class="text-[36px] font-[700]"> Services</p>
          <p class="text-[36px] font-[400]"> Programs</p>
        </div>
        <p class="text-[16px] font-[400]"> Offer Your Services as a Freelance Expert </p>
        <p class="text-[13px] font-[300]">
          Turn your skills into a source of income by offering freelance services directly on our platform. Whether
          you’re a designer, developer, or creative professional, connect with clients looking for your expertise. We’ll
          handle the payments, ensuring a smooth transaction so you can focus on delivering great results. Join the
          Freelance Services Program and start earning by providing high-quality services.
        </p>
        <button class="bg-black text-white mt-4 px-5 py-2 rounded-md gap-2 flex items-center"> Learn more!
          <img class="h-[1] w-[1] size-6 text-white" src="/assets/icons/white-right-arrow.png" alt="right arrow">
        </button>
      </div>
    </div>
    <!-- 6th example -->
    <div class="max-w-screen-lg mx-auto px-4 mt-8">
      <div>
        <p class="text-[36px] font-[700]">
          Quick Answers
        </p>
        <p class="text-[36px] font-[700]">
          to Your Questions
        </p>
      </div>
    
      <div class="flex flex-col md:flex-row mt-4 gap-4">
  <!-- About Thortok -->
  <div class="flex-1 md:basis-1/5 rounded-md  p-2">
    <P class="bg-[#005B52] text-center text-white py-3 rounded-md">About Thortok</P>
    <P class="text-black px-4 py-3 ">Monetization Programs</P>
    <P class="text-black px-4 py-3 ">Participation and Content Creation</P>
    <P class="text-black px-4 py-3 ">Account and Settings</P>
    <P class="text-black px-4 py-3 ">Support and Reporting</P>
  </div>

  <!-- What is thortok + FAQ-->
  <div class="flex-3 md:basis-4/5 rounded-md p-2">
    <Faq />
  </div>
</div>

    </div>
  </div>
</template>

<script setup>
import OffersCards from "~/components/offersCards.vue";
import Faq from "./faq.vue";

const cardsData = [
  {
    img1: "/images/card1-img1.png",
    img2: "/images/card1-img2.png",
    img3: "/images/card1-img3.png",
    title: "Graphics",
    tags: [
      { id: 1, name: "Icons" },
      { id: 2, name: "PSD" },
      { id: 3, name: "Vectors" },
      { id: 4, name: "Templates" },
      { id: 5, name: "Mockups" },
    ],
  },
  {
    img1: "/images/card2-img1.png",
    img2: "/images/card2-img2.png",
    img3: "/images/card2-img3.png",
    title: "Graphics",
    tags: [
      { id: 1, name: "Icons" },
      { id: 2, name: "PSD" },
      { id: 3, name: "Vectors" },
      { id: 4, name: "Templates" },
      { id: 5, name: "Mockups" },
    ],
  },
  {
    img1: "/images/card3-img1.png",
    img2: "/images/card3-img2.png",
    img3: "/images/card3-img3.png",
    title: "Graphics",
    tags: [
      { id: 1, name: "Icons" },
      { id: 2, name: "PSD" },
      { id: 3, name: "Vectors" },
      { id: 4, name: "Templates" },
      { id: 5, name: "Mockups" },
    ],
  },
  {
    img1: "/images/card4-img1.png",
    img2: "/images/card4-img2.png",
    img3: "/images/card4-img3.png",
    title: "Graphics",
    tags: [
      { id: 1, name: "Icons" },
      { id: 2, name: "PSD" },
      { id: 3, name: "Vectors" },
      { id: 4, name: "Templates" },
      { id: 5, name: "Mockups" },
    ],
  },
  {
    img1: "/images/card5-img1.png",
    img2: "/images/card5-img2.png",
    img3: "/images/card5-img3.png",
    title: "Graphics",
    tags: [
      { id: 1, name: "Icons" },
      { id: 2, name: "PSD" },
      { id: 3, name: "Vectors" },
      { id: 4, name: "Templates" },
      { id: 5, name: "Mockups" },
    ],
  },
  {
    img1:'/images/card6-img1.png',
    img2:'/images/card6-img2.png',
    img3:'/images/card6-img3.png',
    title:'Graphics',
    tags:[
      {id:1, name:'Icons'},
      {id:2, name:'PSD'},
      {id:3, name:'Vectors'},
      {id:4, name:'Templates'},
      {id:5, name:'Mockups'},
    ]
  },
];
const featureCards=[
  {
    username:'Ch. Ratana',
    userimage:'/images/user-pro.png',
    cardimage:'/images/cf1.png',
    title:'Sala Blue',
    price:30,
    dicountedPrice:25
  },
  {
    username:'K. Net',
    userimage:'/images/user2.png',
    cardimage:'/images/cf2.png',
    title:'Organic Orange',
    price:40,
    dicountedPrice:35
  },
  {
    username:'Na. Rith',
    userimage:'/images/user3.png',
    cardimage:'/images/cf3.png',
    title:'Geo Art',
    price:45,
    dicountedPrice:40
  },
  {
    username:'L. Sreyka',
    userimage:'/images/user4.png',
    cardimage:'/images/cf4.png',
    title:'Passion Crea',
    price:35,
    dicountedPrice:25
  },
  {
    username:'Ch. Ratana',
    userimage:'/images/user-pro.png',
    cardimage:'/images/cf1.png',
    title:'Sala Blue',
    price:40,
    dicountedPrice:35
  }
]
</script>

<style scoped>
.custom-underline {
  display: inline-block;
  /* Make the element inline-block so the border can apply to it */
  border-bottom: 1px solid #000;
  /* Apply the underline */
  padding-bottom: 8px;
  /* Add some space between the text and the underline */
}
</style>
