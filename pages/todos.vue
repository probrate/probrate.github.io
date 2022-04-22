<template>
<div>
  <v-btn @click="proc">
    CLICK ME
  </v-btn>
  <div>
    {{todos}}
  </div>
  <div>
    {{msgLogs}}
  </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.users.voted;
    },
    msgLogs () {
      return this.$store.state.users.messageLogs;
    }
  },
  methods: {
    proc() {
      // console.log(this.$store.commit('users/getVote'));
      this.$store.dispatch('users/getVotedList',{
        username: "pol"
      });
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>