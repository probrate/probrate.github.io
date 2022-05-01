<template>
<div>
  <v-btn @click="proc">
    CLICK ME
  </v-btn>
  <LoginSection>
  </LoginSection>
  <div>
    {{msgLogs}}
  </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  computed: {
    msgLogs () {
      return this.$store.state.users.messageLogs;
    }
  },
  methods: {
    proc() {
      // console.log(this.$store.commit('users/getVote'));
      // this.$store.dispatch('users/login',{
      //   username: "pol",
      //   password: "pol"
      // });
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>