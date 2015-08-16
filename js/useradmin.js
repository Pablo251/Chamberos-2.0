$(document).ready(function () {	
	CHAMB.startUp();
	debugger;
	CHAMB.fillUserInfo();
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
	$("a[name = deleteButton]").click(function () {
		window.location ="/Chamberos-2.0/main/users/delete-user.html";
	});
	$("a[name = editButton]").click();
});