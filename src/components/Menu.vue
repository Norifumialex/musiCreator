<template>
    <div class="menuBox">
        <h2 class="menuTitle">Sounds</h2>
        <div>
        <h4 class="subTitle" @click="displatTypes('kicks')">Kicks</h4>
        <div :style="{'display':kickDisplay}" id="kicks">
        <span class="types" v-for="k in Kicks" :key="k" >{{k}} <br></span>
        </div>
        </div>
        <div>
        <h4 class="subTitle" @click="displatTypes('toms')">Toms</h4>
        <div :style="{'display':tomsDisplay}" id="toms">
        <span class="types" v-for="t in Toms" :key="t">{{t}} <br></span>
        </div>
        </div>
        <div>
        <h4 class="subTitle" @click="displatTypes('snares')">Snares</h4>
        <div :style="{'display':snaresDisplay}" id="snares">
        <span class="types" v-for="s in Snares" :key="s">{{s}} <br></span>
        </div>
        </div>
        <div>
        <h4 class="subTitle" @click="displatTypes('cymbals')">Cymbals</h4>
        <div :style="{'display':cymbalsDisplay}" id="cymbals">
        <span class="types" v-for="c in Cymbals" :key="c">{{c}} <br></span>
        </div>
        </div>

        
    </div>
</template>

<script>

import {kickPromise, tomsPromise, snaresPromise, cymbalsPromise} from "../sounds";

var tomSounds="";
var snaresSounds="";
var cymbalsSounds="";
var kickSounds="";

cymbalsPromise.then(res =>{
    cymbalsSounds=res;
})

snaresPromise.then(res =>{
    snaresSounds=res;
})

tomsPromise.then(res =>{
    tomSounds=res;
})

kickPromise.then(res =>{
    kickSounds=res;
})
export default {
    name: "Menu",
data(){
    return{
        Kicks:kickSounds,
        Toms:tomSounds,
        Snares:snaresSounds,
        Cymbals:cymbalsSounds,
        kickDisplay:"none",
        tomsDisplay:"none",
        snaresDisplay:"none",
        cymbalsDisplay:"none",
    }
},
methods:{
      displatTypes(id){
          if(id=="kicks"){
              if(this.kickDisplay=="none"){
                  this.kickDisplay="block";
               }else{
                   this.kickDisplay="none";
               }
           }else if(id=="toms"){
               if(this.tomsDisplay=="none"){
                   this.tomsDisplay="block";
               }else{
                   this.tomsDisplay="none";
               }
           }else if(id=="snares"){
               if(this.snaresDisplay=="none"){
                   this.snaresDisplay="block";
               }else{
                   this.snaresDisplay="none";
               }
           }else{
               if(this.cymbalsDisplay=="none"){
                   this.cymbalsDisplay="block";
               }else{
                   this.cymbalsDisplay="none";
               }
           }
       },
      },
};
</script>

<style scoped>
.menuBox{
    background-color: rgba(255, 255, 255, 0.158);
    height: 100%;
    width: 15vw;
    position: fixed;
    top: 4.1rem;
    left: 0%;
    display: flex;
    flex-direction: column;
    animation-name: slideMenu;
    animation-duration: 2s;
}
.menuTitle{
    color: white;
    animation-name: titleAppear;
    animation-duration: 2s;
    border-bottom: solid black 1px;
    padding-right: -10;
}
.subTitle{
    color: white;
    animation-name: subTitleAppear;
    animation-duration: 1s;
    border-bottom: solid black 1px;
    cursor: pointer;
}
.types{
    color: white;
    animation-name: textAppear;
    animation-duration: 2s;
    padding: 1rem;
    font-size: 0.83rem;
}
@keyframes slideMenu{
    from {width: 0vw;}
     to {width: 15vw;}
}
@keyframes titleAppear{
    from {opacity: 0;
    font-size: 0rem;}
     to {width: 1;
     font-size: 1.5rem;
     position: relative;}
}
@keyframes subTitleAppear{
    from {opacity: 0;
    font-size: 0rem;}
     to {width: 1;
     font-size: 1rem;
     position: relative;}
}
@keyframes textAppear{
    from {opacity: 0;
    font-size: 0rem;}
     to {width: 1;
     font-size: 0.83rem;
     position: relative;}
}
</style>