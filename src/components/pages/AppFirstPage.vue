<template>
  <div>
    <div class="flex items-center w-3/4 mx-auto">
      <img src="@/assets/1D9C10E2-11A9-48FC-987C-068653BAC226.jpg" alt="">
    </div>
    <p class="my-4">
      Променад-спектакль <span class="font-bold">«Сердце города»</span> - это больше, чем экскурсия. Мы стираем языковой
      барьер -
      слушайте нас на русском и английском языках. Не забудьте поделиться впечатлениями в отзывах. Счастливого пути!
    </p>

    <p class="text-center text-xl my-3 font-medium">Выберете город:</p>
    <div class="flex tabs justify-around">
      <button @click="selectTab('krd')" class="w-5/12 border-b-4 border-purple-600">Краснодар</button>
      <button @click="selectTab('msk')" class="w-5/12 border-b-4 border-purple-600">Москва</button>
    </div>

    <h1 class="text-center text-2xl font-bold mt-10 my-6">Маршрут</h1>
    <ul v-if="currentTab === 'krd'" class="mb-16">
      <li v-for="item in route.krd" v-if="route.krd">
        <div v-if="currentSlideKrd === item.id">
          <img class="mb-4" :src="krdImgLinks[item.id-1]" alt="image">
          <h1 class="text-md font-medium">{{ item.title }}</h1>
          <p class="my-6">Адрес: {{ item.text }}</p>
        </div>
      </li>
      <li class="flex justify-between items-center">
        <button @click="prevSlide('krd')"  class="bg-purple-500 py-2 px-8 rounded-3xl">
          <img src="@/assets/arrow-left2.svg" alt="">
        </button>
        <p class="text-lg">{{currentSlideKrd}}/{{krdImgLinks.length}}</p>
        <button @click="nextSlide('krd')" class="bg-purple-500 py-2 px-8 rounded-3xl">
          <img src="@/assets/arrow-right2.svg" alt="">
        </button>
      </li>
    </ul>
    <ul v-if="currentTab === 'msk'" class="mb-16">
      <li v-for="item in route.msk" v-if="route.msk">
        <div v-if="currentSlideMsk === item.id">
          <img class="mb-4" :src="mskImgLinks[item.id-1]" alt="image">
          <h1 class="text-md font-medium">{{ item.title }}</h1>
          <p class="my-6">Адрес: {{ item.text }}</p>
        </div>
      </li>
      <li class="flex justify-between items-center">
        <button @click="prevSlide('msk')"  class="bg-purple-500 py-2 px-8 rounded-3xl">
          <img src="@/assets/arrow-left2.svg" alt="">
        </button>
        <p class="text-lg">{{currentSlideMsk}}/{{mskImgLinks.length}}</p>
        <button @click="nextSlide('msk')" class="bg-purple-500 py-2 px-8 rounded-3xl">
          <img src="@/assets/arrow-right2.svg" alt="">
        </button>
      </li>
    </ul>
    <p class="text-center text-xl my-6 font-medium">Аудиогид по Краснодару</p>
    <audio  controls class="mx-auto mb-10"
            src="https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2Fheartofcity.mp3?alt=media"></audio>
    <app-reviews></app-reviews>
  </div>
</template>

<script>
import AppReviews from "@/components/AppReviews";

export default {
  props: {

  },
  data() {
    return {
      currentSlideKrd: 1,
      krdImgLinks: [
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_1.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_2.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_3.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_4.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_5.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_6.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_7.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_8.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_9.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_10.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_11.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_12.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_13.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_14.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_15.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/krd%2FimageKrd_16.jpg?alt=media',
      ],
      mskImgLinks: [
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg1.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg2.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg3.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg4.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg5.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg6.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg7.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg8.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg9.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg10.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg11.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg12.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg13.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg14.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg15.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg16.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg17.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg18.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg19.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg20.jpg?alt=media',
          'https://firebasestorage.googleapis.com/v0/b/vue-compete.appspot.com/o/msk%2Fimg21.jpg?alt=media',
      ],
      currentSlideMsk: 1,
      loadedKrd: false,
      route: {},
      currentTab: "krd"
    }
  },
  methods: {
    nextSlide(value) {
      if (value === "krd") {
        if (this.currentSlideKrd < this.krdImgLinks.length) {
          this.currentSlideKrd++
        }
      }
      else {
        if (this.currentSlideMsk < this.mskImgLinks.length) {
          this.currentSlideMsk++
        }
      }
    },
    prevSlide(value) {
      if (value === "krd") {
        if (this.currentSlideKrd > 1) {
          this.currentSlideKrd--
        }
      }
      else {
        if (this.currentSlideMsk > 1) {
          this.currentSlideMsk--
        }
      }
    },
    selectTab(value) {
      this.currentTab = value
    }
  },
  components: {
    AppReviews
  },
  mounted() {
    fetch("https://vue-compete-default-rtdb.europe-west1.firebasedatabase.app/route.json")
        .then(data => data.json())
        .then(data => {
          this.route = data
        })
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">
.btn {
  &__slide {
    padding: 8px 20px;
    border-radius: 20px;
    background-color: #A855F7;
    color: white;
    font-weight: 600;
  }

}

.tabs {
  flex: 1 1 45%;
}
</style>