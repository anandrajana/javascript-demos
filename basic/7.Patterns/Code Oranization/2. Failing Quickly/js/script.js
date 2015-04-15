
/* determine  how many slices of pizza each person can eat */

function pizzaParty(totalSlices, peopleCount) {

    "use strict";
    
    // take the arguments and decided how many piece per person is fair
    var fairness = totalSlices / peopleCount;

    // make the fairness value available
    return fairness;

}

/* wrap script in an anonymous function because we do that */

(function(){
    
    "use strict";
    
    var body = document.getElementsByTagName("body")[0], // target element
        partyStarter = "McDonald", // name of the person running the party
        peopleCount = 10, // the amount of people coming to the party
        pizzaCount = 4, // the amount of pizza partyStarter is ordering
        sliceCount = pizzaCount * 8; // the amount of slices available

    // make sure people are coming and pizza is being ordered

    // Failing Quickly  - check and proceed
    if(peopleCount > 0 && pizzaCount > 0) {
        
        // call the function with arguments to output the returned value
        body.innerHTML += "<p>Dear " + partyStarter + ", Each person can have " +
            pizzaParty(sliceCount, peopleCount) + " pieces of pizza</p>";
        
    } else {
        
        // create a fallback message
        body.innerHTML += "<p>You need to either invite people or order pizza</p>";
        
    }

})(); // close anonymous function