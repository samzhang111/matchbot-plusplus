$(document).ready(function() {
	$("table tr td").mouseover(function() {
		console.log("here");
		$(this).css({
			'background-color': '#ff7b34',
			'border': "4px solid #a64511",
		});
		$(":nth-child(2) div", $(this)).css({
			"background-color": "#a64511",
		});
	});

	$("table tr td").mouseout(function() {
		$(this).css({
			"border": "4px solid #3780cf",
			"background-color": "#68a4e7",
		});
		$(":nth-child(2) div", $(this)).css({
			"background-color": "#3780cf",
		});
	});

	$("table tr td").click(function () {
		console.log("send email data to.. yeah")
	});
});