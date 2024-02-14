// Check a number is Prime or not using JavaScript


// Naive approach




// Efficient appraoch


function isPrime(n) {
 let val= Math.sqrt(n);
    for(let i=2;i<=val;i++){
        if(n%i==0){
            return true;
        }
    } 
    return false;

}
function thisPrime(){
    let num =11;
    if(num%2===0){
        console.log("this is not a prime number")
    }
    else if(isPrime(num)){
        console.log("this is not a prime number")
    }
    else{
        console.log("this is prime number")
    }

}
thisPrime()

