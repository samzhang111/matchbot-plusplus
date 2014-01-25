$(document).ready(function() {
	// Get matches
	var matchtext = [[1., "Sam Zhang", "Swarthmore Coll. 2015", "I love Franzen. Do you have swag for me?"],
					[1., "Stella Cho", "Swarthmore Coll. 2014", "Poo you"],
					[1., "Luis Ramirez", "Swarthmore Coll. 2014", "This bot is stupider than Sam."],
					[1., "Rita Zevallos", "Swarthmore Coll. 2015", "I have allergies to my bed but I need to sleep..."],
					[1., "Adrian Wan", "Swarthmore Coll. 2015", "Physicists are clutch."]];
	
	var addMatches = function() {
		for (var i=0; i<5; i++) {
			var item = "table td:nth-child(";
			//var temp = item.replace("count",i);
			//console.log(temp);
			//console.log(matchtext[i][0]);
			var per = Math.round(Math.random()*100)+'%';
			$(item + (i+1) + ") div:first-child() div").append(per);
			//$(item + (i+1) + ") div:first-child() div").width(per);
			$(item + (i+1) + ") div:first-child() div").animate({width: per}, "slow");
			
			var convoLen = matchtext[i].length-1;
			for (var j=0; j<convoLen; j++) {
				$(item + (i+1) + ") div:nth-child(2)").append(matchtext[i][j+1] + "<br>");
			    
			}
			
			//$(temp).append($(matchtext[i][0]));
		} 
	}
	addMatches();

	 
});