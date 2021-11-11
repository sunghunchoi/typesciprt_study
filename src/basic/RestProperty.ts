let guitar = {manufacturer: 'Ibanes', type: 'Jem 777', strings: 6};
// const manufacturere = guitar.manufacturer;
// const type = guitar.type;
// const strings = guitar.strings;
// let { manufacturer, type , strings } = guitar;
// let { manufacturer : maker, type , strings} = guitar;
// console.log(maker)

let {manufacturer, ...details}  = guitar;
let { type , strings } = details;


const instruments = ['Guitar', 'Violin', 'Oboe', 'Drums'];

// const gtr = instruments[0];
// const violin = instruments[1];
// const oboe = instruments[2];
// const drums = instruments[3];

// const [ gtr, violin , oboe , drums ] = instruments;
let [gtr, ...instrumentslice ] = instruments;

function PrintInstruments(log: string, ...instruments : string[]) : void {
    console.log(log);
    instruments.forEach(instrument => {
        console.log(instrument);
    })
}

PrintInstruments("Music Shop Inventory", "Guitar" , "Drums", "Clarinet", "Clavinova")


