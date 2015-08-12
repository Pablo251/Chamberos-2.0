/*Namespace by Pablo Arce Cascante*/
var globalUser = "";
var CHAMB = CHAMB || { /*The target is not confuse with others objects.*/
	admin: false,
	actualUser: '',	
	userLogin: function () {
		/*Validate existing user*/
		var mod = new CHAMB.model();		
		for (var i = 0; i < mod.loadUserData.length; i++) {
			if ((mod.loadUserData[i].user==$("#iduser").val()) && (mod.loadUserData[i]==$("#idpass").val())) {
				mod.saveCU(mod.loadUserData[i].user, false);
				document.location.href = "/Chamberos-2.0/main/chamberos.html";
				return;
			};
		};
		/*Open the gate for the admin*/
		if (($("#iduser").val()=="admin")&&($("#idpass").val()=="a")) {
			mod.saveCU("Admin", true);
			window.location = "/Chamberos-2.0/main/chamberos.html";
			return;		
		}
		/*Error validating here*/		
		$("#iderror").addClass("show");/*Get id of label and add a class '.show'*/		
		$("#field1").addClass("has-error");/*This put the class '.has-error' in the inputs fields*/
		$("#field2").addClass("has-error");
	},
	userLogout: function(){
		this.admin = false;
		this.actualUser = '';
	},
	startUp: function(){
		var mod = new CHAMB.model();/*Instance*/
		$("#userName").text(mod.loadCU()[0].user);/*Put the current user name*/
		if (mod.loadCU()[0].state) {
			$("#usernav").addClass("show");
			$("#adminpanel").addClass("show");
		};
	},
	model: function(){
		this.userArray = [];/*This array save temp*/
		this.chambaArray = [];
		this.clientArray = [];
		this.invoiceArray = [];	
		this.currentUser = [];
		this.loadUserData = function(){/*This load the users form localStorage*/
			if ("userStorage" in localStorage){
				this.userArray = JSON.parse(localStorage.userStorage);
			}
			else{/*Create a new JSON and save this in the local storage*/
				this.userArray.push({});
				localStorage.userStorage = JSON.stringify(this.userArray);
			}
			return this.userArray;
		};
		this.saveUserData = function(pUser, pPass){/*This save an users in the localStorage*/
			var userObj = {user: pUser, password: pPass};
			userArray.push(userObj);
			localStorage.userStorage = JSON.stringify(userArray);
		};
		this.saveCU = function(pUser, pState){
			debugger;
			if (!localStorage.currentUser) {/*if currentUser doesn't exist it's created*/
				localStorage.setItem("currentUser", "");
			}
			localStorage.currentUser = "";/*Clear the previous data stored*/
			this.currentUser.push({user: pUser, state: pState});
			localStorage.currentUser = JSON.stringify(this.currentUser);	
		};
		this.loadCU = function(){
			return this.currentUser = JSON.parse(localStorage.currentUser);/*Parse the JSON and return a result*/
		}
	},
};