window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '681-1199', containers: 960 },
        mobile: { range: '-680', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#convertbutton").click(function() {
        var num1Value = $("#num1input").val();
        var num2Value = $("#num2input").val();
		var num3Value = $("#result").val();


        if (((num1Value.length !=0) && (num2Value.length !=0))
            || ((num1Value.length == 0) && (num2Value.length == 0)) {
            alert("Please set one field, and only one field")
        }
        if (num1Value.length != 0)  && (num2Value.length !=0){
            $("#result").val(Converter.AddTwoNumbers(num1Value,num2Value ));
        }
        /*else if (fValue.length != 0) {
            $("#cinput").val(Converter.convertFromFahrToCels(fValue)); */
        }
    });
    $("#clearbutton").click(function() {
        $("#num1input").val('');
        $("#num2input").val('');
		$("#result").val('');
    });
        
});