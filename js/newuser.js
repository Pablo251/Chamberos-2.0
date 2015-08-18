$(document).ready(function () {
	debugger;	
	CHAMB.startUp();
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/users/new-user.html";
	});
	$("#logOut").click(CHAMB.userLogout);
	$("#cancel").click(function () { /*Cancel button*/
		window.location = "/Chamberos-2.0/main/users/";
	});	
	$("#save").click(CHAMB.saveUser);
});