<template>
<div>
  <v-btn @click="proc">
    CLICK ME
  </v-btn>
  <div>
    {{todos}}
  </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.users.messageLogs;
    }
  },
  methods: {
    proc() {
      console.log(this.$store.commit('users/fetchUserLocal'));
      // this.$store.dispatch('todos/register',{
      //   username: "futa",
      //   password: "nari"
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