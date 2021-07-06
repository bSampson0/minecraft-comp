<template>
  <v-card>
    <v-img height="200px" width="500px" contain :src="src">
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text>
        Upload Date: {{ uploadDate }} <v-spacer></v-spacer>

        Rank: {{ rank }}
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "EntryCard",
  props: {
    name: String,
    src: String,
    uploadDate: String,
    rank: Number,
  },
};
</script>

<style lang="scss" scoped></style>
