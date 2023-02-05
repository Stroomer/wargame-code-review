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
      //test: `@images/test.png`,
    };
  },
  created() {},
  mounted() {
    //console.log(this.state);
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;
}
</style>
