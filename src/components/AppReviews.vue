<template>
  <form :class="{fade: sendReview}" action="#" class="relative z-10">
    <h3 class="text-2xl mb-5 font-medium">Оставить отзыв</h3>
    <input v-model.trim="name" id="name" class="mb-6 block text-lg border-2 input__name" type="text"
           placeholder="Введите свое имя">

    <p class="text-lg">Уже прошли променад-спектакль? Оцените и поделитесь впечатлениями в отзывах!</p>
    <div class="rating mb-6 flex relative">
      <div class="rating__items">
        <input v-model="rating" class="rating__item" type="radio" name="rating" id="rating__5" value="5">
        <label class="rating__label" for="rating__5"></label>
        <input v-model="rating" class="rating__item" type="radio" name="rating" id="rating__4" value="4">
        <label class="rating__label" for="rating__4"></label>
        <input v-model="rating" class="rating__item" type="radio" name="rating" id="rating__3" value="3">
        <label class="rating__label" for="rating__3"></label>
        <input v-model="rating" class="rating__item" type="radio" name="rating" id="rating__2" value="2">
        <label class="rating__label" for="rating__2"></label>
        <input v-model="rating" class="rating__item" type="radio" name="rating" id="rating__1" value="1">
        <label class="rating__label" for="rating__1"></label>
      </div>

    </div>
    <div class="mb-6">
      <textarea v-model.trim="review" name="text-review" placeholder="Напишите отзыв (необязательно)" maxlength="120"
                cols="25"
                class="text-lg"
                rows="5"></textarea>
    </div>
    <button @click.prevent.stop="createNewReview"
            class="text-white text-xl py-3 px-6 bg-purple-500 border-2 rounded-2xl">
      Отправить</button>
      <h1 :class="{modal__thank: sendReview}" class="py-4 modal text-3xl absolute top-1/3 left-1/4">Спасибо!</h1>
  </form>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      name: '',
      review: '',
      sendReview: false
    }
  },
  methods: {
    createNewReview() {
       if (this.rating == 0) {
         document.querySelector('.rating').classList.add('rating__empty')
         setTimeout(()=> document.querySelector('.rating').classList.remove('rating__empty'), 500
         )
       }
      if (this.name == "") {
        document.querySelector('.input__name').classList.add('input__empty')
        setTimeout(() => document.querySelector('.input__name').classList.remove('input__empty'), 500
        )
      }
      if (this.rating != 0 && this.name != "") {
        const newReview = {
          name: this.name,
          rating: this.rating,
          review: this.review
        }
        fetch("https://vue-compete-default-rtdb.europe-west1.firebasedatabase.app/reviews.json", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newReview)

        })
            .finally(() => {
              this.name = ""
              this.review = ""
              this.rating = 0;
              this.sendReview = true;
              setTimeout(() => this.sendReview = false, 2000)
            })

      }

     }

    }


}
</script>

<style scoped lang="scss">
@keyframes emptyInput {
  0% {
    border: 1px solid red;
    left: -10px;
  }
  20% {
    left: 10px;
    border: 1px solid red;

  }
  40% {
    left: -10px;
    border: 1px solid red;

  }
  60% {
    left: 10px;
    border: 1px solid red;

  }
  80% {
    left: -10px;
    border: 1px solid red;


  }
  100% {
    left: 10px;
    border: 1px solid red;

  }
}
@keyframes ani {
  0% {
    z-index: -10;
    opacity: 0.3;
  }
  100% {
    z-index: 30;
    opacity: 1;
  }
}
@keyframes emptyRating {
  0% {
    left: -10px;
  }
  20% {
    left: 10px;
  }
  40% {
    left: -10px;

  }
  60% {
    left: 10px;
  }
  80% {
    left: -10px;

  }
  100% {
    left: 10px;
  }
}
.fade {
  opacity: 0.9;
}
.modal {
  opacity: 0;
  z-index: -10;
  &__thank {
    animation: ani 2s forwards;
  }
}
textarea {
  resize: none;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 10px;
}

.input {
  &__empty {
    animation-duration: 0.5s;
    animation-name: emptyInput;
    position: relative;
  }
  &__name {
    border: 1px solid #888;
    border-radius: 10px;

    padding: 5px 15px;
  }
}

.rating {
  position: relative;
  font-size: 40px;
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