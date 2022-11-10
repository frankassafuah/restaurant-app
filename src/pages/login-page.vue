<template>
  <div>
    <h1>Login</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        required
      />
      <button @click="login">Login</button>
      <router-link to="/sign-up">
        <p>Sign Up</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    //verifying if user has details in the backend before taking user to home page
    async login() {
        try {
        const response = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
        if(response.status == 200 && response.data.length > 0){
            localStorage.setItem('user-info', JSON.stringify(response.data[0]))
            this.$router.push({name: 'Home'})
        } else {
            alert("Wrong credentials")
        }
        } catch (error) {
            alert("Something happened please try again")
        }
    }
  },
  created(){
    let user = localStorage.getItem('user-info');
    if(user){
        this.$router.push({name: 'Home'})
    }
  }
};
</script>

<style scoped>
.login {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

.login input {
  width: 50%;
  height: 35px;
  margin: 0px auto 10px auto;
}

.login button {
  width: 15%;
  margin: 0 auto;
  height: 30px;
}
</style>