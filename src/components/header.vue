<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurant</router-link>
    <router-link to="/update-restaurant">Update Restaurant</router-link>
    <a @click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #333;
  overflow: hidden;
}

.nav a {
  color: #f2f2f2f2;
  float: left;
  text-align: center;
  text-decoration: none;
  padding: 14px 16px;
  margin-right: 5px;
  font-size: 17px;
}

.nav a:hover {
  background-color: #ddd;
  color: #333;
}
</style>