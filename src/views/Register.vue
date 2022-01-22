<template>
 
  <Navigation/>
  <h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
  Register
</h1>

  <div class="flex p-5 flex-col align-middle items-center content-center justify-center"></div>
   
      <div class="container" >
        <form @submit.prevent="register" method="POST">

            <div class="mb-3 pt-0">
                  <label class="text-bold" for="name">
                Name
            </label>
        <input
          type="text"
          id="name"
              v-model="name"
          placeholder="Enter your name"
          class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
</div>

     <div class="mb-3 pt-0">
          <label for="email">
                E-Mail
            </label>
        <input
          type="text"
          id="email"
              v-model="email"
          placeholder="Enter your email"
          class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
</div>
 <div class="mb-3 pt-0">
      <label for="password">
                E-Mail
            </label>
        <input
          type="password"
          id="password"
              v-model="password"
          placeholder="Enter your password"
          class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
</div>
          <div class="mb-3 pt-0">
      <label for="password_confirmation">
                Password Confirmation
            </label>
        <input
          type="password"
             id="password_confirmation"
              v-model="password_confirmation"
          placeholder="Enter your password confirmation"
          class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
</div>
        
          
          <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit"
      >
  <i class="fas fa-heart"></i> Register
</button>
         <button class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
  <i class="fas fa-heart"></i> Cancel
</button>
         
           
        </form>
        </div>
    
</template>

<script>
import Navigation from '../components/Nav/Navigation.vue';

export default {
  components: { Navigation },
  name: "Register",

methods: {
    register() {
        const user = {
            name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        };
    
         this.$http.post('/api/register', user);
        //  .then(response => {
        //     this.$router.push('/login');
        // });
    },
    },
            };
</script>

<style scoped>

</style>