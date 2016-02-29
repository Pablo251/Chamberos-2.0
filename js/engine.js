/*Namespace by Pablo Arce Cascante*/
var CHAMB = CHAMB || { /*The target is not confuse with others objects.*/
	admin: false,
	actualUser: '',
	actualId: 0,
	userLogin: function () {
		debugger;
		/*Validate existing user*/
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData().length; i++) {
			if ((mod.loadUserData()[i].username==$("#iduser").val()) && (mod.loadUserData()[i].password==$("#idpass").val())) {
				mod.saveCU(mod.loadUserData()[i].username, false);
				document.location.href = "/Chamberos-2.0/main/chamberos.html";
				return;
			};
		};
		/*Open the gate for the admin*/
		if (($("#iduser").val()=="admin")&&($("#idpass").val()=="$uper4dmin")) {
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
		localStorage.globalId = 0;
		window.location = "/Chamberos-2.0/";
	},
	startUp: function(){
		var mod = new CHAMB.model();/*Instance*/
		$("#userName").text(mod.loadCU()[0].user);/*Put the current user name*/
		if (mod.loadCU()[0].state==true) {
			$("#usernav").addClass("show");
			$("#adminpanel").addClass("show");
			$("#movadmin").addClass("show");
			$("#tableadmin").addClass("show");
			$("div[name = adminDiv]").addClass("show");
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
	validatePass: function(){
		var pass1 = $("#pass1").val(),
		pass2 = $("#pass2").val();
		/*validate the password*/
		if ((pass1 != pass2) || ((pass1 == "") || (pass2 == "")) ||(pass1.includes(" ") || pass2.includes(" "))) {
			$("div[name = passput]").addClass("has-error");
			$("#error").addClass("show");
			return false;
		};
		return true;
	},
	saveInvoice: function () {
		debugger;
		var mod = new CHAMB.model(),
		newId = mod.loadInvoiceData().length+1;
		/*find the selected user*/
		for (var i = 0; i < mod.loadClientData().length; i++) {
			if (mod.loadClientData()[i].clientid == $("#client_list option:selected").val())
				this.clientSelected = mod.loadClientData()[i];
		};
		/*new id*/
		labelagain: for (var i = 0; i < mod.loadChambaData().length ; i++) {
			if (mod.loadChambaData()[i].clientid==newId) {
				newId+=1;
				i = 0;
				continue labelagain;
			};
		};
		/*validate bill number*/
		for (var i = 0; i < mod.loadInvoiceData().length; i++) {
			if (mod.loadInvoiceData()[i].number==$("#number").val()) {
				$("#numfail").addClass("show");
				return;
			};

		};
		/*Validate void fields*/
		if (($("#number").val() == "") || ($("#date").val() == "") || ($("#amount").val() == "")) {
			$("label[name = error]").addClass("show");
			return;
		};
		mod.saveInvoiceData(newId, $("#number").val(), this.clientSelected, $("#description").val(), $("#date").val(), $("#amount").val(), false, 0);
		window.location = "/Chamberos-2.0/main/invoices/invoice-saved.html";
	},
	editInvoice: function () {
		debugger;
		var mod = new CHAMB.model();
		/*Void fields? nope!*/
		if (($("#number").val() == "") || ($("#date").val() == "") || ($("#amount").val() == "")) {
			$("label[name = error]").addClass("show");
			return;
		};
		/*Exist! another equal number!!???*/
		for (var i = 0; i < mod.loadInvoiceData().length; i++) {
			if ( (($("#number").val()==mod.loadInvoiceData()[i].invoiceid) && ($("#number").val() != CHAMB.actualId)) || ($("#number").val() <= 0 ) )  {
				$("#numfail").addClass("show");
				return;
			};
		};
		/*find the selected user*/
		for (var i = 0; i < mod.loadClientData().length; i++) {
			if (mod.loadClientData()[i].clientid == $("#client_list option:selected").val())
				this.clientSelected = mod.loadClientData()[i];
		};
		/*Find the index*/
		for (var i = 0; i < mod.loadInvoiceData().length; i++) {
			if (mod.loadInvoiceData()[i].invoiceid == localStorage.globalId) {/*Find the index to add the correct line*/
				this.index = i;
			}
		};
		/*Time to update the info*/
		mod.saveInvoiceData(localStorage.globalId, $("#number").val(), this.clientSelected, $("#description").val(), $("#date").val(), $("#amount").val(), true, this.index);
		window.location = "/Chamberos-2.0/main/invoices/invoice-saved.html";
	},
	deleteInvoice: function () {
		debugger;
		var mod = new CHAMB.model();
		this.invoiceData = mod.loadInvoiceData();
		for (var i = 0; i < this.invoiceData.length; i++) {
			if (this.invoiceData[i].invoiceid == localStorage.globalId) {
				this.invoiceData.splice(i, 1);
				localStorage.invoiceStorage = JSON.stringify(this.invoiceData);
			};
		};
		localStorage.globalId = 0;
	},
	saveChamba: function () {
		debugger;
		var mod = new CHAMB.model(),
		newId = mod.loadChambaData().length+1;
		/*find the selected user*/
		for (var i = 0; i < mod.loadClientData().length; i++) {
			if (mod.loadClientData()[i].clientid == $("#client_list option:selected").val())
				this.clientSelected = mod.loadClientData()[i];
		};
		/*new id*/
		labelagain: for (var i = 0; i < mod.loadChambaData().length ; i++) {
			if (mod.loadChambaData()[i].clientid==newId) {
				newId+=1;
				i = 0;
				continue labelagain;
			};
		};
		/*Validate void fields*/
		if (($("#description").val() == "") || ($("#date").val() == "") || ($("#note").val() == "")) {
			$("label[name = error]").addClass("show");
			return;
		};
		mod.saveChambaData(newId, this.clientSelected, $("#description").val(), $("#date").val(), $("#note").val(), false, 0);
		window.location = "/Chamberos-2.0/main/chambas/chamba-saved.html";
	},
	editChamba: function () {
		debugger;
		var mod = new CHAMB.model();
		/*Void fields? nope!*/
		if (($("#idchamba").val() == "") || ($("#description").val() == "") || ($("#date").val() == "") || ($("#note").val() == "")) {
			$("label[name = error]").addClass("show");
			return;
		};
		for (var i = 0; i < mod.loadChambaData().length; i++) {
			if ( (($("#idchamba").val()==mod.loadChambaData()[i].chambaid) && ($("#idchamba").val() != CHAMB.actualId)) || ($("#idchamba").val() <= 0 ) ) {
				$("#errorid").addClass("show");
				return;
			}
			if (mod.loadChambaData()[i].chambaid == localStorage.globalId) {/*Find the index to add the correct line*/
				this.index = i;
			}
		};
		if ($("#idchamba").val() != CHAMB.actualId)
			mod.globalIdSet($("#idchamba").val());
		/*find the selected user*/
		for (var i = 0; i < mod.loadClientData().length; i++) {
			if (mod.loadClientData()[i].clientid == $("#client_list option:selected").val())
				this.clientSelected = mod.loadClientData()[i];
		};
		/*Time to update the info*/
		mod.saveChambaData($("#idchamba").val(), this.clientSelected, $("#description").val(), $("#date").val(), $("#note").val(), true, this.index);
		window.location = "/Chamberos-2.0/main/chambas/chamba-saved.html";
	},
	deleteChamba: function () {
		debugger;
		var mod = new CHAMB.model();
		this.chambaData = mod.loadChambaData();
		for (var i = 0; i < this.chambaData.length; i++) {
			if (this.chambaData[i].chambaid == localStorage.globalId) {
				this.chambaData.splice(i, 1);
				localStorage.chambaStorage = JSON.stringify(this.chambaData);
			};
		};
		localStorage.globalId = 0;
	},
	saveClient: function() {
		debugger;
		var mod = new CHAMB.model(),
		newId = mod.loadClientData().length+1;
		labelagain: for (var i = 0; i < mod.loadClientData().length ; i++) {
			if (mod.loadClientData()[i].clientid==newId) {
				newId+=1;
				i = 0;
				continue labelagain;
			};
		};
		/*Validate void fields*/
		if (($("#fullname").val() == "") || ($("#ced").val() == "") || ($("#tele").val() == "")) {
			$("label[name = error]").addClass("show");
			return;
		};
		mod.saveClientData(newId, $("#fullname").val(), $("#ced").val(), $("#tele").val(), false, 0);
		window.location = "/Chamberos-2.0/main/clients/client-saved.html";
	},
	editClient: function () {
		debugger;
		var mod = new CHAMB.model();
		/*Void fields? nope!*/
		if (($("#fullname").val() == "") || ($("#ced").val() == "") || ($("#tele").val() == "")) {
			$("label[name = error]").addClass("show");
			return;
		};
		for (var i = 0; i < mod.loadClientData().length; i++) {
			if ( (($("#idclient").val()==mod.loadClientData()[i].clientid) && ($("#idclient").val() != CHAMB.actualId)) || ($("#idclient").val() <= 0 ) ) {
				$("#errorid").addClass("show");
				return;
			}
			if (mod.loadClientData()[i].clientid == localStorage.globalId) {/*Find the index to add the correct line*/
				this.index = i;
			}
		};
		if ($("#idclient").val() != CHAMB.actualId)
			mod.globalIdSet($("#idclient").val());
		/*Time to update the info*/
		mod.saveClientData($("#idclient").val(), $("#fullname").val(), $("#ced").val(), $("#tel").val(), true, this.index);
		/*Go to the save page*/
		window.location = "/Chamberos-2.0/main/users/user-saved.html";
	},
	deleteClient: function () {
		debugger;
		var mod = new CHAMB.model();
		this.clientsData = mod.loadClientData();
		for (var i = 0; i < this.clientsData.length; i++) {
			if (this.clientsData[i].clientid == localStorage.globalId) {
				this.clientsData.splice(i, 1);
				localStorage.clientStorage = JSON.stringify(this.clientsData);
			};
		};
		localStorage.globalId = 0;
	},
	saveUser: function(){
		debugger;
		/*Passwords match?*/
		if (!CHAMB.validatePass())
			return;
		/*validate a new id for the new user*/
		var mod = new CHAMB.model(),
		newId = mod.loadUserData().length+1;
		labelagain: for (var i = 0; i < mod.loadUserData().length ; i++) {
			if (mod.loadUserData()[i].userid==newId) {/*ask if the new id number exist in the JSON file*/
				newId+=1;
				i = 0;
				continue labelagain;
			};
		};
		/*Save a new user*/
		mod.saveUserData(newId, $("#fullname").val(), $("#username").val(), $("#pass1").val(), false, 0);
		window.location = "/Chamberos-2.0/main/users/user-saved.html";
	},
	editUser: function () {/*Validate and update*/
		debugger;
		if (!CHAMB.validatePass())
			return;
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData().length; i++) {
			if ( (($("#iduser").val()==mod.loadUserData()[i].userid) && ($("#iduser").val() != CHAMB.actualId)) || ($("#iduser").val() <= 0 ) ) {
				$("#errorid").addClass("show");
				return;
			}
			if (mod.loadUserData()[i].userid == localStorage.globalId) {/*Find the index to add the correct line*/
				this.index = i;
			}
		};
		if ($("#iduser").val() != CHAMB.actualId)
			mod.globalIdSet($("#iduser").val());
		/*Time to update the info*/
		mod.saveUserData($("#iduser").val(), $("#fullname").val(), $("#username").val(), $("#pass1").val(), true, this.index);
		/*Go to the save page*/
		window.location = "/Chamberos-2.0/main/users/user-saved.html";
	},
	deleteUser: function () {
		debugger;
		var mod = new CHAMB.model();
		this.usersData = mod.loadUserData();
		for (var i = 0; i < this.usersData.length; i++) {
			if (this.usersData[i].userid == localStorage.globalId) {
				this.usersData.splice(i, 1);
				localStorage.userStorage = JSON.stringify(this.usersData);
			};
		};
		localStorage.globalId = 0;
	},
	fillUserInfo: function() {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData().length; i++) {
			CHAMB.loadTables(mod.loadUserData()[i].userid, mod.loadUserData()[i].userid, mod.loadUserData()[i].fullName, mod.loadUserData()[i].username, mod.loadUserData()[i].password,4,4);
		};
	},
	fillClientInfo: function  () {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadClientData().length; i++) {
			CHAMB.loadTables(mod.loadClientData()[i].clientid, mod.loadClientData()[i].ced , mod.loadClientData()[i].fullName, mod.loadClientData()[i].tel, null, 4, 4);
		};
	},
	fillChambaInfo: function  () {
		debugger;
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadChambaData().length; i++) {
			CHAMB.loadTables(mod.loadChambaData()[i].chambaid, mod.loadChambaData()[i].client.fullName, mod.loadChambaData()[i].job, mod.loadChambaData()[i].date, mod.loadChambaData()[i].note,null,5);
		};
	},
	fillInvoiceInfo: function  () {
		debugger;
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadInvoiceData().length; i++) {
			CHAMB.loadTables(mod.loadInvoiceData()[i].invoiceid, mod.loadInvoiceData()[i].number, mod.loadInvoiceData()[i].client.fullName, mod.loadInvoiceData()[i].description, mod.loadInvoiceData()[i].date, mod.loadInvoiceData()[i].amount,6);
		};
	},
	loadClientList: function (pSeletion, pIndex) {
		debugger;
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadClientData().length; i++) {
			if ((pSeletion == true) && (pIndex == mod.loadClientData()[i].clientid)) {
				$("#client_list").append('<option selected value = "'+mod.loadClientData()[i].clientid+'">'+mod.loadClientData()[i].ced+': '+mod.loadClientData()[i].fullName+'</option>');
			} else {
				$("#client_list").append('<option value = "'+mod.loadClientData()[i].clientid+'">'+mod.loadClientData()[i].ced+': '+mod.loadClientData()[i].fullName+'</option>');
			}
		};
	},
	loadTables: function (pId, p1, p2, p3, p4, p5, pCellNums) {/*Load info on tables and in the select*/
		debugger;
		var table = document.getElementById("idtable");/*Table Object, insert a new row*/
		var tableRow = table.insertRow();
		var selectOtion = $("#selectmov");/*Select Object*/
		$(tableRow).addClass("active");
		/*If is a table with only 4 cells...*/
		var cell0 = tableRow.insertCell(0),
		cell1 = tableRow.insertCell(1),
		cell2 = tableRow.insertCell(2);
		cell0.innerHTML = p1;
		cell1.innerHTML = p2;
		cell2.innerHTML = p3;
		var cellOptions = "";
		var mod = new CHAMB.model();
		if (pCellNums == 4) {
			if (mod.loadCU()[0].state==true)
				cellOptions = tableRow.insertCell(3);
		}
		if (pCellNums==5) {
			var cell3 = tableRow.insertCell(3);
			cell3.innerHTML = p4;
			if (mod.loadCU()[0].state==true)
				cellOptions = tableRow.insertCell(4);
		}
		if (pCellNums==6) {
			var cell3 = tableRow.insertCell(3);
			cell3.innerHTML = p4;
			var cell4 = tableRow.insertCell(4);
			cell4.innerHTML = p5;
			if (mod.loadCU()[0].state==true)
				cellOptions = tableRow.insertCell(5);
		}
		/*Action Buttons*/
		$(cellOptions).append('<div class = "pull-right"><input name = "deletebutton" value = '+pId+' type="image" src="/Chamberos-2.0/pics/delete.png" alt="button"></div>');
		$(cellOptions).append('<div class = "pull-right"><input name = "editbutton" value = '+pId+' type="image" src="/Chamberos-2.0/pics/edit.png" alt="button"></div>');
		/*Select charge!*/
		$("#selectmov").append('<option value = "'+pId+'"">'+pId+' - '+p2+': '+p3+'</option>');
	},
	editUserLoad: function () {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadUserData().length; i++) {
			if (mod.loadUserData()[i].userid==localStorage.globalId) {/*if match with the previous id selected exist, load this information*/
				$("#iduser").val(mod.loadUserData()[i].userid);/*Set id number*/
				$("#fullname").val(mod.loadUserData()[i].fullName);/*set fullname of user*/
				$("#username").val(mod.loadUserData()[i].username);/*Set the username on field*/
				$("#oldpassword").text(mod.loadUserData()[i].password);/*again!*/
				$("#pass1").val(mod.loadUserData()[i].password);
				$("#pass2").val(mod.loadUserData()[i].password);
			};
		};
	},
	editClientLoad: function () {
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadClientData().length; i++) {
			if (mod.loadClientData()[i].clientid==localStorage.globalId) {/*if match with the previous id selected exist, load this information*/
				$("#idclient").val(mod.loadClientData()[i].clientid);/*Set id number*/
				$("#fullname").val(mod.loadClientData()[i].fullName);/*set fullname of user*/
				$("#ced").val(mod.loadClientData()[i].ced);/*Set the username on field*/
				$("#tel").val(mod.loadClientData()[i].tel);
			};
		};
	},
	editChambaLoad: function () {
		debugger;
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadChambaData().length; i++) {
			if (mod.loadChambaData()[i].chambaid==localStorage.globalId) {/*if match with the previous id selected exist, load this information*/
				$("#idchamba").val(mod.loadChambaData()[i].chambaid);/*Set id number*/
				$("#description").val(mod.loadChambaData()[i].job);/*set fullname of user*/
				$("#date").val(mod.loadChambaData()[i].date);/*Set the username on field*/
				$("#note").val(mod.loadChambaData()[i].note);
				/*Charge a selected option*/
				CHAMB.loadClientList(true, mod.loadChambaData()[i].client.clientid);
			};
			/*chambaid: pId, client: pClient, job: pDescription, date: pDate, note: pNot*/
		};
	},
	editInvoiceLoad: function () {
		debugger;
		var mod = new CHAMB.model();
		for (var i = 0; i < mod.loadInvoiceData().length; i++) {
			if (mod.loadInvoiceData()[i].invoiceid==localStorage.globalId) {/*if match with the previous id selected exist, load this information*/
				$("#number").val(mod.loadInvoiceData()[i].number);/*Set id number*/
				$("#description").val(mod.loadInvoiceData()[i].description);/*set fullname of user*/
				$("#date").val(mod.loadInvoiceData()[i].date);/*Set the username on field*/
				$("#amount").val(mod.loadInvoiceData()[i].amount);
				/*Charge a selected option*/
				CHAMB.loadClientList(true, mod.loadInvoiceData()[i].client.clientid);
			};
			/*chambaid: pId, client: pClient, job: pDescription, date: pDate, note: pNot*/
		};
	},
	model: function() {
		this.userArray = [];/*This array save temp*/
		this.chambaArray = [];
		this.clientArray = [];
		this.invoiceArray = [];
		this.currentUser = [];
		this.globalIdSet = function(tookId) {/*Always create a new globalId in the localStorage*/
			localStorage.setItem("globalId", tookId);
		};
		this.loadUserData = function(){/*This load the users form localStorage*/
			if (localStorage["userStorage"]==undefined)
				localStorage.setItem("userStorage","");
			return JSON.parse(localStorage.userStorage);
		};
		this.saveUserData = function(pId, pName, pUserName, pPass, pOrder, pIndex){/*This save an users in the localStorage*/
			debugger;
			if (localStorage["userStorage"]==undefined)
				localStorage.setItem("userStorage","");
			var userObj = {userid: pId, fullName: pName, username: pUserName, password: pPass};
			var mod = new CHAMB.model();
			this.userArray = mod.loadUserData();
			/*Here... or create a new or update the correct JSON file*/
			if (!pOrder) {/*New cration*/
				this.userArray.push(userObj);
			} else {/*this... update their existence*/
				this.userArray.splice(pIndex, 1, userObj);
			}
			localStorage.userStorage = JSON.stringify(this.userArray);
		};
		this.loadClientData = function(){/*This load the clients form localStorage*/
			if (localStorage["clientStorage"]==undefined){
				localStorage.setItem("clientStorage","[]");
			}
			return JSON.parse(localStorage.clientStorage);
		};
		this.saveClientData = function(pId, pName, pCed, pTel, pOrder, pIndex){/*This save an clients in the localStorage*/
			debugger;
			if (localStorage["clientStorage"]==undefined)
				localStorage.setItem("clientStorage","");
			var clientObj = {clientid: pId, fullName: pName, ced: pCed, tel: pTel};
			var mod = new CHAMB.model();
			this.clientArray = mod.loadClientData();
			/*Here... or create a new or update the correct JSON file*/
			if (!pOrder) {/*New cration*/
				this.clientArray.push(clientObj);
			} else {/*this... update their existence*/
				this.clientArray.splice(pIndex, 1, clientObj);
			}
			localStorage.clientStorage = JSON.stringify(this.clientArray);
		};
		this.loadChambaData = function(){/*This load the chqmba orm localStorage*/
			if (localStorage["chambaStorage"]==undefined)
				localStorage.setItem("chambaStorage","[]");
			return JSON.parse(localStorage.chambaStorage);
		};
		this.saveChambaData = function(pId, pClient, pDescription, pDate, pNot, pOrder, pIndex){/*This save  chqmba  in the localStorage*/
			debugger;
			if (localStorage["chambaStorage"]==undefined)
				localStorage.setItem("chambaStorage","[]");
			var chambaObj = {chambaid: pId, client: pClient, job: pDescription, date: pDate, note: pNot};
			var mod = new CHAMB.model();
			this.chambaArray = mod.loadChambaData();
			/*Here... or create a new or update the correct JSON file*/
			if (!pOrder) {/*New cration*/
				this.chambaArray.push(chambaObj);
			} else {/*this... update their existence*/
				this.chambaArray.splice(pIndex, 1, chambaObj);
			}
			localStorage.chambaStorage = JSON.stringify(this.chambaArray);
		};
		this.loadInvoiceData = function(){/*This load the invoice form localStorage*/
			if (localStorage["invoiceStorage"]==undefined)
				localStorage.setItem("invoiceStorage","[]");
			return JSON.parse(localStorage.invoiceStorage);
		};
		this.saveInvoiceData = function(pId, pNumber, pClient, pDescription, pDate, pAmount, pOrder, pIndex){/*This save an invoice in the localStorage*/
			debugger;
			if (localStorage["chambaStorage"]==undefined)
				localStorage.setItem("chambaStorage","");
			var invoiceObj = {invoiceid: pId, number: pNumber, client: pClient, description: pDescription, date: pDate, amount: pAmount};
			var mod = new CHAMB.model();
			this.invoiceArray = mod.loadInvoiceData();
			/*Here... or create a new or update the correct JSON file*/
			if (!pOrder) {/*New cration*/
				this.invoiceArray.push(invoiceObj);
			} else {/*this... update their existence*/
				this.invoiceArray.splice(pIndex, 1, invoiceObj);
			}
			localStorage.invoiceStorage = JSON.stringify(this.invoiceArray);
		};
		this.saveCU = function(pUser, pState){
			debugger;
			if (localStorage["currentUser"]==undefined)/*if currentUser doesn't exist it's created*/
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
