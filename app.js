/*
    Author: devCodeCamp
    Description: Most Wanted Starter Code
*/
//////////////////////////////////////////* Beginning Of Starter Code *//////////////////////////////////////////

"use strict";
//? Utilize the hotkey to hide block level comment documentation
////* Mac: Press "CMD"+"K" and then "CMD"+"/"
////* PC: Press "CTRL"+"K" and then "CTRL"+"/"

/**
 * This is the main logic function being called in index.html.
 * It operates as the entry point for our entire application and allows
 * our user to decide whether to search by name or by traits.
 * @param {Array} people        A collection of person objects.
 */
function app(people) {
    // promptFor() is a custom function defined below that helps us prompt and validate input more easily
    // Note that we are chaining the .toLowerCase() immediately after the promptFor returns its value
    let searchType = promptFor(
        "Do you know the name of the person you are looking for? Enter 'yes' or 'no'",
        yesNo
    ).toLowerCase();
    let searchResults;
    // Routes our application based on the user's input
    switch (searchType) {
        case "yes":
            searchResults = searchByName(people);
            break;
        case "no":
            
        function searchByTraits(_multipletraits){

        }
        
        //! TODO #4: Declare a searchByTraits (multiple traits) function //////////////////////////////////////////
                //! TODO #4a: Provide option to search for single or multiple //////////////////////////////////////////
            searchResults = searchByTraits(people);
            break;
        default:
            // Re-initializes the app() if neither case was hit above. This is an instance of recursion.
            app(people);
            break;
    }
    // Calls the mainMenu() only AFTER we find the SINGLE PERSON
    mainMenu(searchResults, people);
}
// End of app()

/**
 * After finding a single person, we pass in the entire person-object that we found,
 * as well as the entire original dataset of people. We need people in order to find
 * descendants and other information that the user may want.
 * @param {Object[]} person     A singular object inside of an array.
 * @param {Array} people        A collection of person objects.
 * @returns {String}            The valid string input retrieved from the user.
 */
function mainMenu(person, people) {
    // A check to verify a person was found via searchByName() or searchByTrait()
    if (!person[0]) {
        alert("Could not find that individual.");
        // Restarts app() from the very beginning
        return app(people);
    }
    let displayOption = prompt(
        `Found ${person[0].firstName} ${person[0].lastName}. Do you want to know their 'info', 'family', or 'descendants'?\nType the option you want or type 'restart' or 'quit'.`
    );
    // Routes our application based on the user's input
    switch (displayOption) {
        case "info":
        //! TODO #1: Utilize the displayPerson function //////////////////////////////////////////
            // HINT: Look for a person-object stringifier utility function to help

            let personInfo = displayPerson(person[0]);
            alert(personInfo);
        
        
        break;
        
        case "family":
            //! TODO #2: Declare a findPersonFamily function //////////////////////////////////////////
            // HINT: Look for a people-collection stringifier utility function to help



            
            
            
            
            break;
            case "descendants":
            //! TODO #3: Declare a findPersonDescendants function //////////////////////////////////////////
            // HINT: Review recursion lecture + demo for bonus user story
            let personDescendants = findPersonDescendants(person[0], people);
            alert(personDescendants);
            break;
        case "restart":
            // Restart app() from the very beginning
            app(people);
            break;
        case "quit":
            // Stop application execution
            return;
        default:
            // Prompt user again. Another instance of recursion
            return mainMenu(person, people);
    }
}
// End of mainMenu()

/**
 * This function is used when searching the people collection by
 * a person-object's firstName and lastName properties.
 * @param {Array} people        A collection of person objects.
 * @returns {Array}             An array containing the person-object (or empty array if no match)
 */
function searchByName(people) {
    let firstName = promptFor("What is the person's first name?", chars);
    let lastName = promptFor("What is the person's last name?", chars);

    // The foundPerson value will be of type Array. Recall that .filter() ALWAYS returns an array.
    let foundPerson = people.filter(function (person) {
        if (person.firstName === firstName && person.lastName === lastName) {
            return true;
        }
    });
    return foundPerson;
}
// End of searchByName()

/**
 * This function will be useful for STRINGIFYING a collection of person-objects
 * first and last name properties in order to easily send the information
 * to the user in the form of an alert().
 * @param {Array} people        A collection of person objects.
 */
function displayPeople(people) {
    alert(
        people
            .map(function (person) {
                return `${person.firstName} ${person.lastName}`;
            })
            .join("\n")
    );
}
// End of displayPeople()

/**
 * This function will be useful for STRINGIFYING a person-object's properties
 * in order to easily send the information to the user in the form of an alert().
 * @param {Object} person       A singular object.
 */
function displayPerson(person) {
    let personInfo = `First Name: ${person.firstName}\n`;
    personInfo += `Last Name: ${person.lastName}\n`;
    personInfo += `gender: ${person.gender}\n`;
    personInfo += `dob:${person.dob}\n`;
    personInfo += `height:${person.height}\n`;
    personInfo += `weight:${person.weight}\n`;
    personInfo += `eyeColor:${person.eyeColor}\n`;
    personInfo += `occupation:${person.occupation}\n`;
    personInfo += `parents:${person.parents}\n`;
    personInfo += `currentSpouse:${person.currentSpouse}\n`;

console.log(person, personInfo);
   
   
    //! TODO #1a: finish getting the rest of the information to display //////////////////////////////////////////
    alert(personInfo);
}
// End of displayPerson()

/**
 * This function's purpose is twofold:
 * First, to generate a prompt with the value passed in to the question parameter.
 * Second, to ensure the user input response has been validated.
 * @param {String} question     A string that will be passed into prompt().
 * @param {Function} valid      A callback function used to validate basic user input.
 * @returns {String}            The valid string input retrieved from the user.
 */
function promptFor(question, valid) {
    do {
        var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
}
// End of promptFor()

/**
 * This helper function checks to see if the value passed into input is a "yes" or "no."
 * @param {String} input        A string that will be normalized via .toLowerCase().
 * @returns {Boolean}           The result of our condition evaluation.
 */
function yesNo(input) {
    return input.toLowerCase() === "yes" || input.toLowerCase() === "no";
}
// End of yesNo()

/**
 * This helper function operates as a default callback for promptFor's validation.
 * Feel free to modify this to suit your needs.
 * @param {String} input        A string.
 * @returns {Boolean}           Default validation -- no logic yet.
 */
function chars(input) {
    return true; // Default validation only
}
// End of chars()

//////////////////////////////////////////* End Of Starter Code *//////////////////////////////////////////
// Any additional functions can be written below this line 👇. Happy Coding! 😁

// function findPersonFamily(person, people){
    
//     let personFamily = findPersonFamily.filter(person[0], people);
//     if (element === spouse + parents + siblings){
//         return true;

//     }
//     else {
//         return false
//     }
//     alert(personFamily);
//     }

            
//searchByEyeColor
function searchByEyeColor(people) {
    let eyeColor = promptFor("What is the person's eye color?", chars);
    let foundeyeColor = people.filter(function (person) {
        if (person.eyeColor === eyeColor){
            return true;
        }
    });
    return foundeyeColor;
}

function searchBygender(people) {
    let gender = promptFor("What is the person's Gender?", chars);
    let foundgender = people.filter(function (person) {
        if (person.gender === gender){
            return true;
        }
    });
    return foundgender;
}

function searchBydob(people){
    let dob = promptFor("what is the person's dob?", chars);
    let founddob = people.filter(function (person) {
        if (person.dob === dob) {
            return true;
        }
    });
    return founddob;
}

function searchByheight(people){
    let height = promptFor("What is the person's height?", chars);
    let foundheight = people.filter(function (person) {
        if (person.height === height) {
            return true;
        }
    });
    return foundheight;
}

function searchByweight(people){
    let weight = promptFor("What is the person's weight?", chars);
    let foundweight = people.filter(function (person){
        if (person.weight === weight){
            return true;
        }
    });
    return foundweight;
}

function searchByoccupation(people){
    let occupation = promptFor("What is the person's occupation?", chars);
    let foundoccupation = people.filter(function (person){
        if (person.occupation === occupation){
            return true;
        }
    });
    return foundoccupation;
}

function searchByparents(people){
    let parents = promptFor("Who is this person's parents?", chars);
    let foundparents = people.filter(function (person){
        if (person.parents === parents){
            return true;
        }
    });
return foundparents;
}

function searchBycurrentSpouse(people){
    let currentSpouse = promptFor("Who is this person's current spouse?", chars);
    let foundcurrentSpouse = people.filter(function (person){
        if (person.currentSpouse === currentSpouse){
            return true;
        }
    });
return foundcurrentSpouse;
}

function searchByid(people){
    let id = promptFor("What is this person's id?", chars);
    let foundid = people.filter(function (person){
        if (person.id === id){
            return true;
        }
    });
return foundid;
}

console.log(people, personInfo);
//! TODO #2: Declare a findPersonFamily function //////////////////////////////////////////
            // HINT: Look for a people-collection stringifier utility function to help

function findPersonFamily(person, family) {
    if (!person[0]) {
        alert("Could not find that individual.");

        return app(family);
    }
    let displayOption = prompt(
        `Found ${person[0].family}. Do you want to know their 'info', 'family', or 'descendants'?\nType the option you want or type 'restart' or 'quit'.`
    );
} 
//How do I get this function to pull in parents and current spouse?
//create a search by function for family

function searchByfamily(people){
    let family = promptFor("Who is this person's family?", chars);
    let foundfamily = people.filter(function (person){
        if (person.currentSpouse === family){
            return true;
        }
    });
return foundfamily;
}

//how do I get parents and current spouse into this search function?

function findPersonFamily(people) {
    alert(
        people
            .map(function (person) {
                return `${person.parents} ${person.currentSpouse}`;
            })
            .join("\n")
    );
}


//let foundparents = people.filter(function (person) {
  //  if (person.parents === person.parents === parents) {
   //     return true;
  //  }
//});
//return foundparents;

//}

function searchBycurrentSpouse(people){
    let currentSpouse = promptFor("Who is this person's current spouse?", chars);
    let foundcurrentSpouse = people.filter(function (person){
        if (person.currentSpouse === currentSpouse){
            return true;
        }
    });
}
    
    function searchByparents(people){
        let parents = promptFor("Who is this person's parents?", chars);
        let foundparents = people.filter(function (person){
            if (person.parents === parents){
                return true;
            }
        });
    }  

    const PersonFamily = ['parents', 'curentSpouse'];
console.log(PersonFamily.includes('currentSpouse'));
console.log(PersonFamily.includes('parents'));

// Expected output: true









const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false