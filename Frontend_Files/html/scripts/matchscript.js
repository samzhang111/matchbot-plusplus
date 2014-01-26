$(document).ready(function() {
	// Get matches
	var matchtext = {
		"awan@thebomb.com": {
			score: .75,
			msg: "physicists are clutch"
		},
		"sam@swag.4me": {
			score: .60,
			msg: "i JUST deleted the name field"
		},
		"luis@master.bot": {
			score: .40,
			msg: "did he fall down?"
		}

	};
	
	var addMatches = function() {
		var i = 0;
		for (name in matchtext) {
			var item = "table td:nth-child(";
			var per = matchtext[name].score*100 + "%";
			$(item + (i+1) + ") > div:nth-child(1)").append(name);			
			$(item + (i+1) + ") div:nth-child(2) div").append(per);
			$(item + (i+1) + ") div:nth-child(2) div").animate({width: per}, "slow");
			$(item + (i+1) + ") div:nth-child(3)").append(matchtext[name].msg);
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