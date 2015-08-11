/*Namespace by Pablo Arce Cascante*/
var CHAMB = CHAMB || { /*The target is not confuse with others objects.*/
	admin: false,
	actualUser: '',	
	userLogin: function () {
		alert(this.admin);
		/*$(this).load("/Chamberos-2.0/main/chamberos.html");*//*Open other html incide a stuff*/	
		/*Validate existing user*/				
/*		for (var i = 0; i < model.userArray.length; i++) {
			if ((model.userArray[i].user==$("#iduser").val()) && (model.userArray[i]==$("#idpass").val())) {
				this.actualUser = $("#iduser").val();
				this.admin = false;
				window.location.href = "/Chamberos-2.0/main/chamberos.html";
				return;
			};
		};*/
		/*Open the gate for the admin*/

		if (($("#iduser").val()=="admin")&&($("#idpass").val()=="$uper4dmin")) {
			this.admin = true;
			this.actualUser = "Admin";
			window.location.href = "/Chamberos-2.0/main/chamberos.html";/*Funciona*/	
			return;		
		}
		// debugger;
		/*Error validating here*/
		/*Get id of label and add a class '.show'*/
		$("#iderror").addClass("show");
		/*This put the class '.has-error' in the inputs fields*/
		$("#field1").addClass("has-error");
		$("#field2").addClass("has-error");
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
		this.loadUserData = function(){/*This load the users form localStorage*/
			if ("userStorage" in localStorage){
				userArray = JSON.parse(localStorage.userStorage);
			}
			else{
				var userObj = {};
				userArray.push(userObj);
				localStorage.userStorage = JSON.stringify(userArray);
			}
		};
		this.saveUserData = function(pUser, pPass){/*This save an users in the localStorage*/
			var userObj = {user: pUser, password: pPass};
			userArray.push(userObj);
			localStorage.userStorage = JSON.stringify(userArray);
		};
	},
};