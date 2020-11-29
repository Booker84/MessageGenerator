let word1 = ["The", "A", "This"];
let word2 = ["Cat", "Dog", "Rabbit", "Man", "Duck", "Pig", "Goat", "Cow", "Woman", "Girl", "Boy"];
let word3 = ["stood", "sat", "ran",];
let word4 = ["on", "with"];
let word5 = ["the", "a", "this"];
let word6 = ["Cat", "Dog", "Rabbit", "Man", "Duck", "Pig", "Goat", "Cow", "Woman", "Girl", "Boy"];

let randomWord1 = word1[Math.floor(Math.random()*word1.length)];
let randomWord2 = word2[Math.floor(Math.random()*word2.length)];
let randomWord3 = word3[Math.floor(Math.random()*word3.length)];
let randomWord4 = word4[Math.floor(Math.random()*word4.length)];
let randomWord5 = word5[Math.floor(Math.random()*word5.length)];
let randomWord6 = word6[Math.floor(Math.random()*word6.length)];

let newMessage = [];
newMessage.push(randomWord1, randomWord2, randomWord3, randomWord4, randomWord5, randomWord6);
console.log(newMessage);

let finalMessage = newMessage.join(" ")
console.log(finalMessage + ".");