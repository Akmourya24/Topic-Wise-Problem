// Split a number into individual digits using JavaScript


let number = 1234567890;

let n = number.toString().split('');
console.log(n)




function splitNumber() {
    let str = "1234567890";
    let arr = [];
    for (let i = 0,len = str.length; i < len; i += 1) {
     arr.push(str.charAt(i))
    }
    console.log(arr)
}
splitNumber()