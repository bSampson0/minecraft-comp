<template>
  <div class="leaderboard">
    <div class="top-section text-center justify-center py-6">
      <h1>LEADERBOARD</h1>
    </div>
    <v-tabs grow dark background-color="green darken-3" color="white">
      <v-tabs-slider color="green lighten-3"></v-tabs-slider>
      <v-tab v-for="(comp, i) in comps" :key="i">
        {{ comp }}
      </v-tab>
    </v-tabs>
    <v-container>
      <v-row>
        <v-col>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(comp, i) in comps" :key="i">
              <v-card flat v-for="entry in comp.entries" :key="entry.name">
                <v-card-text>{{ entry.name }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
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
  },
  methods: {
    getComps() {
      db.collection("competitions")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id);
            this.comps.push(doc.id);
            this.data.push(doc.data());
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  background: #195f1f;
}
</style>
