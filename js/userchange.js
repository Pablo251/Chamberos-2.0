$(document).ready(function () {
	CHAMB.startUp();
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	$("#goback").click(function () {
		window.location = "/Chamberos-2.0/main/users/index.html";
	});
});