<template>
    <div>
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name" required>
            <input type="text" v-model="email" placeholder="Enter Email" required>
            <input type="password" v-model="password" placeholder="Enter Password" required>
            <button @click="signUp">Sign Up</button>
            <router-link to="/login">
                <p>Login</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default { 
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },

    methods: {
        async signUp() {
            try {
                const response = await axios.post("http://localhost:3000/users", 
                {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                if(response.status == 201){
                    this.$router.push({name: 'Home'})
                    localStorage.setItem("user-info", JSON.stringify(response.data))
                }
            } catch (error) {
                alert("Please try again something happened")
            }
        }
    },
    created(){
        // redirect user to homepage if user is already logged in
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'Home'})
        }
    }
}

</script>

<style scoped>
 .register { 
    width:50% ;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    }

    .register input {
        width: 50%;
        height: 35px;
        margin: 0px auto 10px auto;
    }

    .register button {
        width: 15%;
        margin: 0 auto ;
        height: 30px;
    }
</style>