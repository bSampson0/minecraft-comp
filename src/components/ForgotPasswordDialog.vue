<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text dark v-bind="attrs" v-on="on"> Forgot Password </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Forgot Password</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="fPasswordForm"></v-form>
              <v-text-field
                outlined
                v-model="emailf"
                label="Email"
                color="green lighten-2"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="forgotPassword(emailf)">
                Send reset password link.
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      emailf: "",
      successMessage: "Password reset email has been sent. Check your email.",
    };
  },
  methods: {
    forgotPassword(email) {
      try {
        this.$store.dispatch("forgotPassword", email);
        this.$store.commit("SET_ERRORS", this.successMessage);
        this.dialog = false;
        this.$ref.fPasswordForm.reset();
      } catch (err) {
        console.log(err.message);
        this.dialog = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
