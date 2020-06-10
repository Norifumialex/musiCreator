<template>
    <div class="trackBox">
        <div class="soundBox" v-for="contSounds of contSounds" :key="contSounds">
            <h3 class="sound">TIPO SONIDO</h3>
           <div v-for="cont of cont" :key="cont+'-'+contSound">
               <button class="block" @click="activeBlocks(contSounds+'-'+cont)" :id="contSounds+'-'+cont">_</button>
           </div>
           <h2 @click="hiddenAddBlocks" :style="{'display':hiddenBlock}" class="add">+</h2>
        </div>
        <h2 @click="hiddenAddTrack" :style="{'display':hiddenTrack}" class="add">+</h2>
    </div>
</template>

<script>
export default {
    name: "Track",
    data(){
        return{
            cont:10,
            contSounds:4,
            hiddenTrack:"inline",
            hiddenBlock:"flex"
        }
    },
    methods:{
        hiddenAddTrack(){
            if(this.contSounds==6){
                this.contSounds=6;
                this.hiddenTrack="none";
            }else{
                this.contSounds++;
                if(this.contSounds==6){
                    this.hiddenTrack="none";
                }
            }
        },
        hiddenAddBlocks(){
            if(this.cont==15){
                this.cont=15;
                this.hiddenBlock="none";
            }else{
                this.cont++;
                if(this.cont==15){
                    this.hiddenBlock="none";
                }
            }
        },
        activeBlocks(id){
            var active=document.getElementById(id);
            if(active.style.backgroundColor=="rgb(0, 0, 255)"){
                active.style.backgroundColor="rgba(0, 0, 255, 0.397)";
            }else{
                active.style.backgroundColor="rgb(0, 0, 255)";
            }
        }
    }
};
</script>

<style scoped>
.trackBox{
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.158);
    color: white;
    position: fixed;
    top: 55%;
    left: 60%;
    transform: translate(-50%,-50%);
    padding: 3% 5% 0% 5%; 
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
    outline: none;
    margin-right: 1rem;
    cursor: pointer;
}
.blockActive{
    display: flex;
    justify-content: space-around;
    background-color: rgb(0, 0, 255);
    height: 5vh;
    width: 4vw;
    color: white;
    border: solid 0.2rem black;
    outline: none;
    margin-right: 1rem;
    cursor: pointer;
}
.add{
    position: relative;
    bottom: 1rem;
    cursor: pointer;
}
.sound{
    position: relative;
    bottom: 1.5rem;
    width: 5rem;
    cursor: pointer;
    border: solid black;
    background-color: rgba(255, 255, 255, 0.068);
    margin-right: 1rem;
}
</style>