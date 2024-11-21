<template>
  <div class="my-4">
    <!-- <nav class="bg-blue-500 p-4">
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <div class="text-white text-xl font-bold">
      <a href="#">Brand</a>
    </div>
    <div class="hidden md:flex space-x-4">
      <a href="#" class="text-white hover:bg-blue-700 p-2 rounded">Home</a>
      <a href="#" class="text-white hover:bg-blue-700 p-2 rounded">About</a>
      <a href="#" class="text-white hover:bg-blue-700 p-2 rounded">Services</a>
      <a href="#" class="text-white hover:bg-blue-700 p-2 rounded">Contact</a>
    </div>
    <button class="md:hidden text-white">
      ☰
    </button>
  </div>
</nav> -->
    <div class="mt-8">
      <img src="../assets/images/HERO.png" alt="hero.png" />
    </div>

    <div
      class="p-4 sm:p-6 md:p-8 lg:p-3 xl:p-4 mt-1 max-w-screen-xl mx-auto px-4"
    >
      <div class="flex justify-between">
        <div class="left flex items-center gap-2">
          <img
            src="../assets/icons/calendar-icon.png"
            alt="calendericon"
            class="w-3 h-3"
          />
          <h3 class="text-base font-bold">Discover Seasonal Collections</h3>
        </div>
        <div class="right flex gap-2">
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/left-arrow.png"
              alt="left icon"
            />
          </div>
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/right-arrow.png"
              alt="right icon"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-3 max-w-screen-xl mx-auto px-4"
    >
      <div class="bg-gray-200 rounded-lg shadow-lg">
        <img class="h-full" src="../assets/images/S1.png" alt="s1" />
      </div>
      <div class="bg-gray-200 rounded-lg shadow-lg">
        <img class="h-full" src="../assets/images/S2.png" alt="s2" />
      </div>
      <div class="bg-gray-200 rounded-lg shadow-lg">
        <img class="h-full" src="../assets/images/S3.png" alt="s3" />
      </div>
      <div class="bg-gray-200 rounded-lg shadow-lg">
        <img class="h-full" src="../assets/images/S4.png" alt="s4" />
      </div>
      <div class="bg-gray-200 rounded-lg shadow-lg">
        <img class="h-full" src="../assets/images/S5.png" alt="s5" />
      </div>
    </div>

    <!-- 3rd example -->
    <div
      class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 bg-[#EFF1D9] mt-8 max-w-screen-xl mx-auto px-4"
    >
      <h2 class="text-xl font-bold p-1">Discover our current offers</h2>
      <p class="text-base font-light p-1">
        Explore exclusive digital assets from top creators, available for
        purchase now.
      </p>
      <div class="flex justify-between p-1">
        <div>
          <button
            class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1"
          >
            All
          </button>
          <button
            class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1"
          >
            Special offer
          </button>
          <button
            class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1"
          >
            Mockups
          </button>
          <button
            class="rounded-md bg-white border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            Stationery
          </button>
          <button
            class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1"
          >
            Presets
          </button>
          <button
            class="rounded-md bg-black border-2 text-white pl-3 pr-3 pt-1 pb-1"
          >
            Themes
          </button>
        </div>
        <div class="right flex gap-2">
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-white"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/left-arrow.png"
              alt="left icon"
            />
          </div>
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-white"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/right-arrow.png"
              alt="right icon"
            />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-4"
      >
        <div class="flex-1 rounded-lg" v-for="(card, index) in cardsData">
          <OffersCards />
        </div>
      </div>
    </div>

    <!-- 4th example -->
    <div
      class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 mt-8 max-w-screen-xl mx-auto px-4"
    >
      <p class="text-xl font-bold custom-underline">Browse by collections</p>
      <p class="text-base font-light p-1">
        Discover endless possibilities with our curated digital resources,
        perfect for all your creative needs.
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto px-4"
    >
      <div class="flex-1 rounded-lg" v-for="(card, index) in cardsData">
        <Cards :key="index" :card="card" />
      </div>
    </div>

    <div
      class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 mt-8 max-w-screen-xl mx-auto px-4"
    >
      <h2 class="text-xl font-bold p-1">Fonts Collection</h2>
      <p class="text-base font-light p-1">
        Find the perfect fonts to give your designs a unique and professional
        touch.
      </p>
      <div class="flex justify-between p-1">
        <div class="flex gap-2">
          <button
            class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            All
          </button>
          <button
            class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            Serif
          </button>
          <button
            class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            Sans-Serif
          </button>
          <button
            class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            Slab-Serif
          </button>
          <button
            class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            Display
          </button>
          <button
            class="bg-[#DBF226] border-2 text-black rounded-md pl-3 pr-3 pt-1 pb-1"
          >
            Script
          </button>
          <button
            class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            Monospaced-width
          </button>
          <button
            class="rounded-md bg-gray-200 border-2 text-black pl-3 pr-3 pt-1 pb-1"
          >
            Variable
          </button>
        </div>
        <div class="right flex gap-2">
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/left-arrow.png"
              alt="left icon"
            />
          </div>
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-[#EFF1D9]"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/right-arrow.png"
              alt="right icon"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 5th example -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-2">
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner1.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner2.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner3.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner4.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner5.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner6.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner7.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner8.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner9.png"
          alt="s5"
        />
      </div>
      <div class="rounded-lg shadow-lg">
        <img
          class="w-['210px'] h-['140']"
          src="../assets/images/sm-banner10.png"
          alt="s5"
        />
      </div>
    </div>

    <!-- 3rd example -->
    <div
      class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-4 bg-[#EFF1D9] mt-8"
    >
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
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-white"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/left-arrow.png"
              alt="left icon"
            />
          </div>
          <div
            class="rounded-full flex items-center justify-center w-8 h-8 bg-white"
          >
            <img
              class="w-3 h-3"
              src="../assets/icons/right-arrow.png"
              alt="right icon"
            />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-4"
      >
        <div class="flex-1 rounded-lg" v-for="(card, index) in cardsData">
          <OffersCards />
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
      <div class="flex flex-col md:flex-row mt-4">
        <div class="rounded-md shadow-lg border-2 p-10  w-[455px]">
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
            <div class="flex items-center gap-3">
              <div
                class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
              >
                <img
                  class="w-4 h-4"
                  src="../assets/icons/tick.png"
                  alt="tick icon"
                />
              </div>
              <p class="text-[14px]"><b>10 items</b> downloaded per day</p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
              >
                <img
                  class="w-4 h-4"
                  src="../assets/icons/tick.png"
                  alt="tick icon"
                />
              </div>
              <p class="text-[14px]">
                <b>Create and save</b> to a favorites list
              </p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
              >
                <img
                  class="w-4 h-4"
                  src="../assets/icons/tick.png"
                  alt="tick icon"
                />
              </div>
              <p class="text-[14px]">
                <b>Consult download history</b> with licenses
              </p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
              >
                <img
                  class="w-4 h-4"
                  src="../assets/icons/tick.png"
                  alt="tick icon"
                />
              </div>
              <p class="text-[14px]"><b>Follow talent</b> on the platform</p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
              >
                <img
                  class="w-4 h-4"
                  src="../assets/icons/tick.png"
                  alt="tick icon"
                />
              </div>
              <p class="text-[14px]">
                <b>Earn money</b> with the affiliate program
              </p>
            </div>
          </div>
          <p class="text-green-600 text-[18px] font-[400]">
            Sign up and take advantage of all these benefits to boost your
            creativity!
          </p>
        </div>
        <div class="rounded-md shadow-lg border-2">
          <div class="rounded-md p-10">
            <h2 class="text-xl p-1 font-bold">Pro Plan</h2>
            <div class="flex">
              <div class="w-[350px] h-[155px]">
                <p class="text-base font-[300] text-[17px] p-1 h-[155px]">
                  Take your projects to the next level with Thortok’s Pro Plan.
                  Get unlimited downloads, access to premium design assets,
                  exclusive templates, and priority support. Unlock all the
                  tools you need to bring your creative ideas to life
                </p>
                <div class="text-center">
                  <p class="text-base font-[400] text-[18px]">Monthly Plan</p>
                  <div class="flex items-center justify-center">
                    <p class="font-[400] text-[14px] mt-3 mr-1">USD $</p>
                    <p class="font-[500] text-[40px]">2.99</p>
                    <p class="font-[400] text-[14px] mt-3 ml-1">/month</p>
                  </div>
                  <button
                    class="rounded-md bg-black text-white w-[250px] h-[50px] font-[400] text-[18px]"
                  >
                    Get monthly
                  </button>
                </div>
              </div>
              <div class="w-[350px] h-[155px]">
                <div>
                  <p class="font-[700] text-[14px] p-2">Pro Plan includes:</p>
                  <div class="space-y-1">
                    <div class="flex items-center gap-3">
                      <div
                        class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
                      >
                        <img
                          class="w-4 h-4"
                          src="../assets/icons/tick.png"
                          alt="tick icon"
                        />
                      </div>
                      <p class="text-[14px] font-bold">Unlimited downloads</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
                      >
                        <img
                          class="w-4 h-4"
                          src="../assets/icons/tick.png"
                          alt="tick icon"
                        />
                      </div>
                      <p class="text-[14px] font-bold">
                        Priority access to support
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="rounded-full flex items-center justify-center w-6 h-6 bg-[#DBF226]"
                      >
                        <img
                          class="w-4 h-4"
                          src="../assets/icons/tick.png"
                          alt="tick icon"
                        />
                      </div>
                      <p class="text-[14px] font-bold">
                        Commercial license included
                      </p>
                    </div>
                  </div>
                  <div class="text-center mt-10">
                    <p class="text-base font-[400] text-[18px]">Monthly Plan</p>
                    <div class="flex items-center justify-center">
                      <p class="font-[400] text-[14px] mt-3 mr-1">USD $</p>
                      <p class="font-[500] text-[40px]">2.99</p>
                      <p class="font-[400] text-[14px] mt-3 ml-1">/month</p>
                    </div>
                    <button
                      class="rounded-md bg-black text-white w-[250px] h-[50px] font-[400] text-[18px]"
                    >
                      Get monthly
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <p class=""> Tax excluded. </p>
              <div class="flex gap-3">
                <p class=""> Payment methods: </p>
                <img class="w-[35px] h-[24px]:" src="/assets/images/Visa.png" alt="Visa">
                <img class="w-[35px] h-[24px]:" src="/assets/images/Amex.png" alt="Amex">
                <img class="w-[35px] h-[24px]:" src="/assets/images/Mastercard.png" alt="Mastercard">
                <img class="w-[35px] h-[24px]:" src="/assets/images/UnionPay.png" alt="UnionPay">
                <img class="w-[35px] h-[24px]:" src="/assets/images/PayPal.png" alt="Paypal">
                <img class="w-[35px] h-[24px]:" src="/assets/images/GooglePay.png" alt="GooglePay">
                <img class="w-[35px] h-[24px]:" src="/assets/images/ApplePay.png" alt="ApplePay">
              </div>
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
      <div class=" flex flex-col md:flex-row w-[570px] h-[350px] bg-[#EFF1D9]">
        <img src="/assets/images/freelance-img.png" alt="freelance-img">
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
          Turn your skills into a source of income by offering freelance services directly on our platform. Whether you’re a designer, developer, or creative professional, connect with clients looking for your expertise. We’ll handle the payments, ensuring a smooth transaction so you can focus on delivering great results. Join the Freelance Services Program and start earning by providing high-quality services.  
        </p>
        <button class="bg-black text-white mt-4 px-5 py-2 rounded-md gap-2 flex items-center"> Learn more!
        <img class="h-[1] w-[1] size-6 text-white" src="/assets/icons/white-right-arrow.png" alt="right arrow">
        </button>
      </div>
    </div>
    <!-- 6th example -->
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
      <div class="bg-gray-300 p-4">Column 1</div>
      <div class="bg-gray-300 p-4">Column 2</div>
    </div>
  </div>
</template>

<script setup>
import OffersCards from "~/components/offersCards.vue";

const cardsData = [
  {
    img1: "card1-img1.png",
    img2: "card1-img2.png",
    img3: "card1-img3.png",
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
    img1: "card2-img1.png",
    img2: "card2-img2.png",
    img3: "card2-img3.png",
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
    img1: "card3-img1.png",
    img2: "card3-img2.png",
    img3: "card3-img3.png",
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
    img1: "card4-img1.png",
    img2: "card4-img2.png",
    img3: "card4-img3.png",
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
    img1: "card5-img1.png",
    img2: "card5-img2.png",
    img3: "card5-img3.png",
    title: "Graphics",
    tags: [
      { id: 1, name: "Icons" },
      { id: 2, name: "PSD" },
      { id: 3, name: "Vectors" },
      { id: 4, name: "Templates" },
      { id: 5, name: "Mockups" },
    ],
  },
  // {
  //   img1:'card6-img1.png',
  //   img2:'card6-img2.png',
  //   img3:'card6-img3.png',
  //   title:'Graphics',
  //   tags:[
  //     {id:1, name:'Icons'},
  //     {id:2, name:'PSD'},
  //     {id:3, name:'Vectors'},
  //     {id:4, name:'Templates'},
  //     {id:5, name:'Mockups'},
  //   ]
  // },
];
</script>

<style scoped>
.custom-underline {
  display: inline-block; /* Make the element inline-block so the border can apply to it */
  border-bottom: 1px solid #000; /* Apply the underline */
  padding-bottom: 8px; /* Add some space between the text and the underline */
}
</style>
