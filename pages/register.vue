<template>
  <v-row>
    <v-col>
      <v-container class="d-flex justify-center">
        <v-card>
          <div class="text-h3 pa-4">
            Register
          </div>
          <div>
            <v-card-text >
              <v-text-field v-model="email" label="Email"></v-text-field>
              <v-text-field v-model="username" label="Username"></v-text-field>
              <v-text-field v-model="password" label="Password" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn @click="reg">
                Register
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      value: 0
    }
  },
  methods: {
    reg() {
      this.$store.dispatch('users/register', {
        username: this.username,
        password: this.password
      });
    }
  }
}
</script>
