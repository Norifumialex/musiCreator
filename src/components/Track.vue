<template>
  <div class="trackBox">
    <div class="timeline">
      <img src="../assets/playSymbol.svg" @click="playAll" class="play" />
      <div class="timelineback">
        <div
          v-if="seg !== 0"
          class="timeSec"
          :style="{ width: seg + '%' }"
        ></div>
      </div>
    </div>
    <div class="soundBox" v-for="c of contSounds" :key="c">
      <select class="sounds" v-model="tipoSonido[c]">
        <option value="Kick">Kick</option>
        <option value="Toms">Tom</option>
        <option value="Snares">Snare</option>
        <option value="Cymbals">Cymbals</option>
      </select>
      <h5 class="load" v-if="CymbalsSrc == ''" @click="getSonidos">
        Ver sonidos
      </h5>
      <select
        class="sound"
        v-else-if="tipoSonido[c] == 'Toms'"
        :id="c + 'type'"
      >
        <option
          :style="{ 'background-color': 'rgb(65, 65, 65)' }"
          class="sounds"
          v-for="t of Toms"
          :key="t"
          >{{ t }}
        </option>
      </select>
      <select
        class="sound"
        v-else-if="tipoSonido[c] == 'Snares'"
        :id="c + 'type'"
      >
        <option
          :style="{ 'background-color': 'rgb(65, 65, 65)' }"
          class="sounds"
          v-for="s of Snares"
          :key="s"
          >{{ s }}
        </option>
      </select>
      <select
        class="sound"
        v-else-if="tipoSonido[c] == 'Kick'"
        :id="c + 'type'"
      >
        <option
          :style="{ 'background-color': 'rgb(65, 65, 65)' }"
          class="sounds"
          v-for="k of Kicks"
          :key="k"
          >{{ k }}
        </option>
      </select>
      <select
        class="sound"
        v-else-if="tipoSonido[c] == 'Cymbals'"
        :id="c + 'type'"
      >
        <option
          :style="{ 'background-color': 'rgb(65, 65, 65)' }"
          class="sounds"
          v-for="c of Cymbals"
          :key="c"
          >{{ c }}
        </option>
      </select>
      <div v-for="cont of cont" :key="cont + '-' + c">
        <div
          class="block"
          @click="
            activeBlocks(c + '' + cont),
              playSound(c + '' + cont + 's'),
              soundsList(c, cont, c + '' + cont)
          "
          :id="c + '' + cont"
        >
          <audio :id="c + '' + cont + 's'" src=""></audio>_
        </div>
      </div>
      <h2
        @click="hiddenAddBlocks"
        :style="{ display: hiddenBlock }"
        class="add"
      >
        +
      </h2>
      <h2
        @click="hiddenLessBlocks"
        :style="{ display: hiddenBlockLessSymbol }"
        class="add"
      >
        -
      </h2>
    </div>
    <h3 class="sel" @click="getId">Set Sounds</h3>
    <h2
      @click="hiddenAddTrack"
      :style="{ display: hiddenTrack }"
      class="addLessTrack"
    >
      +
    </h2>
    <h2
      @click="hiddenLessTrack"
      :style="{ display: hiddenTrackLessSymbol }"
      class="addLessTrack"
    >
      -
    </h2>
  </div>
</template>

<script>
import {
  kickPromise,
  tomsPromise,
  snaresPromise,
  cymbalsPromise,
  kickSoundPromise,
  tomsSoundPromise,
  snaresSoundPromise,
  cymbalsSoundPromise
} from "../sounds";

var tomSounds = "";
var snaresSounds = "";
var cymbalsSounds = "";
var kickSounds = "";

cymbalsPromise.then(res => {
  cymbalsSounds = res;
});

snaresPromise.then(res => {
  snaresSounds = res;
});

tomsPromise.then(res => {
  tomSounds = res;
});

kickPromise.then(res => {
  kickSounds = res;
});

var tomSoundsSrc = "";
var snaresSoundsSrc = "";
var cymbalsSoundsSrc = "";
var kickSoundsSrc = "";

kickSoundPromise.then(res => {
  kickSoundsSrc = res;
});

tomsSoundPromise.then(res => {
  tomSoundsSrc = res;
});

snaresSoundPromise.then(res => {
  snaresSoundsSrc = res;
});

cymbalsSoundPromise.then(res => {
  cymbalsSoundsSrc = res;
});
export default {
  name: "Track",
  data() {
    return {
      cont: 10,
      contSounds: 4,
      hiddenTrack: "inline",
      hiddenBlock: "flex",
      hiddenTrackLessSymbol: "inline",
      hiddenBlockLessSymbol: "flex",
      Kicks: kickSounds,
      Toms: tomSounds,
      Snares: snaresSounds,
      Cymbals: cymbalsSounds,
      KicksSrc: kickSoundsSrc,
      TomsSrc: tomSoundsSrc,
      SnaresSrc: snaresSoundsSrc,
      CymbalsSrc: cymbalsSoundsSrc,
      tipoSonido: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      seg: 0,
    };
  },
  methods: {
    hiddenAddTrack() {
      if (this.contSounds == 6) {
        this.contSounds = 6;
        this.hiddenTrack = "none";
        this.hiddenTrackLessSymbol = "inline";
      } else {
        this.contSounds++;
        if (this.contSounds == 6) {
          this.hiddenTrack = "none";
        }
        this.hiddenTrackLessSymbol = "inline";
      }
    },
    hiddenAddBlocks() {
      if (this.cont == 15) {
        this.cont = 15;
        this.hiddenBlock = "none";
        this.hiddenBlockLessSymbol = "flex";
      } else {
        this.cont++;
        if (this.cont == 15) {
          this.hiddenBlock = "none";
        }
        this.hiddenBlockLessSymbol = "flex";
      }
    },
    hiddenLessTrack() {
      if (this.contSounds > 2) {
        this.contSounds--;
        if (this.contSounds == 2) {
          this.hiddenTrackLessSymbol = "none";
        }
        this.hiddenTrack = "inline";
      } else {
        this.contSounds = 2;
        this.hiddenTrack = "inline";
      }
    },
    hiddenLessBlocks() {
      if (this.cont > 4) {
        this.cont--;
        if (this.cont == 4) {
          this.hiddenBlockLessSymbol = "none";
        }
        this.hiddenBlock = "flex";
      } else {
        this.cont = 4;
        this.hiddenBlock = "flex";
      }
    },
    activeBlocks(id) {
      var active = document.getElementById(id);
      if (active.style.backgroundColor == "rgb(0, 0, 255)") {
        active.style.backgroundColor = "rgba(0, 0, 255, 0.397)";
      } else {
        active.style.backgroundColor = "rgb(0, 0, 255)";
      }
    },
    playSound(id) {
      var sound = document.getElementById(id);
      sound.play();
    },
    getSonidos() {
      this.Snares = snaresSounds;
      this.Cymbals = cymbalsSounds;
      this.Toms = tomSounds;
      this.Kicks = kickSounds;
      this.SnaresSrc = snaresSoundsSrc;
      this.CymbalsSrc = cymbalsSoundsSrc;
      this.TomsSrc = tomSoundsSrc;
      this.KicksSrc = kickSoundsSrc;
    },
    getId() {
      var j = 0;
      var route = "";
      for (var i = 0; i <= 6; i++) {
        if (document.getElementById(i + "type")) {
          var type = document.getElementById(i + "type");
          var name = type.options[type.selectedIndex].value;
          var index = type.options[type.selectedIndex].index;
          if (this.Toms[index] == name) {
            for (j = 1; j <= this.cont; j++) {
              route = Object.values(this.TomsSrc);
              console.log(route[index]);
              document.getElementById(i + "" + j + "s").src = route[index];
            }
          }
          if (this.Kicks[index] == name) {
            for (j = 1; j <= this.cont; j++) {
              route = Object.values(this.KicksSrc);
              document.getElementById(i + "" + j + "s").src = route[index];
            }
          }
          if (this.Snares[index] == name) {
            for (j = 1; j <= this.cont; j++) {
              route = Object.values(this.SnaresSrc);
              document.getElementById(i + "" + j + "s").src = route[index];
            }
          }
          if (this.Cymbals[index] == name) {
            for (j = 1; j <= this.cont; j++) {
              route = Object.values(this.CymbalsSrc);
              document.getElementById(i + "" + j + "s").src = route[index];
            }
          }
        }
      }
    },
    soundsList(row, colum, id) {
      var noExist = true;
      var i = 0;
      if (this.list1.length < this.cont) {
        for (i = 0; i < this.cont; i++) {
          this.list1.push(undefined);
          this.list2.push(undefined);
          this.list3.push(undefined);
          this.list4.push(undefined);
          this.list5.push(undefined);
          this.list6.push(undefined);
        }
      }
      switch (row) {
        case 1:
          for (i = 0; i < this.list1.length; i++) {
            if (this.list1[i] == id) {
              this.list1.splice(i, 1);
              noExist = false;
              break;
            }
          }
          if (noExist) {
            this.list1.splice(id.slice(1, id.length) - 1, 1, id);
          }
          break;
        case 2:
          for (i = 0; i < this.list2.length; i++) {
            if (this.list2[i] == id) {
              this.list2.splice(i, 1);
              noExist = false;
              break;
            }
          }
          if (noExist) {
            this.list2.splice(id.slice(1, id.length) - 1, 1, id);
          }
          break;
        case 3:
          for (i = 0; i < this.list3.length; i++) {
            if (this.list3[i] == id) {
              this.list3.splice(i, 1);
              noExist = false;
              break;
            }
          }
          if (noExist) {
            this.list3.splice(id.slice(1, id.length) - 1, 1, id);
          }
          break;
        case 4:
          for (i = 0; i < this.list4.length; i++) {
            if (this.list4[i] == id) {
              this.list4.splice(i, 1);
              noExist = false;
              break;
            }
          }
          if (noExist) {
            this.list4.splice(id.slice(1, id.length) - 1, 1, id);
          }
          break;
        case 5:
          for (i = 0; i < this.list5.length; i++) {
            if (this.list5[i] == id) {
              this.list5.splice(i, 1);
              noExist = false;
              break;
            }
          }
          if (noExist) {
            this.list5.splice(id.slice(1, id.length) - 1, 1, id);
          }
          break;
        case 6:
          for (i = 0; i < this.list6.length; i++) {
            if (this.list6[i] == id) {
              this.list6.splice(i, 1);
              noExist = false;
              break;
            }
          }
          if (noExist) {
            this.list6.splice(id.slice(1, id.length) - 1, 1, id);
          }
          break;
      }
    },
    playSoundSecond(l1, l2, l3, l4, l5, l6, i) {
      if (l1[i] !== undefined) {
        var sound1 = document.getElementById(l1[i] + "s");
        sound1.play();
      }
      if (l2[i] !== undefined) {
        var sound2 = document.getElementById(l2[i] + "s");
        sound2.play();
      }
      if (l3[i] !== undefined) {
        var sound3 = document.getElementById(l3[i] + "s");
        sound3.play();
      }
      if (l4[i] !== undefined) {
        var sound4 = document.getElementById(l4[i] + "s");
        sound4.play();
      }
      if (l5[i] !== undefined) {
        var sound5 = document.getElementById(l5[i] + "s");
        sound5.play();
      }
      if (l6[i] !== undefined) {
        var sound6 = document.getElementById(l6[i] + "s");
        sound6.play();
      }
    },
    playAll() {
      this.seg = 0;
      var suma = 100 / this.cont;
      var self = this;
      var l1 = this.list1;
      var l2 = this.list2;
      var l3 = this.list3;
      var l4 = this.list4;
      var l5 = this.list5;
      var l6 = this.list6;
      var j = 0;
      var playerSounds = setInterval(function() {
        self.playSoundSecond(l1, l2, l3, l4, l5, l6, j);
        self.seg = self.seg + suma;
        j++;
        if (j == self.cont) {
          clearInterval(playerSounds);
        }
      }, 500);
    },
  }
};
</script>

<style scoped>
.trackBox {
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.158);
  color: white;
  position: fixed;
  top: 55%;
  left: 60%;
  transform: translate(-50%, -50%);
  padding: 3% 5% 0% 5%;
}
.soundBox {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.block {
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
.blockActive {
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
.add {
  position: relative;
  bottom: 1rem;
  cursor: pointer;
  margin-right: 2%;
}
.add:hover {
  color: blue;
}
.addLessTrack {
  position: relative;
  bottom: 1rem;
  cursor: pointer;
  margin-right: 5%;
  margin-top: 2%;
}
.sound {
  position: flex;
  bottom: 1.5rem;
  width: 7rem;
  max-width: 7rem;
  height: 4vh;
  cursor: pointer;
  border: solid black;
  background-color: rgba(255, 255, 255, 0.068);
  margin-right: 1rem;
  color: white;
}
.sounds {
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
option {
  background: rgb(65, 65, 65);
  color: white;
}
.load {
  color: white;
  padding: 0.5rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.sel {
  float: left;
  position: relative;
  margin-top: -1rem;
  cursor: pointer;
}
.timeline {
  position: relative;
  background: white;
  width: 100%;
  height: 4vh;
  display: flex;
  padding: 1%;
  margin-bottom: 3vh;
  border: black solid 0.12rem;
  border-radius: 0.5rem;
}
.play {
  position: relative;
  float: left;
}
.timelineback {
  position: relative;
  top: 30%;
  background-color: rgba(0, 0, 0, 0.315);
  width: 100%;
  height: 2vh;
  border: solid black 0.1rem;
  border-radius: 1rem;
}
.timeSec {
  position: relative;
  top: -0.1rem;
  left: -0.1rem;
  background-color: rgb(250, 187, 69);
  height: 100%;
  width: 0%;
  border: solid black 0.1rem;
  border-radius: 1rem;
}
</style>
