import { createStore } from "vuex";
import { userModule } from "./userStore";
import { counterModule } from "./counter";
import { modalModule } from "./modalStore";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userM: userModule,
    counterM: counterModule,
    modalM: modalModule,
  },
});
