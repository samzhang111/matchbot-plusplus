// create javascript object that does preprocessing
// freqdict: [{"word": 1}, {"I", 1}]
// total chars: 0; <how do we know when sentence ends?
//    for avg sentence length.
// total punctuation: 0 <for punctation/total chars

var allresponses = [];

$(document).ready(function() {

    // Message handlers
    chatwindow.botSays("Tell me about yourself!");

    $("#userinput").keypress(function(e) {
        if(e.which == 13) {
            var uIn = $('input[name=inputtext]').val();
            chatwindow.userSays(uIn);
            chatwindow.getBot(uIn);
            chatwindow.calculate(uIn);
        }
    });
});