<template>
  <div>
    <app-reviews></app-reviews>
    <h1 class="text-center font-semibold text-3xl mb-10 mt-4">Отзывы</h1>
    <ul>
      <li v-for="item in reviews" class="flex flex-col my-6">
        <div class="flex">
          <div class="review__logo mr-4">
            <svg class="border-4 w-14 p-2 rounded-full" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 32 32">
              <path class=" p-4"
                    d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
            </svg>
          </div>
          <div class="wrapper flex flex-col">
            <h3 class="text-xl">{{item.name}}</h3>
            <div class="rating mb-6 flex relative">
              <div class="rating__items">
                <input disabled v-model="item.rating" class="rating__item" type="radio" :name="item.name + Date.now()"
                       id="rating__5"
                       value="5">
                <label class="rating__label" for="rating__5"></label>
                <input disabled v-model="item.rating" class="rating__item" type="radio" :name="item.name + Date.now()"
                       id="rating__4"
                       value="4">
                <label class="rating__label" for="rating__4"></label>
                <input disabled v-model="item.rating" class="rating__item" type="radio" :name="item.name + Date.now()"
                       id="rating__3"
                       value="3">
                <label class="rating__label" for="rating__3"></label>
                <input disabled v-model="item.rating" class="rating__item" type="radio" :name="item.name + Date.now()"
                       id="rating__2"
                       value="2">
                <label class="rating__label" for="rating__2"></label>
                <input disabled v-model="item.rating" class="rating__item" type="radio" :name="item.name + Date.now()"
                       id="rating__1"
                       value="1">
                <label class="rating__label" for="rating__1"></label>
              </div>

            </div>
          </div>
        </div>
        <p class="text-xl font-thin" v-if="item.review != ''">
          {{item.review}}
        </p>
      </li>

    </ul>
  </div>
</template>

<script>
import AppReviews from "@/components/AppReviews";
export default {
  props: {
    reviews: {
      required: true
    }
  },
  components: {
    AppReviews
  }
}
</script>

<style scoped lang="scss">
.rating {
  position: relative;
  font-size: 20px;
  color: purple;
  display: inline-block;
  &__empty {
    animation-name: emptyRating;
    animation-duration: 0.5s;

  }

  &::before {
    display: block;
    content: '★★★★★';
  }

  &__items {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;
  }

  &__item {
    position: absolute;
    width: 0%;
    height: 0%;
    opacity: 0;
    visibility: hidden;
    top: 0;
    left: 0;
  }

  &__item:checked, &__item:checked ~ &__label {
    color: gold;
  }

  &__label {
    flex: 0 0 20%;
    height: 100%;
    cursor: pointer;
    color: #888;

    &:before {
      content: "★";
      display: block;
      transition: 0.3s ease color;
    }

    &:hover, &:hover ~ &,
    &:checked ~ &:hover {
      color: gold;
    }

  }

}


</style>