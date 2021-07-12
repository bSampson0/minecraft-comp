<template>
  <div class="pt-12">
    <v-container>
      <v-row>
        <h1>Past Submissions</h1>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            :items="comps"
            label="Choose Competition"
            v-model="selected"
            @change="getData"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4" v-for="(entry, i) in entries" :key="i">
          <v-card :href="entry.img" target="_blank">
            <v-card-title>{{ entry.name }}</v-card-title>
            <v-img :src="entry.img" contain height="200px"></v-img>
            <v-card-text> Date Submitted: {{ entry.uploadDate }} </v-card-text>
          </v-card>
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
      entries: [],
      selected: null,
    };
  },
  computed: {
    comps() {
      return this.$store.state.comps;
    },
  },
  created() {
    this.getComps();
  },
  methods: {
    like(entry) {
      this.entries[entry].likes++;
    },
    async getData() {
      this.entries.length = 0;
      let collection = db.collection(
        "competitions/" + this.selected + "/entries"
      );
      let documents = await collection.get();
      documents.forEach((doc) => {
        this.entries.push(doc.data());
        console.log(doc.data());
      });
    },
    getComps() {
      this.$store.dispatch("getComps");
    },
  },
};
</script>

<style lang="scss" scoped>
.my-icon {
  cursor: pointer;
}
</style>
