<template>
  <Navigation />

  <div class="flex top-0 w-full h-full bg-gray-600"></div>
  <h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
    Register
  </h1>
  <div class="flex content-center items-center justify-center h-full">
    <form @submit.prevent="register">
      <div class="mb-3 pt-0">
        <label class="text-bold" for="name"> Name </label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Enter your name"
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
      </div>

      <div class="mb-3 pt-0">
        <label for="email"> E-Mail </label>
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="Enter your email"
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
      </div>
      <div class="mb-3 pt-0">
        <label for="password"> E-Mail </label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
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
      </div>
      <div class="mb-3 pt-0">
        <label for="password_confirmation"> Password Confirmation </label>
        <input
          type="password"
          id="password_confirmation"
          v-model="password_confirmation"
          placeholder="Enter your password confirmation"
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
      </div>

      <button
        class="
          bg-pink-500
          text-white
          active:bg-pink-600
          font-bold
          uppercase
          text-sm
          px-6
          py-3
          rounded
          shadow
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
        type="submit"
      >
        Register
      </button>
      <button
        @click="cancel"
        class="
          bg-blue-500
          text-white
          active:bg-blue-600
          font-bold
          uppercase
          text-sm
          px-6
          py-3
          rounded
          shadow
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
        type="button"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import Navigation from "../components/Nav/Navigation.vue";
import axios from "axios";

export default {
  components: { Navigation },
  name: "Register",
  data() {
    return {
      user: {
        name: "test",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push("/");
    },
    register() {
      console.log(this.user);
      axios
        .post("/api/register", this.user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      this.$http.post("/api/register", this.user);
      //  .then(response => {
      //     this.$router.push('/login');
      // });
    },
  },
};
</script>

<style scoped></style>
