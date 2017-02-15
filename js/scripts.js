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

	// Currency constructor
	function currency(name, rate, flag, symbol) {
	    this.Name = name;
	    this.Rate = rate;
	    this.Flag = flag;
	    this.Symbol = symbol;
	}

	// Currencies Declaration
	var currenciesArray = [];
	var euro = new currency("EUR", 0.84, "images/eur.png", "€");
	var pounds = new currency("GBP", 1.74, "images/gbp.png", "£");
	currenciesArray.push(euro, pounds);

	var selectSender = document.getElementById('sender-select');
	for (element in currenciesArray){
	    var opt = document.createElement('option');
	    opt.value = element;
	    opt.innerHTML = element.name;
	    selectSender.appendChild(opt);
	}

	var selectReceiver = document.getElementById('receiver-select');
	for (element in currenciesArray){
	    var opt = document.createElement('option');
	    opt.value = element;
	    opt.innerHTML = element.name;
	    selectReceiver.appendChild(opt);
	}