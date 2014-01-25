var chatwindow = {
    statistics: {
        frequencies: {},
        nonstoplist_freq: {},
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
            if(! word in whatthebotsaid) {
                if (word in statistics.frequencies) {
                    statics.frequencies[word] += 1;
                }
                else {
                    statistics.frequencies[word] = 1;
                }
                if (!word in stoplist) {
                    if (word in statistics.nonstoplist_freq) {
                        statistics.nonstoplist_freq[word] += 1;
                    }
                    else {
                        statistics.nonstoplist_freq[word] = 1;
                    }
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

        // punctuation per 
    },

    send_data: function() {
        //send statistics to rails
        /*
        $.ajax({
            type: "POST",
            url: "/AcceptConvo",
            data: JSON.stringify(chatwindow.statistics),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            failure: function(errMsg) {
                alert("Connection Error: Chat data not sent");
            }
        });
        */
        console.log("in send_data");
    },

    end_seq: function() {
        chatwindow.final_calculations();
        chatwindow.send_data();
        alert("Sweet. Now rerouting you to your matches!");
        window.location.replace("matches.html");
    },        
};

function isEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
};