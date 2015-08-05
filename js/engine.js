/*Namespace by Pablo Arce Cascante*/
var CHAMB = CHAMB || { /*The target is not confuse with others objects.*/
	admin: false,
	actualUser: '',	
	userLogin: function () {
		alert(this.admin);
		if (($("#iduser").val()=="admin")&&($("#idpass").val()=="$uper4dmin")) {
			this.admin = true;
			this.actualUser = $("#iduser").val();
		} else {

		}
		var us = $("#iduser").val();
		alert(us);
	},
	userLogout: function(){
		this.admin = false;
		this.actualUser = '';
	}
};