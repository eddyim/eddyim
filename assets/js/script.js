$(document).ready(function() {
	$(".menu-item").click(function() {
		var menuNum = parseInt($(this).attr("id"));
		console.log(menuNum);
		var currentState = getState(menuNum);
		var sectionToToggle = getSection(menuNum);
		console.log(currentState);
		console.log(sectionToToggle)
		if (currentState === "none") {
			$(".toggle-section").slideUp();
			$(sectionToToggle).slideDown();
		} else {
			$(sectionToToggle).slideUp();
		}
	});

	function getState(number) {
		switch(number) {
			case 1:
				return $("#current").css("display");
				break;
			case 2:
				return $("#previous").css("display");
				break;
			case 3:
				return $("#experience").css("display");
				break;
			case 4:
				return $("#projects").css("display");
				break;
			case 5:
				return $("#blog").css("display");
				break;

		}
	}

	function getSection(number) {
		switch(number) {
			case 1:
				return "#current";
				break;
			case 2:
				return "#previous";
				break;
			case 3:
				return "#experience";
				break;
			case 4:
				return "#projects";
				break;
			case 5:
				return "#blog";
				break;
			}
	}
});