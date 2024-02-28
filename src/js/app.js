import Magician from "./class/magician.js";

const Gendalf = new Magician('Gendalf', 'Magician')

Gendalf.distance(4)
console.log(Gendalf)

Gendalf.distance(4)
Gendalf.stoned(true)
console.log(Gendalf)

Gendalf.stoned(false)
console.log(Gendalf)


const Emon = new Magician('Emon', 'Daemon')

Emon.distance(2)

console.log(Emon)