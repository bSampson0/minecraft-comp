<template>
  <div id="admin">
    <div class="top-section text-center justify-center py-6">
      <h1>ADMIN AREA</h1>
      <span>Create and vote on competitions.</span>
    </div>
    <v-container class="pt-12">
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn class="mr-1" to="createComp">Create Competition</v-btn>
          <v-btn class="ml-1" to="rankings">Vote on Competition</v-btn>
          <v-btn class="ml-1" to="createadmin">New Admin</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data() {},
    };
  },
  computed: {
    userName() {
      return this.$store.state.user.displayName;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  background: #195f1f;
}
</style>
