<template>
  <header class="flex items-center bg-purple-600 p-4 justify-between">
    <div class="w-5/6">
      <h1 class="text-white text-center uppercase text-2xl font-bold">Сердце города</h1>
    </div>
    <div @click="openBurger($event)" class="tham tham-e-squeeze  flex justify-end tham-w-8">
      <div @click="openBurger($event)" class="tham-box">
        <div @click="openBurger($event)" class="tham-inner bg-white"/>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      burgerOverflow: 1,
    }
  },
  methods: {
    openBurger(e) {
      if (e.target.classList.contains('tham-box')) {
        e.target.parentNode.classList.toggle('tham-active')
        if (this.burgerOverflow % 2 != 0) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      }
      if (e.target.classList.contains('tham-inner')) {
        e.target.parentNode.parentNode.classList.toggle('tham-active')
        if (this.burgerOverflow % 2 != 0) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      } else {
        e.target.classList.toggle('tham-active')
        if (this.burgerOverflow % 2 != 0) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      }
      this.burgerOverflow++
      this.$emit('openBurger')
    }
  }
}
</script>

<style scoped>

</style>