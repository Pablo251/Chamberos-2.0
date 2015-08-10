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
		}					
		var us = $("#iduser").val();
		alert(us);

		for (var i = 0; i < model.userArray.length; i++) {
			if ((model.userArray[i].user==$("#iduser").val()) && (model.userArray[i]==$("#idpass").val())) {
				this.actualUser = $("#iduser").val();
				this.admin = false;
				goto link;
			};
		};
		link: 
		window.location.href = "/Chamberos-2.0/main/chamberos.html";/*Funciona*/


	},
	userLogout: function(){
		this.admin = false;
		this.actualUser = '';
	},
	model: function(){
		var userArray = [],/*This array save temp*/
		chambaArray = [],
		clientArray = [],
		invoiceArray = [];		
		this.loadUserData = function(pUser, pPass){/*This load the users form localStorage*/

		};
		this.saveUserData = function(pUser, pPass){/*This save an users in the localStorage*/
			var userObj = {user: pUser, password: pPass};
			userArray.push(userObj);
			localStorage.userStorage = JSON.stringify(userArray);
		};
	},
};