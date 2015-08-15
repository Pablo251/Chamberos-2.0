$(document).ready(function () {	
	debugger;
	CHAMB.userManager();
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
});