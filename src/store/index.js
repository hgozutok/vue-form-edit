import { createStore } from "vuex";
import { userModule } from "./userStore";
import { counterModule } from "./counter";
export default createStore({
  state: {
   

  },
  mutations: {

  },
  actions: {
  
  },
  modules: {
userM: userModule,
counterM: counterModule,
  }

});
