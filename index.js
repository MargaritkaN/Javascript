"use strict";
const manName = 'Чендлер';
const womanName = 'Моника';
const dogName = 'Добби';
let nameOfHouse = 'Sweet home';
let inhabitants = 2;
const rack = 'Стеллаж';
const sofa = 'Диван';
const armchair = 'Кресло';
const stool = 'Табурет';
const coffeTable = 'Журнальный столик';
let lamps = '2';
let books = '10';
let dishes = '14';
let pottedFlowers = '3';
let carpet = '1';
let vases = '8';
let pillows = '2'
let windows = undefined;
let doors = undefined;
let rooms = undefined;
console.log(`Добро пожаловать в дом ${womanName} и ${manName} , а также их собаки ${dogName}!`);
console.log(`В квартире живет ${inhabitants} человек. Их зовут ${womanName} и ${manName}`);
console.log(`В комнате есть следующая мебель: ${rack},${sofa},${armchair},${stool},${coffeTable}`);
console.log(`И столько элементов декора:${lamps}+${books}+${dishes}+${pottedFlowers}+${carpet}+${vases}+${pillows}`);
console.log(`У нас есть следующие типы переменных:${typeof manName}, ${typeof dishes}, ${typeof rooms}.`);

let homeType;
if(inhabitants<=2){
   homeType ='Это студия';
}
else{
    homeType ='Это многокомнатная квартира';
}
alert(homeType);

let firstName;
let secondName;
if(manName>womanName) {
    firstName=womanName;
    secondName=manName;
}
else{
    firstName=manName;
    secondName=womanName;
}
alert(`Добро пожаловать в дом ${firstName} и ${secondName}, а также их собаки ${dogName}!`);

let decor;
if (lamps+books+dishes+pottedFlowers+carpet+vases+pillows<20) {
    decor = 'Квартира в стиле минимализм';  
}
else if(lamps+books+dishes+pottedFlowers+carpet+vases+pillows>=20 && lamps+books+dishes+pottedFlowers+carpet+vases+pillows<=40){
    decor = 'Квартира в стиле модерн';
}
else{
    decor = 'Квартира в стиле классика';
}
alert(decor);






