$(document).ready(function () {
	debugger;
	CHAMB.startUp();
	CHAMB.editUserLoad();
	$("#cancel").click(function () {
		window.location = "/Chamberos-2.0/main/users/";
	});
});