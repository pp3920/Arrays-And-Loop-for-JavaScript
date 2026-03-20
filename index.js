
/*    TASK 1
Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
Format the firstName and lastName so that the first letter of each is always capatilized.
Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”
*/

function formatFullName(first_Name, Last_Name) {

    if ((first_Name === " ") || (Last_Name === " ")) {
        console.log("invalid input......");
    }

    else {
        let FN = first_Name.charAt(0).toUpperCase() + first_Name.slice(1);
        let LN = Last_Name.charAt(0).toUpperCase() + Last_Name.slice(1);
        let fullName = LN + "," + FN
        console.log(fullName);
    }
}

/* Test  Case -----uncomment these lines to test the scenerio-----*/

// let result = formatFullName("priyanka", "pandey");                //valid case
// let result2 = formatFullName(" ", "pandey"); //                  //invalid case
// console.log(result);                                              //print result of the program


/************************************ TASK 2 ********************************************************************************** */

/*             
Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”
*/


let totalCost = 0;
function calculateTotalCost(price, quantity, taxRates) {


    if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRates !== "number") {
        console.log("Invalid Input");
    }

    totalCost = (price * quantity) * (1 + taxRates)
    return totalCost;
}

/*    Test Cases */
//let result = calculateTotalCost("dd"," ","aa");      /* test case for invalid input */
let result = calculateTotalCost(10, 2, 2);            /*test case for valdi input*/
console.log( "result after total cost " +    result);                                  /* print the result of the program */




/*************************************** TASK 3*******************************************************************************************/

/*Write a function called checkEligibility that takes two parameters: age and isEmployed. 
The function should check if a person is eligible for a program based on the following rules:
If the person is over 18 and employed, they are eligible.
If the person is over 18 but unemployed, they are conditionally eligible.
If the person is 18 or younger, they are not eligible.
Return an appropriate string message for each scenario. 
*/


let isEmployed = 'true'


function checkEligibility(age, isEmployed) {
    if ((age > 18) && (isEmployed)) {
        console.log("you are eligible")
    }

    else if ((age > 18) && (!isEmployed)) {
        console.log("you are  eligible")
    }
    else {
        console.log("you are not  eligible")
    }

}


/*    Test Cases   (uncomment to test cases) */
// checkEligibility(19,true)            // If the person is over 18 and employed, they are eligible.
// checkEligibility(19,false)         //If the person is 18 or younger, they are eligible.
// checkEligibility(18,isEmployed)      //If the person is 18 or younger, they are not eligible.



/**************************************************************************TASK 4*********************************************************************************/
/*
Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
If no discount is provided, calculate the total cost as before.
*/


let TCost = 0;

function calculateTotalCostDiscount(price, quantity, taxRates, discount) {



    if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRates !== "number" || typeof discount !== "number") {
        console.log("Invalid Input");
    }

    TCost = (((price * quantity) * (1 + taxRates)) - discount);
    return TCost;
}

// /*    Test Cases */
// //let result_with_discount = calculateTotalCost("dd"," ","aa");              /* test case for invalid input */
let result_with_discount = calculateTotalCostDiscount(10, 2, 2, 1);              /*test case for valdi input*/
console.log("result after disc " + result_with_discount);                        /* print the result of the program */




