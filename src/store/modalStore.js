//import ModalDialog from "../components/dialog/ModalDialog.vue";

export const modalModule = {
  state: {
    isShow: false,
    title: "",
    content: "",
  },
  computed: {
    isShow() {
      return this.isShow;
    },
  },

  mutations: {
    setIsShow(state, isShow) {
      state.isShow = isShow;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setContent(state, content) {
      state.content = content;
    },

    setIsShowTrue(state) {
      state.isShow = true;
    },
    setIsShowFalse(state) {
      state.isShow = false;
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
  },
  modules: {},
};
