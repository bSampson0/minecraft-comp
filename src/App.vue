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
          <v-btn class="ml-1" text to="/addentry">Join Competition</v-btn>
          <v-btn class="ml-1" text to="/submissions">View Submissions</v-btn>
          <v-btn class="ml-1" text to="/admin" v-if="this.$store.state.user"
            >Admin</v-btn
          >
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
          <v-list-item-group>
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
            <v-list-item to="/admin" v-if="this.$store.state.user">
              <!-- <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon> -->
              <v-list-item-title>Admin</v-list-item-title>
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
      <div class="main-view">
        <router-view />
      </div>
      <v-footer padless class="mt-12" absolute>
        <v-card flat tile width="100%" color="#195f1f">
          <v-card-text>
            <v-row>
              <v-col>Created By: Bnice | 2021 </v-col>
              <v-spacer> </v-spacer>
              <v-col>
                <a
                  href="https://github.com/bSampson0/minecraft-comp"
                  target="_blank"
                >
                  <v-img
                    src="github-logo-white.svg"
                    height="20px"
                    width="20px"
                    class="ml-auto"
                    alt="github logo"
                  ></v-img>
                </a>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-footer>
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
</style>
