<template>
  <div :class="{burger__active: isOpenBurger}" class="bg-purple-500 sm:w-80 z-20 fixed top-0 burger__menu">
    <ul class="py-32 px-6">
      <li @click="selectPage('first')" class="mb-10 text-white flex items-center  text-center text-lg font-bold">
        <button class="flex" href="#"><img src="@/assets/home3.svg" class="mr-6" alt="">Главная</button>
      </li>
      <li @click="selectPage('second')"
          class="mb-10 to-left text-white flex items-center text-center text-lg font-bold">
        <button class="flex" href="#"><img src="@/assets/directions_walk.svg" class="mr-6" alt="">Куда
          сходить</button>
      </li>
      <li @click="selectPage('third')" class="mb-10 text-white flex items-center text-center text-lg font-bold">
        <button class="flex" href="#"><img src="@/assets/spoon-knife.svg" class="mr-6" alt="">
          Где покушать
        </button>
      </li>
      <li @click="selectPage('fourth')"
          class="mb-10 to-left text-white flex items-center text-center text-lg font-bold">
        <button class="flex" href="#"><img src="@/assets/not-hearing.svg" class="mr-6" alt="">
          Для слабослышащих
        </button>
      </li>
      <li @click="selectPage('fiveth')" class="mb-10 text-white flex items-center text-center text-lg font-bold">
        <button class="flex" href="#"><img src="@/assets/phone.svg" class="mr-6" alt="">
          Наши контакты
        </button>
      </li>
      <li @click="selectPage('reviews')" class="mb-10 text-white flex items-center text-center text-lg font-bold">
        <button class="flex" href="#"><img src="@/assets/bubbles.svg" class="mr-6" alt="">
          Отзывы
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isOpenBurger: Boolean
  },
  methods: {
    selectPage(number) {
      this.$emit('changePage', number)

    }
  }
}
</script>

<style scoped lang="scss">
.to-left {
  transform: translateX(-6px);
}
</style>