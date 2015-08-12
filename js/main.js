$(document).ready(function() {
	// First in execute!
	debugger;
	CHAMB.startUp();
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/users/";
	});
	$("#logOut").click(CHAMB.userLogout);
});