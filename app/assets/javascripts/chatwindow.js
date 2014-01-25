var chatwindow = {
    statistics: {
        frequencies: {},
        avg_length: 0
    },
    
    allresponses: [],

    currenttype: "first",

    userSays: function(userinput) {
        $(".chatwindow").append("<span>You: </span>" + userinput + "<br>");
        $(".chatwindow").animate({scrollTop: $('.chatwindow').prop("scrollHeight")}, 500);
        $('input[name=inputtext]').val('');
    },

    botSays: function(text) {
        $(".chatwindow").append("<span>MatchBot: </span>" + text + "<br>");
        $(".chatwindow").animate({scrollTop: $('.chatwindow').prop("scrollHeight")}, 500);
        $('input[name=inputtext]').val('');
    },

    send_and_get_line: function(userinputobj) {
        //send line of conversation, get response
        response = $.get("/bot", JSON.stringify(userinputobj));
        return response;
    },

    getBot: function(userinput) {
        
        // gets bot's response
        //var botresponse = this.send_and_get_line(userinput);
        var botresponse = {msg: "temporary placeholder", cat: "msg"}
        currentype = botresponse.cat
        this.botSays(botresponse.msg);
    },
    calculate: function(userinput, whatthebotsaid) {
        // update statistics
        whatthebotsaid = {};

        var words = userinput.split(" ");
        words.forEach(function(word) {
            if (word in chatwindow) {
                chatwindow[word] += 1;
            }
            else if (! word in whatthebotsaid) {
                chatwindow[word] = 1;
            }
        })
        return userinput;
    },
    final_calculations: function() {
        // called right before sending, to calculate avg line lengths
        var total = 0.0;
        allresponses.forEach(function (response) {
            total += response.length;
        });
        statistics.avg_length = total/response.length;

        // punctuation per 
    },

    send_data: function() {
        //send statistics to rails
        $.ajax({
            type: "POST",
            url: "/AcceptConvo",
            data: JSON.stringify(statistics),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            failure: function(errMsg) {
                alert("Connection Error: Chat data not sent");
            }
        });
    },

    end_seq: function() {
        this.botSays("Wow, thanks for sticking to the end. One last thing - we need your e-mail so that future matches can contact you. What's your e-mail?");
        var validemail = false;
        while (!validemail) {
            $("#userinput").keypress(function(e) {
                var uIn;
                if(e.which == 13) {
                    uIn = $('input[name=inputtext]').val();
                }
                appendWindow(uIn);
                if (isEmail(uIn)) {
                    validemail = true;
                }
                else {
                    manualtext("Oh no! Not an e-mail! Try again?");
                }
            });

        }
        
        //reroute to matches
    },
};

function isEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
};