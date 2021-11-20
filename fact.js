//to find the factorial of a give number using recursion

 function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    
    }else{
        return n * factorial(n-1);s
    }
}
let n = 5;
answer = factorial(n)
console.log(answer);