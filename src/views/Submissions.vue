<template>
  <div class="pt-12">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center">Windmill Competition Entries</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" lg="4" v-for="(entry, i) in entries" :key="i">
          <v-card max-height="500px">
            <v-card-title> {{ entry.name }} </v-card-title>
            <v-card-text>
              <v-img height="200px" :src="entry.img" contain></v-img>
            </v-card-text>
            <v-card-actions>
              <span class="ml-3 mb-2">Number of Likes: {{ entry.likes }}</span>
              <v-spacer></v-spacer>
              <v-icon @click="like(i)" class="my-icon mr-4 mb-2"
                >mdi-thumb-up</v-icon
              >
            </v-card-actions>
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
    };
  },
  created() {
    this.getData();
  },
  methods: {
    like(entry) {
      this.entries[entry].likes++;
    },
    getData() {
      db.collection("entries")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.entries.push(doc.data());
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-icon {
  cursor: pointer;
}
</style>
