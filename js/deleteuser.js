$(document).ready(function () {
	CHAMB.startUp();
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	$("#cancel").click(function () {
		window.location = "/Chamberos-2.0/main/users/";
	});
	debugger;
	$("#yes").click(function () {
		CHAMB.deleteUser();
		window.location = "/Chamberos-2.0/main/users/user-saved.html";
	});	
});