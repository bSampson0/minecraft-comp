<template>
  <div>
    <Hero
      name="Past Submissions"
      description="Choose a competition to see
        past submissions and rankings."
    />
    <v-container class="pt-10">
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
          <EntryCard
            :href="entry.img"
            :name="entry.name"
            :src="entry.img"
            :uploadDate="entry.uploadDate"
            :rank="parseInt(entry.rank)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EntryCard from "@/components/EntryCard.vue";
import Hero from "@/components/Hero.vue";
export default {
  components: {
    EntryCard,
    Hero,
  },
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
    this.$store.commit("CLEAR_ENTRIES");
  },
  methods: {
    getData() {
      this.$store.dispatch("getEntries", this.selected);
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
