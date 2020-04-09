<template>
    <div class="trackBox">
        <div class="soundBox" v-for="tracks of contSounds" :key="tracks.id">
           <div class="sound" v-for="sound of cont" :key="sound.id">
               <button class="block">_</button>
           </div>
           <h2 @click="cont <15?cont++ : cont=15" class="add">+</h2>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Track",
    data(){
        return{
            cont:10,
            contSounds:4
        }
    }
};
</script>

<style scoped>
.trackBox{
    background-color: rgba(255, 255, 255, 0.158);
    color: white;
    position: fixed;
    top: 45%;
    left: 55%;
    transform: translate(-50%,-50%);
    padding: 5%;
}
.soundBox{
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
}
.block{
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 255, 0.397);
    height: 5vh;
    width: 4vw;
    color: white;
    border: solid 0.2rem black;
    margin-right: 1rem;
    cursor: pointer;
}
.add{
    cursor: pointer;
}
</style>