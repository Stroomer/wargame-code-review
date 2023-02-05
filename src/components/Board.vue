<template>
  <div>
    <canvas
      ref="board"
      width="320"
      height="180"
      style="border: 1px solid black"
    ></canvas>
    <div v-for="country in countries" :key="country">
      <img :src="'src/assets/images/countries/' + country + '.png'" />
    </div>
  </div>
</template>

<script>
//const imageUrl = new URL("/src/assets/images/logo.svg", import.meta.url).href;
//console.log(imageUrl);

export default {
  data() {
    return {
      context: null,
      //images: ["@images/asia/japan.png", "@images/asia/china.png"],
      //images: ["src/images/asia/japan.png", "src/images/asia/china.png"],
      //continents: ["asia"],    "japan", "china", "ural"
      countries: [
        "indonesia",
        "new_guinea",
        "western_australia",
        "eastern_australia",
      ],
    };
  },
  mounted() {
    this.context = this.$refs.board.getContext("2d");

    //console.log(this.imageUrl);

    //this.context.drawImage(this.imageUrl, 0, 0);

    //console.log(img);

    // this.socket.on("position", (data) => {
    //   this.position = data;
    //   this.context.clearRect(
    //     0,
    //     0,
    //     this.$refs.game.width,
    //     this.$refs.game.height
    //   );
    //   this.context.fillRect(this.position.x, this.position.y, 20, 20);
    // });
    //this.resize();
  },
  methods: {
    onResetBoard() {},
  },
};
</script>

<style scoped></style>
