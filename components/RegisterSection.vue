<template>
  <v-row>
    <v-col>
      <div class="d-flex justify-center">
        <v-card>
          <div>
            <v-card-text >
              <v-text-field v-model="email" label="Email"></v-text-field>
              <v-text-field v-model="username" label="Username"></v-text-field>
              <v-text-field v-model="password" @keyup.enter="reg" label="Password" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn @click="reg" block>
                Register
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RegisterSection',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      value: 1
    }
  },
  methods: {
    reg() {
      this.$store.dispatch('users/register', {
        username: this.username,
        password: this.password,
        email: this.email
      });
    }
  }
}
</script>
