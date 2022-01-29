<template>
  <h1>
    <span class="text-red-700"> Form Title </span>
  </h1>
  <input
    type="text"
    v-model="formValues.name"
    placeholder="Enter form title"
    class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
  />
  {{ formValues.name }}
  Title :{{ title }}

  <input type="button" value="++" @click="increase" />
  {{ count }}
  <input type="button" value="--" @click="decrease" />
</template>

<script>
import { ref } from "vue";
import {
  onMounted,
  // onUpdated, onUnmounted
} from "vue";

// let count = ref(0);
// const defValue = ref("");

export default {
  el: "#form-component",
  name: "Forms",
  props: {
    title: { type: String },
  },
  emits: ["lastValue"],

  setup(props, { emit }) {
    onMounted(() => {
      emit("lastValue", count);
    });
    const count = ref(0);
    const formValues = ref({ name: "", email: "", password: "" });
    const formTitle = ref("");

    const increase = () => {
      count.value++;
      //  emit("lastValue", count);
    };
    const decrease = () => {
      count.value--;
    };
    return {
      onMounted,
      count,
      formValues,
      formTitle,
      increase,
      decrease,
    };
  },
};
</script>

<style></style>
