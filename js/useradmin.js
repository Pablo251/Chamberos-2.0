$(document).ready(function () {	
	debugger;
	CHAMB.startUp();	
	CHAMB.fillUserInfo();
	var mod = new CHAMB.model();/*instance to model*/
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/users/new-user.html";
	});
	$("#btnmovdelete").click(function () {/*Movile view*/		
		mod.globalIdSet($("#selectmov option:selected").val());
		/*window.location ="/Chamberos-2.0/main/users/delete-user.html";*/
	});
	$("#btnmovedit").click(function () {/*Mobile view*/
		debugger;
		mod.globalIdSet($("#selectmov option:selected").val());
		/*window.location = "/Chamberos-2.0/main/umdfi vnojkh mrtipjksers/edit-user.html";*/
	});	
	$("#logOut").click(CHAMB.userLogtou); 
	/*This add a envent to all buttons with a class deletebutton*/
	$("input[name = deletebutton]").click(function () {/*Table view*/
		debugger;
		mod.globalIdSet($(this).val());
		window.location ="/Chamberos-2.0/main/users/delete-user.html";
	});
	$("input[name = editbutton]").click(function () {/*Table view*/
		debugger;
		mod.globalIdSet($(this).val());
		window.location ="/Chamberos-2.0/main/users/edit-user.html";
	});
});