<template>
  <div class="leaderboard">
    <div class="top-section text-center justify-center py-6">
      <h1>LEADERBOARD</h1>
      <span>View the leaderboard to see who is winning each competition.</span>
    </div>
    <template v-if="comps.length > 0">
      <v-container class="pt-12" v-for="(comp, i) in comps" :key="i">
        <h2>{{ comp }} Competition</h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(d, i) in filterSubmissions(comp, data)"
            :key="i"
          >
            <v-card>
              <v-card-title>{{ d.name }}</v-card-title>
              <v-img height="200px" contain :src="d.img"></v-img>
              <v-card-text>
                Upload Date: {{ d.uploadDate }} <v-spacer></v-spacer>

                Likes: {{ d.likes }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-else>
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <p>No contests started yet. Check back soon!</p>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
import { db } from "../plugins/firebase";
export default {
  data() {
    return {
      tab: null,
      comps: [],
      data: [],
    };
  },
  created() {
    this.getComps();
    this.getSubmissions();
  },
  methods: {
    getComps() {
      db.collection("competitions")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.comps.push(doc.id);
          });
        });
    },
    getSubmissions() {
      db.collection("entries")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.data.push(doc.data());
          });
        });
    },
    filterSubmissions(comp, data) {
      const filtered = data.filter((d) => d.comp === comp);
      return filtered;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  background: #195f1f;
}
</style>
