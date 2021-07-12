<template>
  <div class="leaderboard">
    <div class="top-section text-center justify-center py-6">
      <h1>LEADERBOARD</h1>
      <span>View the leaderboard to see who is winning each competition.</span>
    </div>
    <v-container class="pt-10">
      <v-row>
        <v-col>
          <v-select
            :items="comps"
            label="Choose Competition"
            v-model="selected"
            @change="getEntries"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="entry in entries" :key="entry.rank">
          <v-card>
            <v-img :src="entry.img"></v-img>
          </v-card>
        </v-col>
        {{ entries }}
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    comps() {
      return this.$store.state.comps;
    },
    entries() {
      return this.$store.state.entries;
    },
  },
  created() {
    this.getComps();
  },
  methods: {
    getEntries(selected) {
      this.$store.dispatch("getEntries", selected);
    },
    getComps() {
      this.$store.dispatch("getComps");
    },
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  background: #195f1f;
}
</style>
