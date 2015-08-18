$(document).ready(function () {	
	CHAMB.startUp();
	CHAMB.editUserLoad();
	var mod = new CHAMB.model();
	$("#cancel").click(function () {		
		mod.globalIdSet(0);
		window.location = "/Chamberos-2.0/main/users/";
	});
	debugger;
	CHAMB.actualId = $("#iduser").val();
	$("#save").click(CHAMB.editUser);
});