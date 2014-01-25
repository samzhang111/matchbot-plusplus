$(document).ready(function() {


    // Message handlers
    $(".chatwindow").append("<span> MatchBot: </span> What can I help you with? <br>");

    $("#userinput").keypress(function(e) {
        if(e.which == 13) {
        	var toAdd = $('input[name=inputtext]').val();
            chatwindow.appendWindow(toAdd);
        }
    });
	
});