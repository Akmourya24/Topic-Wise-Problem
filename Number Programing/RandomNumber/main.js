// How to generate random number in given range using JavaScript ?

function random(Min, Max){
    return Math.floor(Math.random()*(Min-Max)+Max);
}
console.log(random(1,10))

function random(Min, Max){
    return Math.ceil(Math.random()*(Min-Max)+Max);
}
console.log(random(1,10))