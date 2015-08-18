$(document).ready(function () {
	debugger;
	CHAMB.startUp();
	CHAMB.editUserLoad();
	var mod = new CHAMB.model();
	$("#cancel").click(function () {		
		mod.globalIdSet(0);
		window.location = "/Chamberos-2.0/main/users/";
	});
	CHAMB.actualId = $("#iduser").val();
	$("#save").click(CHAMB.editUser);
});