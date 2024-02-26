console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100 ; 1++ ) {
    
    if (i % 2 == 0) {
        continue;
    }
    else {
        console.log (i)
    }
} 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100;i++){
    if(i % 3 === 0 && i % 5 === 0) {
        Console.Log ("FizzBuzz");
    }
    else if ( i % 3 === 0) {
        Cosole.Log ("Fizz")
    }
    else if (i % 5 === 0) {
        Console.Log ("Buzz")
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 1
while (i < 100) {
    if (i % 2 == 0){
        
        1++
        continue
    }
    Console.Log (i);
    i++
}


let r = 1
do {
    if(r % 3 === 0 && r % 5 === 0) {
        Console.Log ("FizzBuzz");
    }
    else if ( r % 3 === 0) {
        Cosole.Log ("Fizz")
    }
    else if (r % 5 === 0) {
        Console.Log ("Buzz")
    }
    Console.Log(r)
    r++
}while (r < 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 

let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 1; i <= n; i++) {
    if (i == value) {
        Console.Log ('search the number ${value}!');
        break;
    }

    if (i == n) {
        Console.Log ('Did not find ${value} within 1 ${n}.')
    }
}
