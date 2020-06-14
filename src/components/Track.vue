<template>
    <div class="trackBox">
        <div class="soundBox" v-for="contSounds of contSounds" :key="contSounds">
            <select class="sound" :id="contSounds+'Type'">
                <option value="" >TIPO SONIDO</option>
                <option value="Kick">Kick</option>
                <option value="Tom">Tom</option>
                <option value="Snare">Snare</option>
                <option value="Cymbals">Cymbals</option>
            </select>
            <select class="sounds" :id="contSounds">
                <option value="">SONIDOS</option>
                <option value="">2</option>
            </select>
           <div v-for="cont of cont" :key="cont+'-'+contSound">
               <div class="block" @click="activeBlocks(contSounds+'-'+cont), playSound(contSounds+'-'+cont+'s')" :id="contSounds+'-'+cont"><audio :id="contSounds+'-'+cont+'s'" src=""></audio>_</div>
           </div>
           <h2 @click="prue('kick')" :style="{'display':hiddenBlock}" class="add">+</h2>
           <h2 @click="hiddenLessBlocks" :style="{'display':hiddenBlockLessSymbol}" class="add">-</h2>
        </div>
        <h2 @click="hiddenAddTrack" :style="{'display':hiddenTrack}" class="addLessTrack">+</h2>
        <h2 @click="hiddenLessTrack" :style="{'display':hiddenTrackLessSymbol}" class="addLessTrack">-</h2>
    </div>
</template>

<script>
    var typeSound = new Promise((resolve)=>{
        resolve(document.getElementById('1Type'));
    })
    var sound1="";
    typeSound.then(res=>{
        sound1=res.options[res.selectedIndex].value;
    })
export default {
    name: "Track",
    data(){
        return{
            cont:10,
            contSounds:4,
            hiddenTrack:"inline",
            hiddenBlock:"flex",
            hiddenTrackLessSymbol:"inline",
            hiddenBlockLessSymbol:"flex",
            soundType1:sound1,
        }
    },
    methods:{
        hiddenAddTrack(){
            if(this.contSounds==6){
                this.contSounds=6;
                this.hiddenTrack="none";
                this.hiddenTrackLessSymbol="inline";
            }else{
                this.contSounds++;
                if(this.contSounds==6){
                    this.hiddenTrack="none";
                }
                this.hiddenTrackLessSymbol="inline";
            }
        },
        hiddenAddBlocks(){
            if(this.cont==15){
                this.cont=15;
                this.hiddenBlock="none";
                this.hiddenBlockLessSymbol="flex";
            }else{
                this.cont++;
                if(this.cont==15){
                    this.hiddenBlock="none";
                }
                this.hiddenBlockLessSymbol="flex";
            }
        },
        hiddenLessTrack(){
            if(this.contSounds>2){
                this.contSounds--;
                if(this.contSounds==2){
                    this.hiddenTrackLessSymbol="none";
                }
                 this.hiddenTrack="inline";
            }else{
                this.contSounds=2;
                 this.hiddenTrack="inline";
            }
        },
        hiddenLessBlocks(){
            if(this.cont>4){
                this.cont--;
                if(this.cont==4){
                    this.hiddenBlockLessSymbol="none";
                }
                this.hiddenBlock="flex";
            }else{
                this.cont=4;
                this.hiddenBlock="flex";
            }
        },
        activeBlocks(id){
            var active=document.getElementById(id);
            if(active.style.backgroundColor=="rgb(0, 0, 255)"){
                active.style.backgroundColor="rgba(0, 0, 255, 0.397)";
            }else{
                active.style.backgroundColor="rgb(0, 0, 255)";
            }
        },
        playSound(id) {
            var sound=document.getElementById(id);
            sound.play();

    },
    prue(value){
        this.soundType1=value;
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
    height: 4vh;
    width: 2vw;
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
    height: 4vh;
    width: 2vw;
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
    margin-right: 2%;
}
.add:hover{
    color: blue;
}
.addLessTrack{
    position: relative;
    bottom: 1rem;
    cursor: pointer;
    margin-right: 5%;
    margin-top: 2%;
}
.sound{
    position: flex;
    bottom: 1.5rem;
    width: 10rem;
    height: 4vh;
    cursor: pointer;
    border: solid black;
    background-color: rgba(255, 255, 255, 0.068);
    margin-right: 1rem;
    color: white;
}
.sounds{
    position: flex;
    bottom: 1.5rem;
    width: 5rem;
    height: 4vh;
    cursor: pointer;
    border: solid black;
    background-color: rgba(255, 255, 255, 0.068);
    margin-right: 1rem;
    color: white;
}
option{
        background:rgb(65, 65, 65);
        color: white;
    }
</style>