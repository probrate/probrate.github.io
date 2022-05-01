<template>
  <div
    class="text-body-1"
  >
    <div
      v-if="displayColor !== 'nutella'"
      :style="`color:${displayColor}`"
    >
      {{ username }}
    </div>
    <div v-else style="display: flex">
      {{ firstChar }}
      <span style="color:red">
        {{ restChar }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsernameCustomDisplay",
  props: {
    username: String,
    site: String
  },
  computed: {
    user() {
      return this.$store.state.users.user;
    },
    firstChar() {
      return this.username[0];
    },
    restChar() {
      return this.username.slice(1);
    },
    displayColor() {
      if (this.site=="AC") {
        return this.atcoderColor(this.user.atcoder.rating);
      } else if (this.site=="CC") {
        return this.codechefColor(this.user.codechef.rating);
      } else if (this.site=="CF") {
        return this.codeforcesColor(this.user.codeforces.rating);
      } else {
        return this.codeforcesColor(this.user.rating);
      }
    }
  },
  methods: {
    atcoderColor(x) {
      if (x < 400) {
        return "gray";
      } else if (x < 800) {
        return "brown";
      } else if (x < 1200) {
        return "green";
      } else if (x < 1600) {
        return "cyan";
      } else if (x < 2000) {
        return "blue";
      } else if (x < 2400) {
        return "yellow";
      } else if (x < 2800) {
        return "orange";
      } else {
        return "red";
      }
    },
    codeforcesColor(x) {
      if (x < 1200) {
        return "gray";
      } else if (x < 1400) {
        return "green";
      } else if (x < 1600) {
        return "cyan";
      } else if (x < 1900) {
        return "blue";
      } else if (x < 2100) {
        return "purple";
      } else if (x < 2300) {
        return "yellow";
      } else if (x < 2400) {
        return "orange";
      } else if (x < 3000) {
        return "red";
      } else {
        return "nutella";
      }
    },
    codechefColor(x) {
      if (x < 1400) {
        return "gray";
      } else if (x < 1600) {
        return "green";
      } else if (x < 1800) {
        return "blue";
      } else if (x < 2000) {
        return "purple";
      } else if (x < 2200) {
        return "yellow";
      } else if (x < 2500) {
        return "orange";
      } else {
        return "red";
      }
    }
  }
};
</script>
