var chatwindow = {
    statistics: {
        frequencies: {},
        avg_length: 0
    },
	allresponses: [],

	appendWindow: function(userinput) {
        $(".chatwindow").append($("<span> User: </span>" + userinput + "<br>"));
        $(".chatwindow").animate({scrollTop: $('.chatwindow').prop("scrollHeight")}, 500);
        $('input[name=inputtext]').val('');
        this.getBot(userinput);
	},
	getBot: function(userinput) {
        // gives bot userinput
        this.allresponses.push(userinput);
        // gets bot's response
        var botresponse = "Okay.";
        $(".chatwindow").append($("<span> MatchBot: </span>" + botresponse + "<br>"));
    },
    calculate: function(userinput, whatthebotsaid) {
        // update statistics

        var words = userinput.split(" ");
        words.forEach(function(word) {
            if (word in chatwindow) {
                chatwindow[word] += 1;
            }
            else if (! word in whatthebotsaid) {
                chatwindow[word] = 1;
            }
        });
        return userinput;
    },
    final_calculations: function() {
        // called right before sending, to calculate avg line lengths
        var total = 0.0;
        allresponses.forEach(function (response)) {
            total += response.length;
        };
        statistics.avg_length = total/response.length;

        // punctuation per 
    }

    send: function() {
        //send statistics to rails
        $.ajax({
            type: "POST",
            url: "/AcceptConvo",
            data: JSON.stringify(statistics);
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            failure: function(errMsg) {
                alert("Connection Error: Chat data not sent");
            }

    }
)
}
};