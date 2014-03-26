var Converter = (function () {
    // private stuff goes here

    

    return {

      
		
		AddTwoNumbers: function (a, b) {
		    
		      var x = parseInt(a);
			  var y = parseInt(b);
			  
			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }
			  
			  var z = x + y;
			  return z;
		}

    }


})();

/*var convert = function () {

	var weight = document.getElementById("imperial").value;
	
	var result = Converter.convertFromImperialToMetric(weight);
	
			document.getElementById("metric").innerHTML = result;
			
}

var add = function () {
      var h = document.getElementById("firstnumber").value;
	  var i = document.getElementById("secondnumber").value;
			

      var addresult = Converter.AddTwoNumbers(h,i);
	  document.getElementById("result").innerHTML = addresult;

} */