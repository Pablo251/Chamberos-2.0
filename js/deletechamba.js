$(document).ready(function () {
	CHAMB.startUp();
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	$("#cancel").click(function () {
		window.location = "/Chamberos-2.0/main/chambas/";
	});
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/chambas/new-chamba.html";
	});
	debugger;
	$("#yes").click(function () {
		CHAMB.deleteChamba();
		window.location = "/Chamberos-2.0/main/chambas/chamba-saved.html";
	});	
});