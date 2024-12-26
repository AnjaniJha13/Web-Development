let randomInt = () => Math.floor(Math.random() * 3) + 1;
let adjective = randomInt() === 1 ? "Crazy" : randomInt() === 2 ? "Amazing" : "Fire";
let shopName = randomInt() === 1 ? "Engine" : randomInt() === 2 ? "Foods" : "Garments";
let anotherWord = randomInt() === 1 ? "Bros" : randomInt() === 2 ? "Limited" : "Hub";
console.log(adjective + shopName + anotherWord);