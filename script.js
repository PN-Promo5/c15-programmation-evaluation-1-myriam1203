// EXERCICE 1 //

// QUESTION 1.1 //

// FORM //

let form1 = document.createElement("form");
form1.style.display = "inherit";
document.body.appendChild(form1);

// FIRST NAME //

let firstName = document.createElement("p");
form1.appendChild(firstName);

let labelFirstName = document.createElement("label");
labelFirstName.setAttribute("for", "firstName");
labelFirstName.textContent = "Quel est votre prénom ? :";
firstName.appendChild(labelFirstName);

let inputFirstName = document.createElement("input");
inputFirstName.type = "text";
inputFirstName.name = "firstName";
firstName.appendChild(inputFirstName);

// LAST NAME //

let lastName = document.createElement("p");
form1.appendChild(lastName);

let labelLastName = document.createElement("label");
labelLastName.setAttribute("for", "Name");
labelLastName.textContent = "Quel est votre nom ? :";
lastName.appendChild(labelLastName);

let inputLastName = document.createElement("input");
inputLastName.type = "text";
inputLastName.name = "LastName";
lastName.appendChild(inputLastName);

// BUTTON OK //

let validation1 = document.createElement("p"); // CREATE ELEMENT
form1.appendChild(validation1); // ADD TO THE FORM

let buttonValidation1 = document.createElement("input");
buttonValidation1.type = "button";
buttonValidation1.name = "buttonForm";
buttonValidation1.value = "OK";
validation1.appendChild(buttonValidation1);

// 1.2 //

// ERROR MESSAGE //

let errorMessage = document.createElement("p");
errorMessage.style.display = "none";
errorMessage.textContent = "Veuillez remplir les 2 champs avant de valider";
form1.appendChild(errorMessage); // ADD TO THE FORM

// SCREEN 2 //

let form2 = document.createElement("div");
form2.style.display = "none";
document.body.appendChild(form2); // ADD TO THE FORM//

let hello = document.createElement("p");
hello.textContent="Bonjour";
form2.appendChild(hello);// ADD TO THE FORM

// CLICK OK CONTINUE //

buttonValidation1.addEventListener("click", changement1, false);

function changement1() {
if (inputFirstName.value.length !== 0 && inputLastName.value.length !== 0 ){
  form1.style.display = "none";
  form2.style.display = "inherit";
  let valueFirstName = inputFirstName.value
  let valueLastName = inputLastName.value
  hello.textContent="Bonjour " + valueFirstName + " " + valueLastName + " !" ;
}
 else {
   errorMessage.style.display = "inherit";
}
}

/*EXERCICE 2*/

/* CREATION Form*/

let formGeneralSalary = document.createElement("form");
formGeneralSalary.style.display = "inherit"; // POST IT
document.body.appendChild(formGeneralSalary); // ADD TO THE FORM

/*CREATION grossMonthlySalary */

let grossMonthlySalary = document.createElement("p");
formGeneralSalary.appendChild(grossMonthlySalary); // ADD TO THE FORM

let labelGrossMonthlySalary = document.createElement("label");
labelGrossMonthlySalary.setAttribute("for", "grossMonthlySalary");
labelGrossMonthlySalary.textContent = "Salaire mensuel brut";
grossMonthlySalary.appendChild(labelGrossMonthlySalary); // ADD TO THE FORM

let inputGrossMonthlySalary = document.createElement("input");
inputGrossMonthlySalary.type = "text";
inputGrossMonthlySalary.name = "grossMonthlySalary";
grossMonthlySalary.appendChild(inputGrossMonthlySalary); // ADD TO THE FORM

/*CREATION netMonthlySalary */

let netMonthlySalary = document.createElement("p");
formGeneralSalary.appendChild(netMonthlySalary); // ADD TO THE FORM

let labelNetMonthlySalary = document.createElement("label");
labelNetMonthlySalary.setAttribute("for", "netMonthlySalary");
labelNetMonthlySalary.textContent = "Salaire mensuel net";
netMonthlySalary.appendChild(labelNetMonthlySalary); // ADD TO THE FORM

let inputNetMonthlySalary = document.createElement("input");
inputNetMonthlySalary.type = "text";
inputNetMonthlySalary.name = "netMonthlySalary";
netMonthlySalary.appendChild(inputNetMonthlySalary); // ADD TO THE FORM

/*CREATION grossAnnualSalary */

let grossAnnualSalary = document.createElement("p");
formGeneralSalary.appendChild(grossAnnualSalary); // ADD TO THE FORM

let labelGrossAnnualSalary = document.createElement("label"); // CREATE ELEMENT
labelGrossAnnualSalary.setAttribute("for", "grossAnnualSalary");
labelGrossAnnualSalary.textContent = "Salaire annuel brut"; // ADD TEXT
grossAnnualSalary.appendChild(labelGrossAnnualSalary); // ADD TO THE FORM

let inputGrossAnnualSalary = document.createElement("input");
inputGrossAnnualSalary.type = "text"; // ADD TYPE
inputGrossAnnualSalary.name = "grossAnnualSalary";
grossAnnualSalary.appendChild(inputGrossAnnualSalary); // ADD TO THE FORM

/*CREATION netAnnualSalary */

let netAnnualSalary = document.createElement("p");
formGeneralSalary.appendChild(netAnnualSalary);

let labelNetAnnualSalary = document.createElement("label");
labelNetAnnualSalary.setAttribute("for", "netAnnualSalary");
labelNetAnnualSalary.textContent = "Salaire annuel net";
netAnnualSalary.appendChild(labelNetAnnualSalary); // ADD TO THE FORM

let inputNetAnnualSalary = document.createElement("input");
inputNetAnnualSalary.type = "text";
inputNetAnnualSalary.name = "netAnnualSalary";
netAnnualSalary.appendChild(inputNetAnnualSalary);

/*Action performed when a value is entered*/
inputGrossMonthlySalary.addEventListener("change", complete, false); // EVENT LISTENER FOR THE FUNCTION

inputNetMonthlySalary.addEventListener("change", complete, false);

inputGrossAnnualSalary.addEventListener("change", complete, false);

inputNetAnnualSalary.addEventListener("change", complete, false);

  // function //

function complete() {
  if (inputGrossMonthlySalary.value.lenght !== 0 && inputGrossMonthlySalary.value === 0 && inputGrossAnnualSalary.value.lenght === 0 && inputNetAnnualSalary.value.lenght === 0) {

    let valueGrossMonthlySalary = inputGrossMonthlySalary.value;
    let valueNetMonthlySalary = valueGrossMonthlySalary / 1.298;
    inputnetMonthlySalary.value = valueNetMonthlySalary;

    let valueGrossAnnualSalary = valueGrossMonthlySalary * 12;
    inputGrossAnnualSalary.value = valueGrossAnnualSalary; // PUT VALUES

    let valueNetAnnualSalary = (valueGrossMonthlySalary / 1.298) * 12;
    inputNetAnnualSalary.value = valueNetAnnualSalary


  } else if (inputGrossMonthlySalary.value.lenght === 0 && inputGrossMonthlySalary.value !== 0 && inputGrossAnnualSalary.value.lenght === 0 && inputNetAnnualSalary.value.lenght === 0) {

  }
}

// EXERCICE 3 //

function displayEvenElementsOfArray(array){
  let i = 0; // CREATE I INDICE 0
  let currentElmt; // SAVE CURRENT ELEMENT
  while (i < array.length) { //
    currentElmt = array[i]; //
    i++; // ADD
    if (currentElmt % 2 === 0) { // MAKE EVEN NUMBER
      console.log(currentElmt + " is an even number."); //
    } else {
      console.log(currentElmt + " is an odd number");
    }
  }
}

let array = [1,2,3,4,5,6,7,8,9,10]; // VALUES

displayEvenElementsOfArray(array);

// EXERCICE 4 //

function copyArrayConjonctionWords(array) {
  let i = 0;
  let currentElmt; // SAVE CURRENT ELEMENT
  let coordinationConjunctions = []; // WITH WORD COORDINATION CONJUNCTIONS
  while (i < array.length) {
    currentElmt = array[i];
    i++; // add
if (currentElmt.toLowerCase() == "but" ||
currentElmt.toLowerCase() == "yet" ||
currentElmt.toLowerCase() == "for" ||
currentElmt.toLowerCase() == "and" ||
currentElmt.toLowerCase() == "nor" ||
currentElmt.toLowerCase() == "so" ||
currentElmt.toLowerCase() == "or") { // PUT WORD CONJONCTION WITH IF

  return coordinationConjuctions ; // RETURN THE FONCTION
}
  }
}


// EXERCICE 5 //

function randomWholeNumber () {
  let i = 0;
  let currentElmt; // SAVE CURRENT ELEMENT
  let randomNumbers = []; // WITH WORD COORDINATION CONJUNCTIONS
  while (i < array.length) {
    currentElmt = array[i];
    i++; // add
     randomNumbers.push(currentElmt); // ADD AND RETURN LENGHT ARRAY

 return Math.floor(Math.random() * (128 - 1 + 1)) + 1; // GENERATE RANDOM WHOLE NUMBER
}
  let wholeNumber = randomWholeNumber(1, 128);
}
