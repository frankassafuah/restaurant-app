<template>
    <div>
        <Header/>
        <h1>Hello user, welcome to Add Restaurant Page</h1>
    </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
    name: 'Add',
    components: {
        Header
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