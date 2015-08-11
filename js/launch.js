/*This file manage the actions in Login page
by Pablo Arce Cascante.
*/
$(document).ready(function() { /*This execute when the page is already loaded*/
	/*Events added here*/
	debugger;
	var mod = new CHAMB.model();
	mod.loadUserData();
	$("#launch").click(CHAMB.userLogin);

});



/*$(document).on("ready",PRACTICE.ocultarSpan);
ocultarSpan:function() {
	$("span.help-block").hide();
	$("#start").click(PRACTICE.validarCamposBlanco);

});*/