<template>
  <div class="container">
    <canvas
      ref="board"
      width="320"
      height="180"
      class="image"
      style="border: 1px solid black"
    ></canvas>
    <img
      v-for="(country, key) in countries"
      ref="country"
      :key="key"
      :src="'src/assets/images/countries/' + country + '.png'"
      class="country image"
      v-show="false"
    />
    <img
      :src="'src/assets/images/borders/borders.png'"
      ref="borders"
      class="border image"
      v-show="false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: null,
    };
  },
  mounted() {
    const countries = this.getCountries();

    this.context = this.$refs.board.getContext("2d");

    this.draw(countries);

    console.log("MOUNTED");

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
  },
  methods: {
    getCountries() {
      const countries = [];
      const refs = this.$refs.country.length;
      for (let i = 0; i < refs; i++) {
        const img = this.$refs.country[i];
        const file = img.src.split("/")[7];
        const name = file.substr(0, file.length - 4);
        countries[name] = img;
      }
      return countries;
    },

    draw(countries) {
      Object.entries(countries).forEach(([key, value]) => {
        this.context.drawImage(value, 0, 0);
      });
      this.context.drawImage(this.$refs.borders, 0, 0);
    },

    // setAttacker(country) {
    //   this.attacker = country;
    //   this.attackerIntervalID = setInterval(() => {
    //     this.attackerVisible = !this.attackerVisible;
    //   }, 250);
    //   console.log(country);
    // },
    // setDefender(country) {
    //   this.defender = country;
    //   this.defenderIntervalID = setInterval(() => {
    //     this.defenderVisible = !this.defenderVisible;
    //   }, 250);
    //   console.log(country);
    // },
  },
  computed() {},
};
</script>

<style scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgb(191, 228, 233);
  text-align: center;
  overflow: hidden;
}

.country {
  z-index: 2;
}
.border {
  z-index: 3;
}
.image {
  position: absolute;
  image-rendering: pixelated;
  margin: 0 auto;
  transform: translateX(-50%);
  height: 100%;
}
</style>
