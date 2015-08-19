$(document).ready(function () {
	CHAMB.startUp();
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/chambas/new-chamba.html";
	});
	$("#cancel").click(function () {
		window.location = "/Chamberos-2.0/main/chambas/"
	});
	CHAMB.loadClientList(false,0);
	$("#save").click(CHAMB.saveChamba);
});