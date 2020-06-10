<template>
    <div class="containerNav">
        <router-link to="/menu"><img src="../assets/menuIcon.svg" class="menuIcon"></router-link>
        <router-link to="/"><h2 class="title">MusiCreator</h2></router-link>
        <div>
        <router-link to="/login"><button class="login">Login</button></router-link>
        <span class="login">/</span>
        <router-link to="/register"><Strong class="login">Sing up </Strong></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
.containerNav{
    background-color: rgba(255, 255, 255, 0.158);
    height: 4rem;
    width: 100%;
    position: fixed;
    top: 0%;
    left: 0%;
    display: inline-flex;
    justify-content: space-between;
}
.menuIcon{
    float: left;
    max-height: 4rem;
    max-width: 3rem;
    position: absolute;
    top: 12%;
}
.title{
    color:white;
}
.login{
    float: right;
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    font-size: 1rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
}
.login:hover{
    color:rgb(0, 102, 255);
    cursor: pointer;
}
a {  
    text-decoration: none;
}
</style>