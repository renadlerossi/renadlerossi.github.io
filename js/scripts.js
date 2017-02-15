	// Acivate/Deactivate modal
	function activateModal() {
		document.getElementById("float").classList.toggle('active');
	}

	// Check code inputs completion to enable verify button
	function checkForm() {
		var f = document.forms["codeform"].elements;
	    var cansubmit = true;

	    for (var i = 0; i < f.length; i++) {
	        if ("value" in f[i] && f[i].value.length == 0)
	            cansubmit = false;
	    }

	    document.getElementById('verify').disabled = !cansubmit;
	}

	// Format currency inputs
	function formatForm(input) {
		var nStr = input.value + '';
	    nStr = nStr.replace( /\,/g, "");
	    x = nStr.split( '.' );
	    x1 = x[0];
	    x2 = x.length > 1 ? '.' + x[1] : '';
	    var rgx = /(\d+)(\d{3})/;
	    while ( rgx.test(x1) ) {
	        x1 = x1.replace( rgx, '$1' + ',' + '$2' );
	    }
	    input.value = x1 + x2;
	}

	// Currencies Declaration
	var currenciesArray = [
		{"currencyName":"EUR", "currencyRate":0.84, "currencyFlag":"images/eur.png", "currencySymbol":"€"},
		{"currencyName":"GBP", "currencyRate":1.74, "currencyFlag":"images/gbp.png", "currencySymbol":"£"}
	];

	// Populate options for currency select
	var selectSender = document.getElementById('sender-select');
	for (var i = 0 in currenciesArray){
	    var opt = document.createElement('option');
	    opt.value = i;
	    opt.innerHTML = currenciesArray[i].currencyName;
	    selectSender.appendChild(opt);
	}

	// Populate options for currency select
	var selectReceiver = document.getElementById('receiver-select');
	for (var i = 0 in currenciesArray){
	    var opt = document.createElement('option');
	    opt.value = i;
	    opt.innerHTML = currenciesArray[i].currencyName;
	    selectReceiver.appendChild(opt);
	}

	// Collect inputs value
	var sender_value = selectSender.value
	var receiver_value = selectReceiver.value

	// Find variables in the template to print
	var sender_variables = {symbol: document.getElementById('sender-symbol'), flag: document.getElementById('sender-flag')};
	var receiver_variables = {symbol: document.getElementById('receiver-symbol'), flag: document.getElementById('receiver-flag')};

	function updatedVariables() {
		sender_value = selectSender.value
		receiver_value = selectReceiver.value

		sender_variables.symbol.innerHTML = currenciesArray[sender_value].currencySymbol;
		sender_variables.flag.style.backgroundImage = "url(" + currenciesArray[sender_value].currencyFlag + ")";
		receiver_variables.flag.style.backgroundImage = "url(" + currenciesArray[receiver_value].currencyFlag + ")";
		receiver_variables.symbol.innerHTML = currenciesArray[receiver_value].currencySymbol;
	}

	window.onload = function() {
		// Define inputs on Window Load
		if (selectSender.selectedIndex == 0) {
            selectReceiver.options[1].selected = true;
        } else {
            selectReceiver.options[0].selected = true;
        }
        // Watch for input changes
	    selectSender.onchange = function() {
	        if (selectSender.selectedIndex == 0) {
	            selectReceiver.options[1].selected = true;
	            updatedVariables();
	        } else {
	            selectReceiver.options[0].selected = true;
	            
	            updatedVariables();
	        }

	    }
	    selectReceiver.onchange = function() {
	    	if (selectReceiver.selectedIndex == 0) {
	    		selectSender.options[1].selected = true;
	    		updatedVariables();
	    	} else {
	    		selectSender.options[0].selected = true;
	    		updatedVariables();
	    	}
	    }
	}