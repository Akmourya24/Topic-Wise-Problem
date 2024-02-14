
document.getElementById("btn").onclick= function () {
    
    let userNum = prompt("Enter your Number");

    
    let guess = 1;
    let random = Math.random() * 100;

    if (userNum < random) {
        alert("Your Number is Low:" + userNum)
        guess++;

    }
    else if (userNum > random) {
        alert("Your Number is High:" + userNum)
        guess++;

    }
    else {
        alert("CONGRATULATIONS! You are Correct " + userNum + "=" + random)
        guess++;
    }


    console.log(guess, "time are you right")
}