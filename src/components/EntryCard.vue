<template>
  <v-card width="500px" class="mt-2 mb-2" :href="href" target="_blank">
    <v-img contain :src="src" gradient="115deg, rgba(0,0,0,.6), rgba(0,0,0,0)">
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
    href: String,
  },
};
</script>

<style lang="scss" scoped></style>
