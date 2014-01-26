var commentObj = {
    comment: "",
    email: "",
};

$(document).ready(function() {
	
    // Message handlers
    chatwindow.botSays("So you want to talk! What would you like to say?");

    $("#userinput").keypress(function(e) {
        if(e.which == 13) {
        	var toAdd = $('input[name=inputtext]').val();
            commentObj.comment = toAdd;
            chatwindow.allresponses.push(toAdd);

            chatwindow.userSays(toAdd);
        }
    });
	
});