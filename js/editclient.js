$(document).ready(function () {	
	CHAMB.startUp();
	CHAMB.editClientLoad();
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/clients/new-client.html";
	});
	var mod = new CHAMB.model();
	$("#cancel").click(function () {		
		mod.globalIdSet(0);
		window.location = "/Chamberos-2.0/main/clients/";
	});
	debugger;
	CHAMB.actualId = $("#idclient").val();
	$("#save").click(CHAMB.editClient);
});