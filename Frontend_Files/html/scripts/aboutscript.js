$(document).ready(function() {
	// Get matches
	var matchtext = [[1., "Sam \'Franzen\' Zhang '14", "Fullstack, Concept, Algorithm design",  "\"So, where's the swag?\""],
					[1., "Stella Cho '14", "Frontend: HTML, CSS, JavaScript", "\"Let's go outside!\""],
					[1., "Luis \'Panther\' Ramirez '14", "Bot integration"],
					[1., "Rita \'Git\' Zevallos '15", "Backend: Ruby on Rails, DB interfacing", "\"I don't get frustrated. The only thing that frustrates me is Git.\""],
					[1., "Adrian Wan '15", "Fullstack apprentice", "\"Physicists are clutch.\""],
					[0., "Bla"]];
	
	var images = ["",
				"http://cs.swarthmore.edu/~scho1/images/myFace.jpg",
				"",
				"",
				""];
	
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
				$(item + " div:nth-child(3)").append("<span>" + matchtext[ind][1] + "</span><br>");
				for (var i=1; i<convoLen; i++){
					$(item + " div:nth-child(3)").append("<li>" + matchtext[ind][i+1]+"</li>");
				}
				
			}
		}
	};
	var showResearch = function() {
		$(".chatwindow").append('<span>Sam: </span>So, modern dating sites depend on user-generated input to find potential life partners. However, <a href="https://webspace.utexas.edu/pe2929/Eastwick/Ireland2011_PSci.pdf">research</a> suggests that relationship stability is better predicted by language style.<br>')
						.append('<span>Stella: </span>NPR actually <a href="http://www.npr.org/blogs/health/2012/04/30/151550273/to-predict-dating-success-the-secrets-in-the-pronouns">covered</a> that 2010 article a while back.<br>')
						.append('<span>Luis: </span>We thought, \"Maybe we can use a <a href="http://pyaiml.sourceforge.net/">chatbot</a> to get users to talk to us!\"<br>')
						.append('<span>Rita: </span>Then using an awesome web framework, we could process their data and find compatible users!<br>')
						.append('<spanAdrian: </span>We\'re basing our analysis off of Natural Language Processing research, such as <a href="https://wiki.umn.edu/pub/UmmCSciSeniorSeminar/Spring2012Talks/KaitlynMulcrone.pdf">emotion detection</a>. The analysis algorithm primarily relies on word frequencies to characterize users.<br>')
						.append('<span>Sam: </span>Language-style matching will be the new hot.<br>')
						.append('<span>Stella: </span>So what\'re you waiting for? Go get <a href="index.html">matched</a>!');
  		
	};

	addMatches();
	showResearch();

	 
});