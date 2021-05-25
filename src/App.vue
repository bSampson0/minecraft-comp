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
          <!-- <v-btn class="mr-1" text to="/">Submit</v-btn> -->
          <v-btn class="ml-1" text to="/createcomp">Create Competition</v-btn>
          <v-btn class="ml-1" text to="/addentry">Join Competition</v-btn>
          <v-btn class="ml-1" text to="/submissions">Submissions</v-btn>
          <v-btn v-if="!this.$store.state.user" class="ml-1" text to="/login"
            >Login</v-btn
          >
          <v-btn v-if="this.$store.state.user" class="ml-1" text @click="logout"
            >Logout</v-btn
          >
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
            <v-list-item to="/createcomp">
              <!-- <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon> -->
              <v-list-item-title>Create Competition</v-list-item-title>
            </v-list-item>

            <v-list-item to="/addentry">
              <!-- <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon> -->
              <v-list-item-title>Join Competition</v-list-item-title>
            </v-list-item>

            <v-list-item to="/submissions">
              <!-- <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon> -->
              <v-list-item-title>Submissions</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-list-item to="/login" v-if="!this.$store.state.user">
            <!-- <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon> -->
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout" v-if="this.$store.state.user">
            <!-- <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon> -->
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
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
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
#main {
  font-family: "VT323", monospace;
  font-size: 1.5em;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
