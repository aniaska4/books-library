<template lang="pug">
component.s-button(
  @click="clickHandler"
) 
  slot
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
      type: {
          type: String,
          default: 'button' // 'link' 'route'
      }
  },

  emits: ['click'],

  setup(props, context) {
    function clickHandler(event) {
      context.emit('click', event);
    }

    return {
      clickHandler
    };
  }
};
</script>

<style scoped>
.s-button{
  height: 150px;
  width: 60px;
  background-color: aquamarine;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.s-button:hover {
  background-color: aqua;
}

</style>