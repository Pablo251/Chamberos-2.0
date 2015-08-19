$(document).ready(function () {	
	CHAMB.startUp();
	CHAMB.editInvoiceLoad();/*Chamba prefill*/
	$("#logOut").click(CHAMB.userLogout);
	$("#btnmanage").click(function () {
		window.location = "/Chamberos-2.0/main/invoices/new-invoice.html";
	});
	var mod = new CHAMB.model();
	$("#cancel").click(function () {		
		mod.globalIdSet(0);
		window.location = "/Chamberos-2.0/main/invoices/";
	});
	debugger;
	CHAMB.actualId = $("#number").val();
	$("#save").click(CHAMB.editInvoice);
});