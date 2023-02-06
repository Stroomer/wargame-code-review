<template>
  <Board />
</template>

<script>
import client from "socket.io-client";
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: { Board },
  data() {
    return {
      state: "init",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
