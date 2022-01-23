 import axios from "axios";

export  const userModule = {
  state: {
    
    user: {
        token:"",
      
    },
     userLoginData:{username: "mor_2314",
                password: "83r5^_"
    },

    // ...

  },
  mutations: {

   
    //   setUserName(state, name) {
    //     state.user.name = name;
    //   }
    //   ,
    //   setUserAge(state, age) {
    //     state.user.age = age;
    //   }
      
      setUser(state, user) {
        state.user = user;
      }
      ,
     



  },
  actions: {
   

   async userLogin({ commit, state }) {
        console.log(JSON.stringify( state.userLoginData  )   );
        const response = await axios.post("https://fakestoreapi.com/auth/login", state.userLoginData);
        console.log(response.data);
        commit("setUser", response.data);
      //  }
    //    await fetch('https://fakestoreapi.com/auth/login',{
    //         method:'POST',
    //         body:JSON.stringify({
    //             username: "mor_2314",
    //             password: "83r5^_"
    //         })
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))


    //    var data= await axios.post('https://fakestoreapi.com/auth/login',JSON.stringify( state.userLoginData  )   
        
    //     );
    //     console.log(data.data);
    //    commit("setUser", data.data);
    },
    userLogout(context) {
        context.commit("setUser", {});
    },



  },
  modules: {

  }
  

};
