<template>
  <v-container
    align="center"
    justify="center"
    style="display: flex"
    class="text-body-1"
  >
    {{ greeting }}
    <span
      v-if="displayColor !== 'nutella'"
      class="ml-1"
      :style="`color:${displayColor}`"
    >
      {{ username }}
    </span>
    <span v-else class="ml-1" style="display: flex">
      {{ firstChar }}
      <span style="color: red">
        {{ restChar }}
      </span>
    </span>
  </v-container>
</template>

<script>
export default {
  name: "UsernameDisplay",
  props: {
    username: String,
    rating: Number,
  },
  computed: {
    displayColor() {
      if (this.rating < 3000) {
        for (let cl of this.color) {
          if (this.rating >= cl.lb && this.rating <= cl.ub) {
            return cl.color;
          }
        }
      } else {
        return "nutella";
      }
    },
    firstChar() {
      return this.username[0];
    },
    restChar() {
      return this.username.slice(1);
    },
  },
  data() {
    return {
      greeting: "Hello, ",
      color: [
        {
          lb: 0,
          ub: 1199,
          color: "gray",
        },
        {
          lb: 1200,
          ub: 1399,
          color: "green",
        },
        {
          lb: 1400,
          ub: 1599,
          color: "cyan",
        },
        {
          lb: 1600,
          ub: 1899,
          color: "blue",
        },
        {
          lb: 1900,
          ub: 2099,
          color: "purple",
        },
        {
          lb: 2100,
          ub: 2299,
          color: "yellow",
        },
        {
          lb: 2300,
          ub: 2399,
          color: "orange",
        },
        {
          lb: 2400,
          ub: 2599,
          color: "#ff1100",
        },
        {
          lb: 2600,
          ub: 2999,
          color: "#eb5a50",
        },
      ],
    };
  },
};
</script>
