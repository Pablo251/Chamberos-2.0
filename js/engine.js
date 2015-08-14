/*Namespace by Pablo Arce Cascante*/
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
		localStorage.currentUser = "";
		window.location = "/Chamberos-2.0/";
	},
	startUp: function(){
		var mod = new CHAMB.model();/*Instance*/
		$("#userName").text(mod.loadCU()[0].user);/*Put the current user name*/
		if (mod.loadCU()[0].state) {
			$("#usernav").addClass("show");
			$("#adminpanel").addClass("show");
		};
	},
	userManager: function() {/*Load setings in the user dash... validate a Admin*/
		var mod = new CHAMB.model();
		$("#userName").text(mod.loadCU()[0].user);/*Put the current user name*/
		if (mod.loadCU()[0].state) {
			$("#usernav").addClass("show");
			$("div[name = adminDiv]").addClass("show");
		};
	},
	fillUserInfo: function() {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData.length; i++) {
			CHAMB.loadTables(mod.loadUserData[i].userId, mod.loadUserData[i].fullName, mod.loadUserData[i].userName, mod.loadUserData[i].password, null,4);
		};		
	},
	fillClientInfo: function  () {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData.length; i++) {
			CHAMB.loadTables(mod.loadUserData[i].userId, mod.loadUserData[i].firstName, mod.loadUserData[i].lastName, mod.loadUserData[i].userName, null,4);
		};		
	},
	fillChambaInfo: function  () {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData.length; i++) {
			CHAMB.loadTables(mod.loadUserData[i].userId, mod.loadUserData[i].firstName, mod.loadUserData[i].lastName, mod.loadUserData[i].userName, null,4);
		};		
	},
	fillInvoiceInfo: function  () {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData.length; i++) {
			CHAMB.loadTables(mod.loadUserData[i].userId, mod.loadUserData[i].firstName, mod.loadUserData[i].lastName, mod.loadUserData[i].userName, null,4);
		};		
	},	
	loadTables: function (pId, p1, p2, p3, p4, p5, pCellNums) {/*Load info on tables and in the select*/
		var tableRow = document.getElementById("idtable").insertRow();/*Table Object, insert a new row*/
		var selectOtion = $("#selectmov");/*Select Object*/
		var cell0 = tableRow.insertCell(0),
		cell1 = tableRow.insertCell(1),
		cell2 = tableRow.insertCell(2),
		cell3 = tableRow.insertCell(3),
		cell4 = tableRow.insertCell(4),
		cellOptions = tableRow.insertCell(5);
		/*If is a table with only 4 cells...*/
		cell0.innerHTML = p1;
		cell1.innerHTML = p2;
		cell2.innerHTML = p3;
		cell3.innerHTML = p4;
		if (pCellNums>5)
			cell4.innerHTML = p5;
		/*add buttons for edit and delete*/
	},
	model: function() {
		this.userArray = [];/*This array save temp*/
		this.chambaArray = [];
		this.clientArray = [];
		this.invoiceArray = [];	
		this.currentUser = [];
		this.loadUserData = function(){/*This load the users form localStorage*/
			if (localStorage["userStorage"]==undefined)
				localStorage.setItem("userStorage","");
			return this.userArray = JSON.parse(localStorage.userStorage);
		};
		this.saveUserData = function(pId, pName, pUserName, pPass){/*This save an users in the localStorage*/
			if (localStorage["userStorage"]==undefined)
				localStorage.setItem("userStorage","");
/*			var userObj = {userId: pId, fullName; pName, userName: pUserName, password: pPass};
			userArray.push(userObj);
			localStorage.userStorage = JSON.stringify(userArray);*/
		};
		this.saveCU = function(pUser, pState){
			debugger;
			if (!localStorage.currentUser)/*if currentUser doesn't exist it's created*/
				localStorage.setItem("currentUser", "");
			localStorage.currentUser = "";/*Clear the previous data stored*/
			this.currentUser.push({user: pUser, state: pState});
			localStorage.currentUser = JSON.stringify(this.currentUser);
		};
		this.loadCU = function(){/*load a current user information*/
			return this.currentUser = JSON.parse(localStorage.currentUser);/*Parse the JSON and return a result*/
		};		
	},
};