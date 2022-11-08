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
      <button @click="Login">Login</button>
      <router-link to="/sign-up">
        <p>Sign Up</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
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