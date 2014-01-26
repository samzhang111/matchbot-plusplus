$(document).ready(function() {
	// Get matches
	/*var matchtext = {
		"###": {
			name: "awan",
			score: .75,
			msg: "physicists are clutch"
		},
		"userid": {
			name: "sam",
			score: .60,
			msg: "i JUST deleted the name field"
		},
		"us;dlkjf": {
			name: "luis",
			score: .40,
			msg: "did he fall down?"
		}

	};
	
	var addMatches = function() {
		var i = 0;
		for (hash in matchtext) {
			var item = "table td:nth-child(";
			var per = matchtext[hash].score*100 + "%";
			$(item + (i+1) + ") > div:nth-child(1)").append(matchtext[hash].name);			
			$(item + (i+1) + ") div:nth-child(2) div").append(per);
			$(item + (i+1) + ") div:nth-child(2) div").animate({width: per}, "slow");
			$(item + (i+1) + ") div:nth-child(3)").append(matchtext[hash].msg);
			i += 1;
		};
	};

	*/
	var matchtext = [
		["##12", .85, "", "<span>:</span> Bubbly"], 
		["##12", .65, "", "<span>Talking style:</span> Casual-fun"],
		["##12", .15, "", "<span>Talking style:</span> Internet"],
	];

	var addMatches = function() {

		for (var i=0; i<3; i++) {
			var item = "table td:nth-child(" + (i+1) + ")";
			var per = matchtext[i][1]*100+'%';
			$(item + " .email").append(matchtext[i][2]);
			$(item + " .percentage").append(per)
									.animate({width: per}, "slow");
			
			var convoLen = matchtext[i].length-3;
			for (var j=0; j<convoLen; j++) {
				var speaker = "";
				if (j%2==0) {
					speaker = "";
				}
				else {
					speaker = "<span>" + matchtext[i][1] + "</span>";
				}
				$(item + " .snippet").append(matchtext[i][j+3] + "<br>");
			    
			}
		};
		
	};
	

	

	addMatches();
	 
});
