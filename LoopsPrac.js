// Sequentially print all positive, odd numbers less than 20:

for(var num = 1; num < 20; num+=2){
   console.log(num);
}

// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way

var sum = 0;

for(var num = 1; num <= 5; num++){
   sum = sum + num;
   console.log("Num: " + num + ", Sum: " + sum);
}