var chatwindow = {
    statistics: {
        frequencies: {},
        nonstoplist_freq: {},
        avg_length: 0,
        total_words: 0
    },
    
    allresponses: [],
    email: "",
    chars_typed: 0,
    CONVO_LIMIT: 200,
    currenttype: "first",

    send_data: function() {
        // populate a hidden form
        $("#user_email").val(chatwindow.email);
        $("#user_avg_length").val(chatwindow.statistics.avg_length);
        $("#user_freqs").val(JSON.stringify(chatwindow.statistics.frequencies));
        $("#user_nonstoplist_freq").val(JSON.stringify(chatwindow.statistics.nonstoplist_freq));
        $("#user_total_words").val(chatwindow.statistics.total_words);
        $("#submit").show();
        //send data
    },

    sayNoScroll: function(user, userinput) {
        $(".chatwindow").append("<span>" + user + ": </span>" + userinput + "<br>");
        $('input[name=inputtext]').val('');
    },

    say: function(user, userinput) {
        $(".prompt").before("<span>" + user + ": </span>" + userinput + "<br>");
        $(".chatwindow").animate({scrollTop: $('.chatwindow').prop("scrollHeight")}, 500);
        $('input[name=inputtext]').val('');
    },

    userSays: function(userinput) {
        this.say("You", userinput);
    },

    botSays: function(text) {
        this.say("MatchBot", text);
    },

    send_line: function(line) {
        //send statistics to rails
        $.get("/say_bot", line).done(function (data) {
            received_line = data;
            currentype = "msg";
            chatwindow.botSays(data);
        });
    },

    getBot: function(userinput) {
        // gets bot's response
        //var botresponse = this.send_and_get_line(userinput);
        this.currentype = 'msg';
        this.send_line(userinput);
    },
    calculate: function(userinput, whatthebotsaid) {
        // update statistics

        var words = userinput.split(" ");
        words.forEach(function(word) {
            if (word in chatwindow.statistics.frequencies) {
                chatwindow.statistics.frequencies[word] += 1;
            }
            else {
                chatwindow.statistics.frequencies[word] = 1;
            }
            if (!word in stoplist) {
                if (word in chatwindow.statistics.nonstoplist_freq) {
                    chatwindow.statistics.nonstoplist_freq[word] += 1;
                }
                else {
                    chatwindow.statistics.nonstoplist_freq[word] = 1;
                }
            }
        })
    },
    
    final_calculations: function() {
        // called right before sending, to calculate avg line lengths
        var total = 0.0;
        chatwindow.allresponses.forEach(function (response) {
            total += response.length;
        });
        chatwindow.statistics.avg_length = total/chatwindow.allresponses.length;
        chatwindow.statistics.total_words = total;
    },

    end_seq: function() {
        chatwindow.final_calculations();
        chatwindow.send_data();
        chatwindow.botSays("Great. Rerouting you to your matches!");
        //window.location.replace("matches.html");
    },        
};

function isEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
};
