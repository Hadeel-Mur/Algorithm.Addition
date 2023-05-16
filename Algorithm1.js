// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible 
// by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.




// Pseudocode
// 1-for Loop
// 2-if statment

// coding

let sum = 0;

for (let i= 200; i<= 2700; i++ ){
   if ((i % 3===0 || i%5 === 0) && !(i % 3===0 && i%5 === 0)){
    sum+= i
    console.log(i);
   }
}

// Diagram
//1- here the logical operator || will check whether is i divisible by 3 or 5 and and (&& !) NOT both of them
//2- the sum Variable will store the value od adding numbers between 200 till 2700