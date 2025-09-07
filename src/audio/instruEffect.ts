import * as Tone from 'tone';

// effect nodes

export const effectNodes: any[] = [
    null, // 0 no effect
    new Tone.Distortion(),  // 1
    new Tone.AutoWah(),     // 2
    new Tone.BitCrusher(),  // 3
    new Tone.Freeverb(),    // 4
];

export const instrumentNames: string[] = [];
export const instrumentSpriteCounts: number[] = []

// helper for sampler
type NoteMap = Record<string, string>;

function createSampler (config: {
    baseUrl: string;
    noteMap: NoteMap;
    name: string;
}, sprites:number) {
    instrumentNames.push(config.name);
    instrumentSpriteCounts.push(sprites)
    return new Tone.Sampler({
        urls: config.noteMap,
        baseUrl: config.baseUrl,
        onload: () => console.log(`${config.name} samples loaded`),
})};



// ============================

// instruments

// acoustic

const piano = createSampler({
    name: "Piano",
    baseUrl: "../assets/audio/piano/",
    noteMap: {
        "A4": "a4.mp3", 
        "A5": "a5.mp3", 
        "A6": "a6.mp3", 
        "A7": "a7.mp3",
        "D#4": "ds4.mp3", 
        "D#5": "ds5.mp3", 
        "D#6": "ds6.mp3", 
        "D#7": "ds7.mp3"
    }
}, 10);

const musicBox = createSampler({
    name: "Music Box",
    baseUrl: "../assets/audio/musicbox/",
    noteMap: {
        "A3": "a3.mp3", 
        "A4": "a4.mp3", 
        "A5": "a5.mp3", 
        "A6": "a6.mp3",
        "D#4": "ds4.mp3", 
        "D#5": "ds5.mp3", 
        "D#6": "ds6.mp3", 
        "D#7": "ds7.mp3"
    }
}, 0);


// synths
const basicSynth = new Tone.PolySynth(Tone.Synth);
instrumentNames.push("Synth");
instrumentSpriteCounts.push(0);

const duoSynth = new Tone.PolySynth(Tone.DuoSynth);
instrumentNames.push("Duo Synth");
instrumentSpriteCounts.push(0);

const fmSynth = new Tone.PolySynth(Tone.FMSynth);
instrumentNames.push("FM Synth");
instrumentSpriteCounts.push(0);

const amSynth = new Tone.PolySynth(Tone.AMSynth);
instrumentNames.push("AM Synth");
instrumentSpriteCounts.push(0);

const ottoDoo = createSampler({
    name: "Otto - Doo",
    baseUrl: "../assets/audio/otto-doo/",
    noteMap: {
        "F3": "f3.wav", "A3": "a3.wav", "C4": "c4.wav", "F4": "f4.wav",
        "Bb4": "bb4.wav", "C5": "c5.wav", "F5": "f5.wav", "C6": "c6.wav", "F6": "f6.wav",
    }
}, 7);

const ottoSynth = createSampler({
    name: "Otto - Synth",
    baseUrl: "../assets/audio/otto-synth/",
    noteMap: {
        "C3": "c3.wav", "F3": "f3.wav", "C4": "c4.wav", "F4": "f4.wav",
        "Bb4": "bb4.wav", "C5": "c5.wav", "F5": "f5.wav", "C6": "c6.wav", "F6": "f6.wav",
    }
}, 0);


// expt

const expt1 = createSampler({
    name: "expt1",
    baseUrl: "../assets/audio/expt1/",
    noteMap: {
        "C4": "c4.wav",
        "C5": "c5.wav",
    }
}, 0);

const expt2 = createSampler({ // 凤鸣
    name: "expt2",
    baseUrl: "../assets/audio/expt2/",
    noteMap: {
        "F6": "f6.wav"
    }
}, 0);

const expt3 = createSampler({ // 嘟
    name: "expt3",
    baseUrl: "../assets/audio/expt3/",
    noteMap: {
        "Bb4": "bb4.wav"
    }
}, 0);


// inst array
export const instruments: any[] = [
    // acoustic
    piano,          // 0
    musicBox,       // 3

    // synth
    basicSynth,     // 20
    duoSynth,       // 21
    fmSynth,        // 22
    amSynth,        // 23
    
    // fun
    ottoDoo,        // 25
    ottoSynth,      // 26

    // expt
    expt1,
    expt2,
    expt3

];

export const RELEASE_SETTINGS = {
    "INSTANT_RELEASE_INSTRUMENTS": [
        "Synth",
        "Duo Synth",
        "FM Synth",
        "AM Synth",
        "Otto - Synth",
        "expt1",
        "expt2",
        "expt3"
    ]
};

console.log(instrumentNames);


// for (let i = 0; i < instruments.length; i++) {
//     instrumentNames.push(instruments[i].name);
// }