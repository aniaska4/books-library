<template lang="pug">
p Hello world
    h1 to my
    s-Button(
      @click="clickButtonHandler"
    ) my new button
    s-Input() my new Input
</template>

<script>
import { ref } from 'vue';
import { mapComponents  } from '../components/index.js';

export default {
  components: {
    ...mapComponents([
      'Button',
      'Input'
    ])
  },

  setup() {
    function clickButtonHandler() {
      console.log('clickButtonHandler');
    }
    return {
      clickButtonHandler
    };
  }
};
</script>

