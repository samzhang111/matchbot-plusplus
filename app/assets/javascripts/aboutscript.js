$(document).ready(function() {
	// Get matches
	var matchtext = [[1., "Sam \'Franzen\' Zhang '14", "Fullstack, Concept, Algorithm design",  "\"It ruined everything.\""],
					[1., "Stella Cho '14", "Frontend: HTML, CSS, JavaScript", "\"Guys, let's use DropBox.\""],
					[1., "Luis \'Panther\' Ramirez '14", "API Master", "\"It always f*cks up. It's not a matter of if, it's a matter of when.\""],
					[1., "Rita \'Git\' Zevallos '15", "Backend: Ruby on Rails, DB interfacing", "\"I don't get frustrated. The only thing that frustrates me is Git.\""],
					[1., "Adrian Wan '15", "Fullstack apprentice", "\"Screw git. Use floobits.\""],
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
				$(item + " .percentage").append(per);
				//$(item + (i+1) + ") div:first-child() div").width(per);
				$(item + " .percentage").animate({width: per}, "slow");
				var ind = row*3+col;
				var convoLen = matchtext[ind].length-1;
				$(item + " .email").append("<span>" + matchtext[ind][1] + "</span><br>");
				for (var i=1; i<convoLen; i++){
					$(item + " .aboutus").append("<li>" + matchtext[ind][i+1]+"</li>");
				}
				
			}
		};
	};

	var showResearch = function() {
		chatwindow.sayNoScroll('Sam', 'So, modern dating sites depend on user-generated input to find potential life partners. However, <a href="https://webspace.utexas.edu/pe2929/Eastwick/Ireland2011_PSci.pdf">research</a> suggests that relationship stability is better predicted by language style.');
		chatwindow.sayNoScroll('Stella', 'NPR actually <a href="http://www.npr.org/blogs/health/2012/04/30/151550273/to-predict-dating-success-the-secrets-in-the-pronouns">covered</a> covered that 2010 article a while back.');
		chatwindow.sayNoScroll('Luis', 'We thought, \"Maybe we can use a <a href="http://pyaiml.sourceforge.net/">chatbot</a> to get users to talk to us!\"');
		chatwindow.sayNoScroll('Rita', 'Then using an awesome web framework, we could process their data and find compatible users!');
		chatwindow.sayNoScroll('Adrian', 'We\'re basing our analysis off of Natural Language Processing research, such as <a href="https://wiki.umn.edu/pub/UmmCSciSeniorSeminar/Spring2012Talks/KaitlynMulcrone.pdf">emotion detection</a>. \
			The analysis algorithm primarily relies on word frequencies to characterize users.');
		chatwindow.sayNoScroll('Sam', 'Language-style matching will be the new hot.');
		chatwindow.sayNoScroll('Stella', 'So what\'re you waiting for? Go get <a href="index.html">matched</a>!');
  		
	};

	addMatches();
	showResearch();



	 
});