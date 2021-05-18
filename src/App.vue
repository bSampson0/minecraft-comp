<template>
  <v-app>
    <v-main id="main">
      <v-app-bar color="green darken-4" dark>
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
        <v-toolbar-title style="letter-spacing: 2px"
          >MINECRAFT PHOTO COMPETITION</v-toolbar-title
        >

        <v-spacer> </v-spacer>

        <div class="nav-items d-none d-md-block">
          <v-btn class="mr-1" text to="/">Submit</v-btn>
          <v-btn class="ml-1" text to="/submissions">Submissions</v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Minecraft Competition
            </v-list-item-title>
            <v-list-item-subtitle>
              Submit your best photo!
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item link to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Submit</v-list-item-title>
            </v-list-item>

            <v-list-item to="/submissions">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Submissions</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
#main {
  font-family: "VT323", monospace;
  font-size: 1.5em;
}
</style>
