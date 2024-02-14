// How to find the area of a triangle using JavaScript ?

// When height is known

function area(base){
    let height = 5;
return 1/2*(base*height);


}
console.log(area(10))
console.log(area(15))


// When all sides are known

function allSides(s1,s2,s3){

    let sum =(s1+s2+s3)/2;

    let equal = (sum-s1)*(sum-s2)*(sum-s3);
    return Math.sqrt(sum*equal);

}
let s1,s2,s3;
s1=4;
s2=5;
s3=3;
console.log(allSides(s1,s2,s3))