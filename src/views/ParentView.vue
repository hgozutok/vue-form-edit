<template>
  <div>
    <Parent />
    {{ JSON.stringify(this.$store.state.userM.user.token) }}
    {{ JSON.stringify(this.$store.state.modalM.isShow) }}
    {{ JSON.stringify(this.$store.state.modalM.selectedButton) }}
    <input type="button" @click="clickMetoChangeState" value="clickMetoChangeState" />
    <input type="button" @click="modalShow" value="Modal" />
    <input type="button" @click="openModal" value="ShowModal" />
    <!-- <ModalDialog ref="modal" @closedM="handleClicked" /> -->
    <ModalComponent ref="modal" @closedM="handleClicked"> <Login /></ModalComponent>

    <div :key="product.id" v-for="product of products" class="mt-2">
      <p class="text-sm text-gray-500">
        {{ product.title }}
      </p>
    </div>
    <input type="text" v-model="titleName" />
    {{ titleName }}
    <Forms v-on:lastValue="increase($event)" :title="titleName" />
    LastNum:{{ lastNumber }}
    {{ count }}
    <useUser />
  </div>
</template>

<script>
import Parent from "@/components/child/Parent.vue";
// import ModalDialog from "@/components/dialog/ModalDialog.vue";
import ModalComponent from "@/components/dialog/ModalComponent.vue";
import ProductService from "../services/productService.js";
import Forms from "@/components/child/Forms.vue";
import useUser from "../components/child/useUser.vue";
import Login from "./Login.vue";

export default {
  el: "#parent-view",
  name: "ParenView",

  data() {
    return {
      products: [],
      titleName: "",
      user: useUser,
      lastNumber: 0,
    };
  },

  methods: {
    increase(nr) {
      this.lastNumber = nr;
    },
    handleClicked() {
      //this.$emit("closedM", this.value);

      console.log("From the child:", this.$store.state.modalM.selectedButton);
    },
    openModal() {
      console.log(this.$refs);
      this.$refs.modal.show();
    }, //executing the show method of child

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
    // ModalDialog,
    Forms,
    useUser,
    ModalComponent,
    Login,
  },


};
</script>

<style></style>
