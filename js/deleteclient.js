$(document).ready(function () {
	CHAMB.startUp();
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	$("#cancel").click(function () {
		window.location = "/Chamberos-2.0/main/clients/";
	});
	debugger;
	$("#yes").click(function () {
		CHAMB.deleteClient();
		window.location = "/Chamberos-2.0/main/clients/client-saved.html";
	});	
});