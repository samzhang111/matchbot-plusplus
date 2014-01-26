var sendmatchmail = function(sendermsg, email) {
	console.log(email);
	console.log("send email to match");
};

$(document).ready(function() {
	$("table tr td").mouseover(function() {
		console.log("here");
		$(this).css({
			'background-color': '#ff7b34',
			'border': "4px solid #a64511",
		});
		$(".percentage", $(this)).css({
			"background-color": "#a64511",
		});
	});

	$("table tr td").mouseout(function() {
		$(this).css({
			"border": "4px solid #3780cf",
			"background-color": "#68a4e7",
		});
		$(".percentage", $(this)).css({
			"background-color": "#3780cf",
		});
	});

	$("table tr td").click(function () {
		var recip = $(".email", this).text();
		var promptmsg = "Send " + recip + " an e-mail! Write your message below:";
		var response = prompt(promptmsg);
		"Send " + $(".email", this).text() + " an e-mail! Write your message below:";
		sendmatchmail(response, recip);
		alert("Response sent. Good luck!");
	});
});