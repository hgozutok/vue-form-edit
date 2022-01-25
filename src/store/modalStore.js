//import ModalDialog from "../components/dialog/ModalDialog.vue";

export const modalModule = {
  state: {
    isShow: false,
    title: "",
    content: "",

    selectedButton: "",
  },
  computed: {
    isShow() {
      return this.isShow;
    },
  },

  mutations: {
    setIsShow(state, isShow) {
      state.isShow = isShow;
      isShow === true
        ? (state.selectedButton = "")
        : (state.selectedButton = "");
    },
    setTitle(state, title) {
      state.title = title;
    },
    setContent(state, content) {
      state.content = content;
    },

    setIsShowTrue(state) {
      state.isShow = true;
      state.isShow === true
        ? (state.selectedButton = "")
        : (state.selectedButton = "");
    },
    setIsShowFalse(state) {
      state.isShow = false;
    },

    setSelectedButton(state, selectedButton) {
      state.selectedButton = selectedButton;
    },
  },
  actions: {
    setIsShow(context, isShow) {
      //   ModalDialog.openModal();
      context.commit("setIsShow", isShow);
    },
    setIsShowTrue(context) {
      //   ModalDialog.openModal();
      context.commit("setIsShowTrue");
    },
    setIsShowFalse(context) {
      context.commit("setIsShowFalse");
    },
    setTitle(context, title) {
      context.commit("setTitle", title);
    },
    setContent(context, content) {
      context.commit("setContent", content);
    },
    setSelectedButton(context, selectedButton) {
      context.commit("setSelectedButton", selectedButton);
    },
  },
  modules: {},
};
