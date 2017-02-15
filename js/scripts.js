	function activateModal() {
		document.getElementById("float").classList.toggle('active');
	}

	function checkForm() {
		var f = document.forms["codeform"].elements;
	    var cansubmit = true;

	    for (var i = 0; i < f.length; i++) {
	        if ("value" in f[i] && f[i].value.length == 0)
	            cansubmit = false;
	    }

	    document.getElementById('verify').disabled = !cansubmit;
	}

	function formatForm(input) {
		var nStr = input.value + '';
		console.log(nStr);
	    nStr = nStr.replace( /\,/g, "");
	    console.log(nStr);
	    x = nStr.split( '.' );
	    console.log(x);
	    x1 = x[0];
	    console.log(x1);
	    x2 = x.length > 1 ? '.' + x[1] : '';
	    console.log(x2);
	    var rgx = /(\d+)(\d{3})/;
	    console.log(rgx);
	    while ( rgx.test(x1) ) {
	        x1 = x1.replace( rgx, '$1' + ',' + '$2' );
	    }
	    input.value = x1 + x2;
	}