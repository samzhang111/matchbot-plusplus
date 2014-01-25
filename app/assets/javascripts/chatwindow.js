var chatwindow = {
    statistics: {
        frequencies: {},
        avg_length: 0
    },

    allresponses: [],

    currenttype: "",

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

    getBot: function(userinput) {
        // gives bot userinput
        this.allresponses.push(userinput);
        // gets bot's response
        var botresponse = "Okay.";
        this.botSays(botresponse);
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

    send_and_get_line: function(userinputobj) {
        //send line of conversation, get response
        userinputobj = {
            msg: "hello, this is a test message from the user.",
            type: "msg",
        };
        response = $.get("/bot", JSON.stringify(userinputobj));
        return response;
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
        botSays("Great! Email?");
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
    }
};

function isEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
};