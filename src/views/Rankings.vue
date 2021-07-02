<template>
  <div>
    <v-container>
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
import EntryCard from "@/components/EntryCard.vue";
import draggable from "vuedraggable";
export default {
  components: {
    EntryCard,
    draggable,
  },
  data() {
    return {
      data: null,
    };
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchData");
    },
  },
};
</script>

<style lang="scss" scoped></style>
