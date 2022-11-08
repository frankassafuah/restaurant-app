<template>
    <div>
        <h1>Hello user, welcome to Home Page</h1>
    </div>
</template>

<script>
export default {
    name: 'HomePage',

    created(){
        //redirect user to sign up page if user is not logged in
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
    }
}

</script>