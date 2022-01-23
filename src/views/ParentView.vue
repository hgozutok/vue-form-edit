<template>
  <Parent />
  {{ JSON.stringify(this.$store.state.userM.user.token) }}
  <input
    type="button"
    @click="clickMetoChangeState"
    value="clickMetoChangeState"
  />
</template>

<script>
import Parent from "@/components/child/Parent.vue";

export default {
  name: "ParenView",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    clickMetoChangeState() {
      //this.$store.commit("setUserName", "Hugo");
      this.$store.dispatch("userLogin");
    },
  },
  components: {
    Parent,
  },
  computed: {
    doneTodosCount() {
      return this.$store.state.user.todo.filter((todo) => todo.done).length;
    },
  },
};
</script>

<style>
</style>