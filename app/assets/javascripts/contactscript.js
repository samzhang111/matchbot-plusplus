var commentObj = {
    comment: "",
    email: "",
};


$(document).ready(function() {
    var state = "first";
	
    // Message handlers
    chatwindow.botSays("So you want to talk! What would you like to say?");

    var sendComment = function(comment) {
        ///AJAX stuff here
        console.log("DO AJAX STUFF HERE");
    };

    $("#userinput").keypress(function(e) {
        if(e.which == 13) {
        	var toAdd = $('input[name=inputtext]').val();
            chatwindow.userSays(toAdd);

            if (state=="first") {
                commentObj.comment += toAdd + " ";
                state = "next";
                chatwindow.botSays("Okay. Anything else?");
            }

            else if (state == "next") {
                commentObj.comment += toAdd;
                chatwindow.botSays("Awesome, thanks. So that we can get back to you -- what's your e-mail?");
                state = "email";
            }

            else {
                if (isEmail(toAdd)) {
                    commentObj.email = toAdd;
                    chatwindow.botSays("Cool, thanks! Bye.");
                    sendComment(commentObj);
                    alert("Thanks for your feedback! Check out our About page.");
                    window.location.replace("about.html");
                }
                else {
                    chatwindow.botSays("Not an e-mail, dude. Try again?");
                }
            }
        }

    });
	
});