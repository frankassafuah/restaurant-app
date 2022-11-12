<template>
    <div>
        <Header/>
        <h1>Hello user, welcome to Add Restaurant Page</h1>
        <form class="addForm">
            <input type="text" placeholder="Enter Name" v-model="form.name">
            <input type="text" placeholder="Enter Address" v-model="form.address">
            <input type="text" placeholder="Enter Contact" v-model="form.contact">
            <button type="button" @click="addRestaurant" >Add new restaurant</button>
        </form>
    </div>
</template>

<script>
import Header from '../components/header.vue'
import axios from 'axios';
export default {
    name: 'Add',
    components: {
        Header
    },
    data(){
        return {
            form: {}
        }
    },
    methods: {
        async addRestaurant(){
            try {
                const response = await axios.post("http://localhost:3000/restaurants", this.form);
                if(response.status == 201 ){
                   this.$router.push({name: 'Home'})
                }
            } catch (error) {
                alert('Something happened')
            }
        }
    },
    created(){
        //redirect user to sign up page if user is not logged in
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
    }
}

</script>

<style scoped> 
.addForm { 
    width:50% ;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    }

    .addForm input {
        width: 50%;
        height: 35px;
        margin: 0px auto 10px auto;
    }

    .addForm button {
        width: 20%;
        margin: 0 auto ;
        height: 40px;
    }
</style>