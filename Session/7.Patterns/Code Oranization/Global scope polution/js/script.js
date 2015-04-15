/* the global variable */
var partyStarter = "McDonaldglobal";

/* a function to determine how many pieces of pizza everyone can have */

function pizzaParty(totalSlices, peopleCount){

    "use strict";
    /* at this point the partyStarter variable is available because it's global */
    var fairness = totalSlices / peopleCount;

    // at this point fairness is set to a value
    return fairness;

}

/* wrap script in an anonymous function because we do that */

(function(){
    
    "use strict";

    /* at this point the mcDonald variable is available because it's global */

    var body = document.getElementsByTagName("body")[0],
        partyStarter = "McDonald"; // push global variable in anonymous function for clean code

    
    // call the function with arguments to output thr returned value
    body.innerHTML = "<p>Dear " + partyStarter + ", Each person can have " +
        pizzaParty(32, 10) + " pieces of pizza</p>";
    
    /* at this point "fairness is undefined" because it is 
     contained within the pizzaParty() function */

})(); // close anonymous function