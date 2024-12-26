<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" >
        <v-card>
          <v-card-title class="text-h5">Authentication</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="Email"
                required
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                outlined
              ></v-text-field>
              <v-btn
                color="primary"
                @click="handleSignUp"
                class="mr-2"
                rounded
              >
                Sign Up
              </v-btn>
              <v-btn
                color="secondary"
                @click="handleLogin"
                class="mr-2"
                rounded
              >
                Log In
              </v-btn>
              <v-btn
                color="red"
                @click="handleLogout"
                rounded
              >
                Log Out
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>


.text-h5 {
  margin-top: 30px;
}

      .v-card {
  padding: 20px;
  margin-top: 50px;
}

</style>

<script>
import { ref } from 'vue';
import { signUp, login, logout } from './supabase'; 

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSignUp = async () => {
      const { error } = await signUp(email.value, password.value);
      if (error) {
        alert(`Sign Up Error: ${error.message}`);
      } else {
        alert('Sign Up Successful');
      }
    };

    const handleLogin = async () => {
      const { error } = await login(email.value, password.value);
      if (error) {
        alert(`Login Error: ${error.message}`);
      } else {
        alert('Login Successful');
      }
    };

    const handleLogout = async () => {
      const { error } = await logout();
      if (error) {
        alert(`Logout Error: ${error.message}`);
      } else {
        alert('Logged Out Successfully');
      }
    };

    return {
      email,
      password,
      handleSignUp,
      handleLogin,
      handleLogout,
    };
  },
};
</script>
