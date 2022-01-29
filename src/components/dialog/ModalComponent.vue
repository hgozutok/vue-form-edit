<template>
  <TransitionRoot id="modal" as="template" :show="this.$store.state.modalM.isShow">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <slot></slot>

        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            ref="OKButton"
            @click="closedModal()"
          >
            Deactivate
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="
              this.$store.dispatch('setIsShow', false);
              this.$store.dispatch('setSelectedButton', 'Cancel');
            "
            ref="cancelButtonRef"
          >
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  // DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
// import { ExclamationIcon } from "@heroicons/vue/outline";

export default {
  name: "ModalComponent",
  el: "#modal-component",
  props: {
    closedM: { type: Function },
  },
  data() {
    return { value: "I am the child." };
  },
  components: {
    Dialog,
    DialogOverlay,
    // DialogTitle,
    TransitionChild,
    TransitionRoot,
    // ExclamationIcon,
  },
  // mounted() {
  //   this.$emit("clickedButton", "OKClicked");
  // },
  methods: {
    show() {
      this.$store.dispatch("setIsShow", true);
      this.$store.dispatch("setSelectedButton", "OK");
    },

    closedModal() {
      this.$store.dispatch("setIsShow", false);
      this.$store.dispatch("setSelectedButton", "OK");
      this.$emit("closedM", this.value);
      // this.closedM(this.value);
    },
  },

  unmounted() {
    this.$emit("clickedButton", this.value);
  },
  created() {
    this.$emit("clickedButton", this.value);
  },

  setup() {
    const open = ref(true);

    return {
      open,
    };
  },
};
</script>
