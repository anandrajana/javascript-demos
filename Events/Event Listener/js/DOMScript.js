(function(){
    var txtbox = document.getElementById("txtbox");
    eventUtility.addEvent(txtbox,"keypress",	function(evt){
		var code=eventUtility.getCharCode(evt);
		// A=65 Z=90 a=97  z=122  0=48  9=57
		alert(code);

        // allow only chars 
		if ((code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
		    // do not do anything
		}
		else {		    
		    eventUtility.preventDefault(evt);
		}
	},false);
})();
