<template>
  <div id="home">
    <Hero
      name="Join Competition"
      description="Enter a competition by selecting the one you want to join, then uploading your image."
    />
    <v-container class="fill-height pt-12 mb-12">
      <v-row align="center" justify="center" class="mb-12">
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title> Submission Form </v-card-title>
            <v-card-subtitle>
              Use the form to upload your image.
            </v-card-subtitle>
            <v-divider class="ml-4 mr-4"></v-divider>
            <v-card-text>
              <v-form ref="form">
                <v-select
                  :items="comps"
                  label="Choose Competition"
                  v-model="selected"
                  outlined
                ></v-select>
                <v-text-field
                  outlined
                  label="Name"
                  v-model="name"
                ></v-text-field>
                <v-file-input
                  outlined
                  accept="image/*"
                  label="Upload Image"
                  v-model="img"
                  @change="uploadImage"
                ></v-file-input>
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="green"
                ></v-progress-linear>
              </v-form>
              <v-divider></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                class="ma-2"
                @click="submit()"
                :disabled="uploaded"
                >Submit</v-btn
              >
            </v-card-actions>
          </v-card>
          <div v-if="submitted" class="submitted">
            <p class="text-center">
              Image submitted. Check console if there is an error.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { storage } from "../plugins/firebase";
import { db } from "@/plugins/firebase";
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
  data() {
    return {
      name: "",
      img: null,
      selected: null,
      imgURL: "",
      submitted: false,
      uploaded: true,
      loading: false,
    };
  },
  computed: {
    comps() {
      return this.$store.state.comps;
    },
  },
  created() {
    this.getComps();
  },
  methods: {
    submit() {
      db.collection("competitions")
        .doc(this.selected)
        .collection("entries")
        .doc(this.name)
        .set({
          name: this.name,
          img: this.imgURL,
          uploadDate: new Date().toLocaleDateString("en-US"),
          rank: 35,
        });
      this.$refs.form.reset();
      this.submitted = true;
    },
    uploadImage() {
      const uploadTask = storage.ref().child(this.img.name).put(this.img);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          this.loading = true;
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.imgURL = downloadURL;
            this.uploaded = false;
            this.loading = false;
          });
        }
      );
    },
    getComps() {
      this.$store.dispatch("getComps", this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  background: #195f1f;
}
</style>
