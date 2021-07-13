<template>
  <div>
    <h1 class="text-center pt-12">Create Admin</h1>
    <p class="text-center">Use the form below to create a new admin.</p>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-card>
            <v-form ref="admin">
              <v-card-text>
                <v-text-field
                  v-model="email"
                  label="Email"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  outlined
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="createAdmin">Create Admin</v-btn>
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
import { auth } from "@/plugins/firebase";
export default {
  data() {
    return {
      submitted: false,
      email: "",
      password: "",
    };
  },
  methods: {
    createAdmin() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`User ${user} succesfully created.`);
        })
        .catch((error) => {
          console.log(
            `Error Code: ${error.code} - Error Message: ${error.message}`
          );
        });
      this.submitted = true;
      this.$refs.admin.reset();
    },
  },
};
</script>

<style lang="scss" scoped></style>
