$(document).ready(function () {
	CHAMB.startUp();
	$("#logOut").click(CHAMB.userLogout);/*Log out the current user :)*/ 
	$("#cancel").click(function () {
		window.location = "/Chamberos-2.0/main/chambas/";
	});
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/invoices/new-invoice.html";
	});
	debugger;
	$("#yes").click(function () {
		CHAMB.deleteInvoice();
		window.location = "/Chamberos-2.0/main/invoices/invoice-saved.html";
	});	
});