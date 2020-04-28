/* 

Part 1

88 – 100 A
80 – 87 B
68 – 79 C
60 – 67 D
0 – 59 F

Numbers that are less than 0 or greater than 100 
should display “Invalid number for a grade”.
*Note: Assume if a number is entered, 
the number will always be a whole number 

*/

// Part 3: putting the code in a loop


let cont = true;

while (cont){
        

let Grade = prompt("Enter a number/letter grade here (Q to quit):");

if (Grade < 0){
    alert("Invalid number for a grade. Try Again.");
}

    else if (Grade > 100){
        alert("Invalid number for a grade. Try Again.");
    }

    else if (Grade >= 88){
        prompt("A");
    }

    else if (Grade >= 80){
        prompt("B");
    }

    else if (Grade >= 68){
        prompt("C");
    }

    else if (Grade >= 60){
        prompt("D");
    }

    else if (Grade >= 0){
            prompt("F");
    }

/*  
    Part 2

    If the user enters something that is not 
    a number, you need to check if 
    it’s a valid letter grade. 
    If it is, then display the 
    correct message.
    
    A Excellent job
    B Good Work
    C You need to put in more effort
    D Uh oh, you should be reading and getting assignments in
    F Please see the instructor
    All other string input should say “Invalid grade” 
    
    */
    
    else if (Grade == "A" || Grade == "a"){
        prompt("Excellent Job");
    }

    else if (Grade == "B" || Grade == "b"){
        prompt("Good Work");
    }

    else if (Grade == "C" || Grade == "c"){
        prompt("You need to put in more effort");
    }

    else if (Grade == "D" || Grade == "d"){
        prompt("Uh oh, you should be reading and getting assignments in");
    }

    else if (Grade == "F" || Grade == "f"){
        prompt("Please see the instructor");
    }

    else if (Grade == "q" || Grade == "Q"){
        cont = false;
    }

else {
    prompt("Invalid grade");
}

}