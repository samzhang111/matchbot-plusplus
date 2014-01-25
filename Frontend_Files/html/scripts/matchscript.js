$(document).ready(function() {
	// Get matches
	var matchtext = [[.75, "Franzen", "Whut", "YOLO"], 
					[.60, "Adrian", "You're a poet", "No, I'm a physicist.", "srsly lol.", "stfu noob, physicists are clutch."],
					[.40, "Sam", "How's life?", "Haha, you're funny."]];
	
	var addMatches = function() {
		for (var i=0; i<3; i++) {
			var item = "table td:nth-child(";
			//var temp = item.replace("count",i);
			//console.log(temp);
			//console.log(matchtext[i][0]);
			var per = matchtext[i][0]*100+'%';
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

			//$(temp).append($(matchtext[i][0]));
		} 
	}
	
	
	//$("table tr td:first-child").append("hello");

	addMatches();

	 
});