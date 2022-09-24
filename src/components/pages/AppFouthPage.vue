<template>
  <div class="contacts">
    <h1 class="contacts__title text-2xl font-semibold my-8 text-center mb-12">Наши контакты</h1>
    <ul class="contacts__list">
      <li class="contacts__item">
        <a class="rounded-3xl shadow-2xl bg-vk" target="_blank" href="https://vk.com/club216115620">VK</a>
      </li>
      <li class="contacts__item">
        <a class="rounded-3xl shadow-2xl bg-gmail" href="mailto:promenad_serdtse_goroda@mail.ru">Почта</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contacts {
  &__item a {
    color: white;
    font-weight: 700;
    font-size: 20px;
    padding: 15px 20px;
    display: block;
    text-align: center;
    margin: 30px 0;
  }
}
</style>