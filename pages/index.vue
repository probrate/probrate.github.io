<template>
  <v-row justify="center" align="center">
    <v-col>
      {{user}}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      
    }
  },
  computed: {
    user() {
      return this.$store.state.users.user;
    }
  }
}
</script>