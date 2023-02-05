<template>
  <div>
    <canvas
      ref="board"
      width="320"
      height="180"
      style="border: 1px solid black"
    ></canvas>
    <div v-for="(country, key) in countries" :key="key" class="invisible">
      <img
        :src="'src/assets/images/countries/' + country + '.png'"
        :id="country"
      />
    </div>
    <div>
      <img
        :src="'src/assets/images/borders/borders_and_connections.png'"
        id="borders"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: null,
      //images: ["@images/asia/japan.png", "@images/asia/china.png"],
      //images: ["src/images/asia/japan.png", "src/images/asia/china.png"],
      // OKAY:  "argentina", "brazil", "peru", "venezuela", "alaska", "alberta", "central_america", "eastern_territories", "greenland", "northwest_territories", "ontario", "quebec", "western_territories", "great_britain", "iceland", "northern_europe", "scandinavia", "southern_europe", "ukraine", "western_europe", "congo", "east_africa", "egypt", "madagascar", "north_africa", "south_africa", "eastern_australia", "indonesia",  "new_guinea",  "western_australia", "afghanistan", "china", "india", "irkutsk", "japan", "kamchatka", "middle_east", "mongolia", "siam", "siberia", "ural", "yakutsk"
      countries: [
        "argentina",
        "brazil",
        "peru",
        "venezuela",
        "alaska",
        "alberta",
        "central_america",
        "eastern_territories",
        "greenland",
        "northwest_territories",
        "ontario",
        "quebec",
        "western_territories",
        "great_britain",
        "iceland",
        "northern_europe",
        "scandinavia",
        "southern_europe",
        "ukraine",
        "western_europe",
        "congo",
        "east_africa",
        "egypt",
        "madagascar",
        "north_africa",
        "south_africa",
        "eastern_australia",
        "indonesia",
        "new_guinea",
        "western_australia",
        "afghanistan",
        "china",
        "india",
        "irkutsk",
        "japan",
        "kamchatka",
        "middle_east",
        "mongolia",
        "siam",
        "siberia",
        "ural",
        "yakutsk",
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
  created() {
    this.MY_COUNTRIES = [
      "argentina",
      "brazil",
      "peru",
      "venezuela",
      "alaska",
      "alberta",
      "central_america",
      "eastern_territories",
      "greenland",
      "northwest_territories",
      "ontario",
      "quebec",
      "western_territories",
      "great_britain",
      "iceland",
      "northern_europe",
      "scandinavia",
      "southern_europe",
      "ukraine",
      "western_europe",
      "congo",
      "east_africa",
      "egypt",
      "madagascar",
      "north_africa",
      "south_africa",
      "eastern_australia",
      "indonesia",
      "new_guinea",
      "western_australia",
      "afghanistan",
      "china",
      "india",
      "irkutsk",
      "japan",
      "kamchatka",
      "middle_east",
      "mongolia",
      "siam",
      "siberia",
      "ural",
      "yakutsk",
    ];
  },
  methods: {
    onResetBoard() {},
  },
};
</script>

<style scoped>
.invisible {
  display: none;
}
</style>
