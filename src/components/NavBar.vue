<template>
    <div class="containerNav">
        <button class="login">Sing up</button>
        <button class="login">Login</button>
        <img src="../assets/menuIcon.svg" class="menuIcon">
        <h2 class="title">MusiCreator</h2>
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
}
.menuIcon{
    float: left;
    max-height: 4rem;
    max-width: 3rem;
   position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.menuIcon:hover{
    cursor: pointer;
}
.title{
    color:white;
}
.login{
    float: right;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    font-size: 1rem;
}
.login:hover{
    color:rgb(0, 102, 255);
    cursor: pointer;
}
</style>