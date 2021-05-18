<template>
  <div id="home" class="mt-12">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title> Submission Form </v-card-title>
            <v-card-subtitle>
              Use the form to upload your Windmill
            </v-card-subtitle>
            <v-divider class="ml-4 mr-4"></v-divider>
            <v-card-text>
              <v-form ref="form">
                <v-text-field
                  outlined
                  label="Name"
                  v-model="name"
                ></v-text-field>
                <v-file-input
                  outlined
                  accept="image/*"
                  label="Upload Windmill"
                  v-model="img"
                  @change="uploadImage"
                ></v-file-input>
              </v-form>
              <v-divider></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="ma-2" @click="submit()"
                >Submit</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { storage } from "../plugins/firebase";
import { db } from "../plugins/firebase";
export default {
  data() {
    return {
      name: "",
      img: "",
      imgURL: "",
    };
  },
  methods: {
    submit() {
      db.collection("entries").doc(this.name).set({
        name: this.name,
        img: this.imgURL,
        likes: 0,
      });
    },
    async uploadImage() {
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
          });
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
