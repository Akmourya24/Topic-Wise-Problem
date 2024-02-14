// JavaScript Program to Print All Prime Numbers in an Interval

// Using Trial Division Method

function isPrime() {
    let a, b, i, j, flag;
    a = 1;
    b = 50;

    for (i = a; i <= b; i++) {
        if (i == 1 || i == 0)
            continue;
        flag = 1; 

        for (j = 2; j <= i/ 2; ++j) {
            if (i % j == 0) 
            flag = 0;
            break;
        }
    }
    
    if (flag == 1)
    console.log(i)
}
isPrime()

// Optimized Solution
// Using the Sieve of Eratosthenes” algorithm
