<template>
  <div>
    <v-card>
      <v-card-title>{{ name }}</v-card-title>
      <v-img height="200px" contain :src="src"></v-img>
      <v-card-text>
        Upload Date: {{ uploadDate }} <v-spacer></v-spacer>

        Rank: {{ rank }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "EntryCard",
  props: {
    name: String,
    src: String,
    uploadDate: Date,
    rank: Number,
  },
};
</script>

<style lang="scss" scoped></style>
