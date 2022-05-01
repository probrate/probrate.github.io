<template>
  <v-container v-if="user" fluid>
    <v-card justify="center" class="mx-auto my-8" max-width="600px" >
      <v-card-title class="text-h3">
        User Profile
      </v-card-title>
      <div class="pa-5">
        <v-col>
          <v-row style="display:flex">
            Username: 
            <username-display-custom style="padding-left:10px" :username="user.username" :site="'MAIN'">
            </username-display-custom>
          </v-row>
          <v-row>
            Rating: {{user.rating}}
          </v-row>
          <v-row>
            Total votes: {{user.totalVotes}}
          </v-row>
        </v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header >
              Atcoder: 
              <username-display-custom style="padding-left:10px" :username="user.atcoder.username" :site="'AC'">
              </username-display-custom>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex>
                <v-text-field v-model="atcoderWait" outlined label="Username">
                </v-text-field>
                <v-row class="px-3 pb-3">
                <v-btn block @click="changeAtcoder">
                  Validate
                </v-btn>
                </v-row>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header >
              Codeforces: 
              <username-display-custom style="padding-left:10px" :username="user.codeforces.username" :site="'CF'">
              </username-display-custom>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex>
                <v-text-field v-model="codeforcesWait" outlined label="Username">
                </v-text-field>
                <v-row class="px-3 pb-3">
                <v-btn block @click="changeCodeforces">
                  Validate
                </v-btn>
                </v-row>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header >
              Codechef: 
              <username-display-custom style="padding-left:10px" :username="user.codechef.username" :site="'CC'">
              </username-display-custom>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex>
                <v-text-field v-model="codechefWait" outlined label="Username">
                </v-text-field>
                <v-row class="px-3 pb-3">
                <v-btn block @click="changeCodechef">
                  Validate
                </v-btn>
                </v-row>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card>
  </v-container>
  <v-container v-else>
    <div class="justify-center">
      <v-card-title class="text-h3">
        Please login on the top right.
      </v-card-title>
    </div>
  </v-container>
</template>

<script>
import UsernameDisplay from '~/components/UsernameDisplay.vue';
import UsernameDisplayCustom from '~/components/UsernameDisplayCustom.vue';
// import { mapActions } from 'vuex'

export default {
	components: { UsernameDisplay, UsernameDisplayCustom },
  computed: {
    msgLogs () {
      return this.$store.state.users.messageLogs;
    },
    user() {
      return this.$store.state.users.user;
    }
  },
  data() {
    return {
      atcoderWait: "",
      codeforcesWait: "",
      codechefWait: ""
    }
  },
  methods: {
    changeAtcoder() {
      this.$store.dispatch('users/verify', {
        site: "AC",
        target: this.atcoderWait
      })
    },
    changeCodeforces() {
      this.$store.dispatch('users/verify', {
        site: "CF",
        target: this.codeforcesWait
      })
    },
    changeCodechef() {
      this.$store.dispatch('users/verify', {
        site: "CC",
        target: this.codechefWait
      })
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>