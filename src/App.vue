<template>
  <NewComponent/>
  <Menu/>
</template>

<script>
import NewComponent from './components/NewComponent.vue';
import Menu from './modules/menu/Menu.vue';

export default {
  name: 'App',
  components: {
    NewComponent,
    Menu
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
