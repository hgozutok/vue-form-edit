<template>
  <Child @clicked="handleClick" />

  PArent:{{ name }}

  <input type="text" v-model="name" placeholder="Enter your message to child" />
  <button @click="handleClick">Click Me</button>
</template>

<script>
import Child from "@/components/child/child.vue";
export default {
  name: "Parent",
  data() {
    return {
      name: "",
    };
  },
  components: {
    Child,
  },
  methods: {
    handleClick(name) {
      this.name = name;
    },
  },
};
</script>

<style>
</style>