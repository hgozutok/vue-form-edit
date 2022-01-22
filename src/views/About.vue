<template>
  <Navigation/>

  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import Navigation from "@/components/Nav/Navigation.vue";

export default ({
  components: {
    Navigation,
  },
    
  data() {
    return {
      msg: "This is an about page",
    };
  },
})
</script>
