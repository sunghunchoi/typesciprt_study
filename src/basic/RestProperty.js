var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var guitar = { manufacturer: 'Ibanes', type: 'Jem 777', strings: 6 };
// const manufacturere = guitar.manufacturer;
// const type = guitar.type;
// const strings = guitar.strings;
// let { manufacturer, type , strings } = guitar;
// let { manufacturer : maker, type , strings} = guitar;
// console.log(maker)
var manufacturer = guitar.manufacturer, details = __rest(guitar, ["manufacturer"]);
var type = details.type, strings = details.strings;
var instruments = ['Guitar', 'Violin', 'Oboe', 'Drums'];
// const gtr = instruments[0];
// const violin = instruments[1];
// const oboe = instruments[2];
// const drums = instruments[3];
// const [ gtr, violin , oboe , drums ] = instruments;
var gtr = instruments[0], instrumentslice = instruments.slice(1);
function PrintInstruments(log) {
    var instruments = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        instruments[_i - 1] = arguments[_i];
    }
    console.log(log);
    instruments.forEach(function (instrument) {
        console.log(instrument);
    });
}
PrintInstruments("Music Shop Inventory", "Guitar", "Drums", "Clarinet", "Clavinova");
