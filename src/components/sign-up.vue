<template>
    <div>
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button @click="signUp">Sign Up</button>
        </div>
        
    </div>
</template>

<script>
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
        signUp() {
            
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