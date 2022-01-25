<template>
  <div>
    <Parent />
    {{ JSON.stringify(this.$store.state.userM.user.token) }}
    {{ JSON.stringify(this.$store.state.modalM.isShow) }}
    {{ JSON.stringify(this.$store.state.modalM.selectedButton) }}
    <input type="button" @click="clickMetoChangeState" value="clickMetoChangeState" />
    <input type="button" @click="modalShow" value="Modal" />
    <ModalDialog @closedM="handleClicked" />

    <div :key="product.id" v-for="product of products" class="mt-2">
      <p class="text-sm text-gray-500">
        {{ product.title }}
      </p>
    </div>
  </div>
</template>

<script>
import Parent from "@/components/child/Parent.vue";
import ModalDialog from "@/components/dialog/ModalDialog.vue";
import ProductService from "../services/productService.js";
export default {
  el: "#parent-view",
  name: "ParenView",
  data() {
    return {
      products: [],
      name: "",
    };
  },

  methods: {
    handleClicked() {
      //this.$emit("closedM", this.value);
      console.log("From the child:", this.$store.state.modalM.selectedButton);
    },

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
    var { getProducts } = ProductService;
    console.log(
      getProducts().then((data) => {
        console.log(data);
        this.products = data;
      })
    );
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

<style></style>
