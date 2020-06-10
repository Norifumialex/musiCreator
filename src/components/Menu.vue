<template>
    <div class="menuBox">
        <h3 class="menuTitle">Tipo de sonidos</h3>
    </div>
</template>

<script>
export default {
    name: "Menu",
};
</script>

<style scoped>
.menuBox{
    background-color: rgba(255, 255, 255, 0.158);
    height: 100%;
    width: 20vw;
    position: fixed;
    top: 4.1rem;
    left: 0%;
    display: inline-flex;
    justify-content: space-between;
    animation-name: slideMenu;
    animation-duration: 2s;
}
@keyframes slideMenu{
    from {width: 0vw;}
     to {width: 20vw;}
}
.menuTitle{
    color: white;
    animation-name: textAppear;
    animation-duration: 2s;
}
@keyframes textAppear{
    from {opacity: 0;
    font-size: 0rem;}
     to {width: 1;
     font-size: 1.17rem;
     position: relative;}
}
</style>