<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-if="user" style="display: flex">
        <username-display :username="user.username" :rating="user.rating">
        </username-display>
        <v-btn icon @click.stop="logout">
          <v-icon>mdi-exit-run</v-icon>
        </v-btn>
      </div>
      <div v-else style="display: flex">
        <v-btn icon @click.stop="rightDrawer = !rightDrawer; tab = 0;">
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn icon @click.stop="rightDrawer = !rightDrawer; tab = 1;">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-container width="100%">
        <v-tabs v-model="tab" background-color="transparent" grow>
          <v-tab>Login</v-tab>
          <v-tab>Register</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <login-section>
            </login-section>
          </v-tab-item>
          <v-tab-item>
            <register-section>
            </register-section>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
      <login-register-section>
      </login-register-section>
    </v-navigation-drawer>
    <v-snackbar :value="messages.length > 0" absolute bottom outlined>
      <div
        v-for="(message, index) in messages.slice().reverse()"
        :key="index"
        class="ma-1"
        outlined
        height="30px"
      >
        <center>{{ message }}</center>
      </div>
    </v-snackbar>
  </v-app>
</template>

<script>
import VSnackbars from "v-snackbars";
import LoginSection from "../components/LoginSection.vue";
import UsernameDisplay from "~/components/UsernameDisplay.vue";
import LoginRegisterSection from '~/components/LoginRegisterSection.vue';
import RegisterSection from '~/components/RegisterSection.vue';
export default {
  name: "DefaultLayout",
  components: {
    "v-snackbars": VSnackbars,
    LoginSection,
    UsernameDisplay,
    LoginRegisterSection,
    RegisterSection,
  },
  data() {
    return {
      object: [],
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      loginPanel: true,
      title: "Probrate",
      tab:null
    };
  },
  computed: {
    messages() {
      return this.$store.state.users.messageLogs;
    },
    user() {
      return this.$store.state.users.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('users/logout');
    }
  },
  mounted() {
    if (!this.user)
      this.$store.dispatch('users/fetchUser');
  },
  watch: {
    user(xx) {
      if (xx) {
        this.rightDrawer = false;
      }
    }
  }
};
</script>
