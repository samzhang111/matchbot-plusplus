$(document).ready(function() {
	// Get matches
	var matchtext = [[1., "Sam Zhang '14", "Fullstack, Concept, Algorithm design",  "\"I love Franzen. Do you have swag for me?\""],
					[1., "Stella Cho '14", "Frontend: HTML, CSS, JavaScript", "\"Let's go outside!\""],
					[1., "Luis Ramirez '14", "Bot integration"],
					[1., "Rita Zevallos '15", "Backend: Ruby on Rails, DB interfacing"],
					[1., "Adrian Wan '15", "\"Physicists are clutch.\""],
					[0., "Bla"]];
	var images = ["",
				"http://cs.swarthmore.edu/~scho1/images/myFace.jpg",
				"",
				"",
				""]
	
	var addMatches = function() {
		for (var row=0; row<2; row++) {
			var rowText = "table tr:nth-child("+(row+1)+")";
			for (var col=0; col<3; col++){
				var item = rowText + " td:nth-child("+(col+1)+")";
				var per = Math.round(Math.random()*100)+'%';
				$(item + " div:first-child() div").append(per);
				//$(item + (i+1) + ") div:first-child() div").width(per);
				$(item + " div:first-child() div").animate({width: per}, "slow");
				var ind = row*3+col;
				var convoLen = matchtext[ind].length-1;
				for (var i=0; i<convoLen; i++){
					$(item + " div:nth-child(3)").append(matchtext[ind][i+1]+"<br>");
				}
				
			}
		}
		/*
		for (var i=0; i<5; i++) {
			var convoLen = matchtext[i].length-1;
			for (var j=0; j<convoLen; j++) {
				$(item + (i+1) + ") div:nth-child(2)").append(matchtext[i][j+1] + "<br>");
			    
			}
			
			//$(temp).append($(matchtext[i][0]));
		} */
	}
	addMatches();

	 
});