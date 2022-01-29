<script>
import axios from "axios";
import { reactive, toRefs } from "vue";

export default {
  name: "useUser",
  setup() {
    const user = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    const register = () => {
      axios
        .post("/api/register", user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      ...toRefs(user),
      register,
    };
  },
};
</script>
