<template>
  <div id="app">
    <superTable></superTable>
  </div>
</template>

<script>
import superTable from './components/superTable.vue';
export default {
  name: 'App',
  components: {
    superTable,
  },
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: rgb(36, 35, 35);
}

body::-webkit-scrollbar
{
	width: 6px;
	background-color: rgb(36, 35, 35);
}

body::-webkit-scrollbar-thumb
{
	background-color: #000000;
}
#app {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(36, 35, 35);
  color: white;
}
</style>

