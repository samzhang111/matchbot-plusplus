$(document).ready(function() {
	// Get matches
	var matchtext = {
		"###function": {
			user: "awan",
			score: .75,
			msg: "physicists are clutch"
		},
		"gibberishID": {
			user: "sam",
			score: .60,
			msg: "i JUST deleted the name field"
		},
		"morehash": {
			user: "rita",
			score: .40,
			msg: "did he fall down?"
		}
	};
	
	var addMatches = function() {
		var i = 0;
		for (hash in matchtext) {
			var item = "table td:nth-child(";
			var per = matchtext[hash].score*100 + "%";
			$(item + (i+1) + ") > div:nth-child(1)").append(matchtext[hash].user);			
			$(item + (i+1) + ") div:nth-child(2) div").append(per);
			$(item + (i+1) + ") div:nth-child(2) div").animate({width: per}, "slow");
			$(item + (i+1) + ") div:nth-child(3)").append(matchtext[hash].msg);
			i += 1;
		};
		/*for (var i=0; i<3; i++) {
			var item = "table td:nth-child(";
			//var temp = item.replace("count",i);
			//console.log(temp);
			//console.log(matchtext[i][0]);
			var per = matchtext[0]*100+'%';
			$(item + (i+1) + ") div:first-child() div").append(per);
			//$(item + (i+1) + ") div:first-child() div").width(per);
			$(item + (i+1) + ") div:first-child() div").animate({width: per}, "slow");
			
			var convoLen = matchtext[i].length-2;
			for (var j=0; j<convoLen; j++) {
				var speaker = "";
				if (j%2==0) {
					speaker = "<span>MatchBot</span>";
				}
				else {
					speaker = "<span>" + matchtext[i][1] + "</span>";
				}
				$(item + (i+1) + ") div:nth-child(2)").append(speaker + ": "+ matchtext[i][j+2] + "<br>");
			    
			}

			*/
		
	};
	
	
	//$("table tr td:first-child").append("hello");

	addMatches();
	 
});