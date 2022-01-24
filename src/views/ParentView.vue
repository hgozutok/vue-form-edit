<template>
  <Parent />
  {{ JSON.stringify(this.$store.state.userM.user.token) }}
  {{ JSON.stringify(this.$store.state.modalM.isShow) }}
  <input
    type="button"
    @click="clickMetoChangeState"
    value="clickMetoChangeState"
  />
  <input type="button" @click="modalShow" value="Modal" />
  <ModalDialog />
</template>

<script>
import Parent from "@/components/child/Parent.vue";
import ModalDialog from "@/components/dialog/ModalDialog.vue";

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
    modalShow() {
      this.$store.dispatch("setTitle", "This will be deleted");
      this.$store.dispatch("setContent", "Are you sure?");
      console.log(this.$store.state.modalM.isShow);
      this.$store.dispatch("setIsShow", !this.$store.state.modalM.isShow);
    },
  },
  created() {
    // this.$store.dispatch("userLogin");
    console.log(this.$store.state.modalM.isShow);
  },
  components: {
    Parent,
    ModalDialog,
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