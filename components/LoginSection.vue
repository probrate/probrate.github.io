<template>
  <v-row>
    <v-col>
      <div class="d-flex justify-center">
        <v-card>
          <div>
            <v-card-text >
              <v-text-field v-model="username" label="Username"></v-text-field>
              <v-text-field v-model="password" label="Password" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn @click="reg" block>
                Login
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
  name: 'LoginSection',
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
      this.$store.dispatch('users/login', {
        username: this.username,
        password: this.password
      });
    }
  }
}
</script>
