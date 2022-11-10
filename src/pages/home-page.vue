<template>
  <div>
    <Header />
    <h1>Hello {{ user.name }}, welcome to Home Page</h1>
    <table border="1px">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
      </tr>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>{{ restaurant.address }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    Header,
  },
  data() {
    return {
      user: {},
      restaurants: [],
    };
  },
  created() {
    //redirect user to sign up page if user is not logged in
    let user = localStorage.getItem("user-info");
    this.user = JSON.parse(user);
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    this.getRestaurants();
  },
  methods: {
    async getRestaurants() {
      try {
        const response = await axios.get("http://localhost:3000/restaurants");
        if (response) {
          this.restaurants = response.data;
        }
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
table{
    margin: 0 auto ;
}

th, td {
    width: 160px;
    height: 40px;
}

</style>