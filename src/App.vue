<template>
  <div class="wrapper relative" v-cloak>
    <app-header  @openBurger="isOpenBurger = !isOpenBurger" class="sticky top-0 z-30"></app-header>
    <app-burger @changePage="selectPage" :is-open-burger="isOpenBurger"></app-burger>

    <app-first-page class="p-3" v-if="selectedPage == 'first'"></app-first-page>

    <app-walk class="p-3" v-if="selectedPage == 'second'"></app-walk>

    <app-second-page class="p-3" v-if="selectedPage == 'third'"></app-second-page>

    <app-third-page class="p-3" v-if="selectedPage == 'fourth'"></app-third-page>

    <app-fouth-page class="p-3" v-if="selectedPage == 'fiveth'"></app-fouth-page>

    <app-reviews-page :reviews="reviews" class="py-5 px-5" v-if="selectedPage == 'reviews'" ></app-reviews-page>
  </div>

</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppBurger from "@/components/AppBurger";
import AppFirstPage from "@/components/pages/AppFirstPage";
import AppSecondPage from "@/components/pages/AppSecondPage";
import AppThirdPage from "@/components/pages/AppThirdPage";
import AppFouthPage from "@/components/pages/AppFouthPage";
import AppReviewsPage from "@/components/pages/AppReviewsPage";
import AppWalk from "@/components/pages/AppWalk";
export default {
  name: 'App',
  data() {
    return {
      isOpenBurger: false,
      selectedPage: "first",
      reviews: {}
    }
  },
  methods: {
    selectPage(number) {
      this.selectedPage = number
    }
  },
  mounted() {
    fetch("https://vue-compete-default-rtdb.europe-west1.firebasedatabase.app/reviews.json")
        .then(data => data.json())
        .then(data => this.reviews = data)

  },
  components: {
    AppHeader,
    AppBurger,
    AppWalk,
    AppFouthPage,
    AppFirstPage,
    AppSecondPage,
    AppThirdPage,
    AppReviewsPage
  }
}
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
.burger__menu {
  right: -400px;
  height: 100vh;
  transition: all ease 0.3s;
}
.burger__active {
  right: 0;
  transform: translateX(0);
  transition: all ease 0.3s;
}

</style>
