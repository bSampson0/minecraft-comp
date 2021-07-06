<template>
  <div>
    <Hero />
    <v-container>
      <v-row class="mt-10">
        <v-select
          :items="comps"
          label="Choose Competition"
          v-model="selected"
          @change="getData"
          outlined
        ></v-select>
      </v-row>
      <v-row>
        <draggable
          :list="entries"
          group="entry"
          @start="drag = true"
          @end="drag = false"
        >
          <transition-group>
            <v-col v-for="(entry, i) in entries" :key="i">
              <EntryCard
                :name="entry.name"
                :src="entry.img"
                :uploadDate="entry.uploadDate"
                :rank="i + 1"
              />
            </v-col>
          </transition-group>
        </draggable>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";
import EntryCard from "@/components/EntryCard.vue";
import Hero from "@/components/Hero.vue";
import draggable from "vuedraggable";
export default {
  components: {
    EntryCard,
    draggable,
    Hero,
  },
  data() {
    return {
      data: null,
      selected: null,
      comps: [],
    };
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    },
  },
  created() {
    this.getComps();
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchData", this.selected);
    },
    getComps() {
      db.collection("competitions")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id);
            this.comps.push(doc.id);
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
