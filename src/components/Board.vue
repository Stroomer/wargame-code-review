<template>
  <div ref="container">
    <!-- <canvas
      ref="board"
      width="320"
      height="180"
      style="border: 1px solid black"
    ></canvas> -->
    <img
      v-for="(country, key) in countries"
      :key="key"
      :src="'src/assets/images/countries/' + country + '.png'"
      :id="country"
      class="country image"
      v-show="
        (country !== attacker && country !== defender) ||
        (country === attacker && attackerVisible) ||
        (country === defender && defenderVisible)
      "
    />
    <img
      :src="'src/assets/images/borders/borders_and_connections.png'"
      id="borders"
      class="border image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: null,
      attacker: null,
      attackerVisible: true,
      defender: null,
      defenderVisible: true,
      isVisible: true,
    };
  },
  mounted() {
    //this.context = this.$refs.board.getContext("2d");

    this.$refs.container.style.backgroundColor = "hotpink";

    console.log("MOUNTED");
    //console.log(this.$refs.container);
    // for (let i = 0; i < this.countries.length; i++) {
    //   const country = document;
    // }

    // this.context.drawImage(this.imageUrl, 0, 0);

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

    this.setAttacker("brazil");
    this.setDefender("north_africa");
  },
  methods: {
    setAttacker(country) {
      this.attacker = country;
      this.attackerIntervalID = setInterval(() => {
        this.attackerVisible = !this.attackerVisible;
      }, 250);
      console.log(country);
    },
    setDefender(country) {
      this.defender = country;
      this.defenderIntervalID = setInterval(() => {
        this.defenderVisible = !this.defenderVisible;
      }, 250);
      console.log(country);
    },
  },
  computed() {
    // checkVisibility(country) {
    //   console.log("country: " + country);
    //   console.log("attacker: " + this.attacker);
    //   if (country === attacker) {
    //     return this.attackerVisible;
    //   } else if (country === defender) {
    //     return this.defenderVisible;
    //   } else {
    //     return true;
    //   }
    // }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: pink;
}

.country {
  position: absolute;
  z-index: 2;
}
.border {
  position: absolute;
  z-index: 3;
}
.image {
  image-rendering: pixelated;
  margin: 0 auto;
}
</style>
