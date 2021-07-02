<template>
  <div>
    <h1 class="text-center pt-12">Create Competition</h1>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-card>
            <v-form ref="comp">
              <v-card-text>
                <v-text-field
                  v-model="compName"
                  label="Competition Name"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="compStart"
                  label="Competition Start Date"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="compEnd"
                  label="Competition End Date"
                  outlined
                ></v-text-field>
                <v-textarea
                  v-model="compDescription"
                  label="Competition Description"
                  outlined
                ></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="createComp">Create Competition</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
          <div class="submitted text-center" v-if="submitted">
            Successfully created.
          </div>
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
      compName: "",
      compStart: "",
      compEnd: "",
      compDescription: "",
    };
  },
  methods: {
    createComp() {
      db.collection("competitions").doc(this.compName).set({
        start: this.compStart,
        end: this.compEnd,
        desc: this.compDescription,
      });
      this.$refs.comp.reset();
      this.submitted = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
