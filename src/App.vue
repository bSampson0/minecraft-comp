<template>
  <v-app>
    <v-main>
      <v-app-bar color="blue darken-4" dark>
        <v-toolbar-title style="letter-spacing: 2px">MINECRAFT</v-toolbar-title>

        <v-spacer> </v-spacer>

        <div class="nav-items">
          <v-btn class="mr-1" text to="/">Submit</v-btn>
          <v-btn class="ml-1" text to="/submissions">Submissions</v-btn>
        </div>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: true,
  }),
};
</script>
