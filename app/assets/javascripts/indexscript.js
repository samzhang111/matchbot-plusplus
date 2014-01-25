// create javascript object that does preprocessing
// freqdict: [{"word": 1}, {"I", 1}]
// total chars: 0; <how do we know when sentence ends?
//    for avg sentence length.
// total punctuation: 0 <for punctation/total chars

var allresponses = [];

$(document).ready(function() {

    // Message handlers
    $(".chatwindow").append("<span> MatchBot: </span> Tell me about yourself! <br>");
    
    $("#userinput").keypress(function(e) {
        if(e.which == 13) {
            var toAdd = $('input[name=inputtext]').val();
            chatwindow.appendWindow(toAdd);
            chatwindow.calculate(toAdd);
        }
    });
});