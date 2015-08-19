$(document).ready(function () {	
	CHAMB.startUp();
	CHAMB.editChambaLoad();/*Chamba prefill*/
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	var mod = new CHAMB.model();
	$("#cancel").click(function () {		
		mod.globalIdSet(0);
		window.location = "/Chamberos-2.0/main/clients/";
	});
	debugger;
	CHAMB.actualId = $("#idchamba").val();
	$("#save").click(CHAMB.editChamba);
});