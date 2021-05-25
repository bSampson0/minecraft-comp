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
                  v-model="competition.compName"
                  label="Competition Name"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="competition.compStart"
                  label="Competition Start Date"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="competition.compEnd"
                  label="Competition End Date"
                  outlined
                ></v-text-field>
                <v-textarea
                  v-model="competition.compDescription"
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
      competition: {
        compName: "",
        compStart: "",
        compEnd: "",
        compDescription: "",
      },
    };
  },
  methods: {
    createComp() {
      db.collection("competitions").doc(this.competition.compName).set({
        start: this.competition.compStart,
        end: this.competition.compEnd,
        desc: this.competition.compDescription,
        entries: {},
      });
      this.$refs.comp.reset();
      this.submitted = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
