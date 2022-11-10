<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add Restaurant</a>
        <a href="#">Update Restaurant</a>
        <a href="#">Logout</a>
    </div>
</template>

<script>

export default {
    name: 'Header',
    
}

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
    color: #333
}
</style>