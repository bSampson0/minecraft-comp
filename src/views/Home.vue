<template>
  <div id="home">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 class="my-title">Minecraft Photo Comp</h1>
          <v-btn class="my-btn mr-1" color="green darken-4" to="/addEntry"
            >Join Contest</v-btn
          >
          <v-btn class="my-btn ml-1" color="green darken-4" to="/submissions"
            >See Submissions</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#home {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.52),
      rgba(0, 0, 0, 0.3)
    ),
    url("../assets/backgrounds/mainBG.jpg");
  background-size: cover;
  background-position: top;
  height: calc(100vh);
  padding-bottom: 100px;
}
</style>
