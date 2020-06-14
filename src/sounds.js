import {soundsDb} from '../firebase.js';

export var kickPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Kick');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var keys=Object.keys(claves);
        resolve(keys);
    }
});

export var tomsPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Toms');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var keys=Object.keys(claves);
        resolve(keys);
    }
});

export var snaresPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Snares');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var keys=Object.keys(claves);
        resolve(keys);
    }
});

export var cymbalsPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Cymbals');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var keys=Object.keys(claves);
        resolve(keys);
    }
});

export var kickSoundPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Kick');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var sound=Object.values(claves);
        resolve(sound);
    }
});

export var tomsSoundPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Toms');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var sound=Object.values(claves);
        resolve(sound);
    }
});

export var snaresSoundPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Snares');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var sound=Object.values(claves);
        resolve(sound);
    }
});

export var cymbalsSoundPromise = new Promise((resolve)=>{
    var soundsDbRef=soundsDb.ref('Sonidos/Cymbals');
    soundsDbRef.on("value", gotData);
    function gotData(data){
        var claves=data.val();
        var sound=Object.values(claves);
        resolve(sound);
    }
});
