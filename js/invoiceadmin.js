$(document).ready(function () {	
	debugger;
	CHAMB.startUp();	
	CHAMB.fillInvoiceInfo();/*Client*/
	var mod = new CHAMB.model();/*instance to model*/
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/chambas/new-chamba.html";
	});
	$("#btnmovdelete").click(function () {/*Movile view*/		
		mod.globalIdSet($("#selectmov option:selected").val());
	});
	$("#btnmovedit").click(function () {/*Mobile view*/
		mod.globalIdSet($("#selectmov option:selected").val());
	});	
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	/*This add a envent to all buttons with a class deletebutton*/
	$("input[name = deletebutton]").click(function () {/*Table view*/
		mod.globalIdSet($(this).val());
		window.location ="/Chamberos-2.0/main/chambas/delete-chamba.html";
	});
	$("input[name = editbutton]").click(function () {/*Table view*/
		mod.globalIdSet($(this).val());
		window.location ="/Chamberos-2.0/main/chambas/edit-chamba.html";
	});
});