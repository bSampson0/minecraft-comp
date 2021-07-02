<template>
  <div id="login">
    <div class="top-section text-center justify-center py-6">
      <h1>ADMIN LOGIN</h1>
      <span>Admins ONLY!</span>
    </div>
    <v-container class="fill-height pt-12">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-form ref="login">
            <v-card>
              <v-card-title>Admin Login</v-card-title>
              <v-card-subtitle
                >Use the form to login. If you do not have a login, contact
                someone who is and have them add you.</v-card-subtitle
              >
              <v-card-text>
                <v-text-field
                  outlined
                  v-model="email"
                  label="Email"
                  color="green lighten-2"
                ></v-text-field>
                <v-text-field
                  outlined
                  v-model="pw"
                  label="Password"
                  type="password"
                  color="green lighten-2"
                ></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <ForgotPasswordDialog class="ml-3" />
                <v-spacer></v-spacer>
                <v-btn @click="login">Login</v-btn>
              </v-card-actions>
              <v-card-text class="text-center">
                <span class="error">{{ message }}</span>
              </v-card-text>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ForgotPasswordDialog from "@/components/ForgotPasswordDialog.vue";
export default {
  components: {
    ForgotPasswordDialog,
  },
  data() {
    return {
      email: "",
      pw: "",
    };
  },
  computed: {
    message: {
      get() {
        return this.$store.state.errorMessage;
      },
      set(val) {
        this.$store.commit("SET_ERRORS", val);
      },
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        pw: this.pw,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  background: #195f1f;
}
</style>
