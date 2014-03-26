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
    var num1 = $("#num1input")
    var num2 = $("#num2input")
    var res  = $('#result')

    $("#convertbutton").click(function() {
      (num1.val() && num2.val())
        ? res.val(Converter.AddTwoNumbers(num1.val(),num2.val()))
        : alert('You need 2 values');
    });

    $("#clearbutton").click(function() {
      num1.val('');
      num2.val('');
      res.val('');
    });
});