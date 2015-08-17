$(document).ready(function () {	
	debugger;
	CHAMB.startUp();	
	CHAMB.fillUserInfo();
	var mod = new CHAMB.model();/*instance to model*/
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/users/new-user.html";
	});
	$("#btnmovdelete").click(function () {
		window.location = "/Chamberos-2.0/main/users/delete-user.html";
	});
	$("#btnmovedit").click(function () {
		window.location = "/Chamberos-2.0/main/users/edit-user.html";
	});	
	$("#logOut").click(CHAMB.userLogtou); 
	/*This add a envent to all buttons with a class deletebutton*/
	$("input[name = deletebutton]").click(CHAMB.changeDelete);
	$("input[name = editbutton]").click(function () {
		debugger;
		mod.globalIdSet($(this).val());
		window.location ="/Chamberos-2.0/main/users/edit-user.html";
	});
});