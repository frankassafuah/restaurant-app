<template>
    <div>
        <Header/>
        <h1>Hello {{user.name}}, welcome to Home Page</h1>
    </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
    name: 'HomePage',
    components: {
        Header
    },
    data(){
        return {
            user: {}
        }
    },
    created(){
        //redirect user to sign up page if user is not logged in
        let user = localStorage.getItem('user-info');
        this.user = JSON.parse(user);
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
    },
    methods: {
    }
}

</script>