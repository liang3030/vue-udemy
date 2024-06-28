<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- vue component, could only wrap one element -->
    <!-- transition manipute the wrapped element -->
    <!-- with transaction and provided class, it will remove element after class executed is done,  -->
    <!-- instead of use name attribute/props, enter-to-class could be use for it -->
    <!-- <transition enter-to-class="some-class"> -->
    <transition name="para">
      <p v-if="paraIsVisible">This is sometime visible</p>
    </transition>
    <button @click="toggleParagraph">toggle para</button>
  </div>

  <div class="container" v-if="isClass204">
    <!-- One exception that transaction could have one than one childrend:  -->
    <!-- Only one child will render or add in dom -->
    <transition name="fade-button" mode="out-in">
      <button @click="showUser" v-if="!userVisible">Show</button>
      <button @click="hideUser" v-else>Hide</button>
    </transition>
  </div>

  <div class="container">
    <!-- One exception that transaction could have one than one childrend:  -->
    <!-- Only one child will render or add in dom -->
    <transition name="class-205" @before-enter="beforeEnter" @enter="enter">
      <button @click="showUser" v-if="!userVisible">Show</button>
      <button @click="hideUser" v-else>Hide</button>
    </transition>
  </div>

  <div class="container">
    <transition>
      <button @click="showUser" v-if="!userVisible">Show</button>
      <button @click="hideUser" v-else>Hide</button>
    </transition>
  </div>

  <!-- <base-modal @close="hideDialog" v-if="dialogIsVisible"> -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paraIsVisible: false,
      dialogIsVisible: false,
      animatedBlock: false,
      userVisible: false,
      isClass204: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
      // const block = document.querySelector('.block');
      // block.animate(
      //   [{ transform: 'translateX(0)' }, { transform: 'translateX(20rem)' }],
      //   {
      //     duration: 1000,
      //     iterations: 1,
      //     direction: 'alternate',
      //     fill: 'forwards',
      //   }
      // );
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUser() {
      this.userVisible = true;
    },
    hideUser() {
      this.userVisible = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
    },
    enter(el, done) {
      let round = 0;
      const interval = setInterval(() => {
        round++;
        el.style.opacity = round * 0.1;
        if (round > 10) {
          clearInterval(interval);
          // it will let vue know that the transition is done
          done();
        }
      }, 2000);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;

  /* transition: transform 0.8s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  /* forward: keep the final status of keyframe defined */
  animation: slide-scale 0.3s ease-out forwards;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  /* 70% is time percent of whole animation */
  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

/* start state */
/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* TODO: what does it mean */
/* v-enter-active is default class, it will apply for all element the transition wrapped */
/* .v-enter-active {
  animation: slide-scale 0.3s ease-out;
} */

.para-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-scale 0.3s ease-out;
}

/* end state */
/* .v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-active {
  animation: slide-scale 0.3s ease-out;
} */
/* .v-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

@keyframes modal {
  /* 0% {}

  100% {} */
  /* same as above */

  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
</style>

<!-- animating enter-leave states -->
<!-- *-enter-from, *-enter-to  *-enter-active -->
<!-- *-leave-from, *-leave-to  *-leave-active -->
