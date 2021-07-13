<template>
  <div>
    <Hero
      name="Rankings"
      description="Choose the rankings for each competition."
    />
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
      <v-row class="mt-0 pt-0">
        <v-btn
          width="100%"
          @click="saveRankings"
          color="blue"
          :disabled="!ifChange"
          >Save</v-btn
        >
      </v-row>

      <v-row v-if="entries.length != 0" justify="center">
        <v-col cols="12" md="6">
          <h1>Winner</h1>
          <EntryCard
            :name="entries[0].name"
            :src="entries[0].img"
            :uploadDate="entries[0].uploadDate"
            :rank="parseInt('1')"
          />
        </v-col>
        <v-col cols="12" md="6">
          <h2>Set the rankings</h2>
          <p>Drag winner to top.</p>
          <draggable :list="entries" @change="updateRanks">
            <span cols="12" v-for="(entry, i) in entries" :key="i">
              <EntryCard
                :name="entry.name"
                :src="entry.img"
                :uploadDate="entry.uploadDate"
                :rank="entry.rank"
              />
            </span>
          </draggable>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EntryCard from "@/components/EntryCard.vue";
import Hero from "@/components/Hero.vue";
import draggable from "vuedraggable";
import { db } from "@/plugins/firebase";
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
      ifChange: false,
    };
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    },
    comps() {
      return this.$store.state.comps;
    },
  },
  created() {
    this.getComps();
  },
  methods: {
    getData() {
      this.$store.dispatch("getEntries", this.selected);
    },
    getComps() {
      this.$store.dispatch("getComps");
    },
    updateRanks() {
      console.log("updating ranks.");
      this.ifChange = true;
      console.log(this.ifChange);
    },
    saveRankings() {
      this.entries.forEach((entry, i) => {
        console.log(entry);
        db.collection("competitions")
          .doc(this.selected)
          .collection("entries")
          .doc(entry.name)
          .update({
            // eslint-disable-next-line prettier/prettier
            "rank": `${i + 1}`,
          });
      });
      this.ifChange = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
