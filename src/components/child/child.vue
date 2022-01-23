<template>
  <input
    type="text"
    v-model="name"
    placeholder="Enter your message"
    class="
      px-3
      py-3
      placeholder-blueGray-300
      text-blueGray-600
      relative
      bg-white
      rounded
      text-sm
      border-0
      shadow
      outline-none
      focus:outline-none focus:ring
      w-full
    "
  />
  <p>{{ name }}</p>
  <input type="button" value="Click me" @click="clickMe" />
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      name: "name",
    };
  },
  methods: {
    clickMe() {
      this.$emit("clicked", this.name);
      this.name = "Hello World";
    },
    // emits: [clickMe],
  },
};
</script>

<style>
</style>