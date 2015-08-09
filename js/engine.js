/*Namespace by Pablo Arce Cascante*/
var CHAMB = CHAMB || { /*The target is not confuse with others objects.*/
	admin: false,
	actualUser: '',	
	userLogin: function () {
		alert(this.admin);
		// window.close();
		
		/*$(this).load("/Chamberos-2.0/main/chamberos.html");*//*Open other html incide a stuff*/
		if (($("#iduser").val()=="admin")&&($("#idpass").val()=="$uper4dmin")) {
			this.admin = true;
			this.actualUser = "Admin";
		} else {
			window.location.href = "/Chamberos-2.0/main/chamberos.html";/*Funciona*/
		}
		var us = $("#iduser").val();
		alert(us);
	},
	userLogout: function(){
		this.admin = false;
		this.actualUser = '';
	},
	model: function(){

	},
};