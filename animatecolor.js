$('#Year').on('color1', function () {
    $(this).animate({color:'#ffcc00'}, 2500, function(){
        $(this).trigger('color2');
    });
});

$('#Year').on('color2', function () {
    $(this).animate({color:'#ff6699'}, 1500, function(){
        $(this).trigger('color3');
    });
});

$('#Year').on('color3', function () {
    $(this).animate({color:'#3b5998'}, 2500, function(){
        $(this).trigger('color4');
    });
});

$('#Year').on('color4', function () {
    $(this).animate({color:'#00cc99'}, 1500, function(){
        $(this).trigger('color5');
    });
});

$('#Year').on('color5', function () {
    $(this).animate({color:'#99cc00'}, 2500, function(){
        $(this).trigger('color6');
    });
});

$('#Year').on('color6', function () {
    $(this).animate({color:'#ff9966'}, 1500, function(){
        $(this).trigger('color7');
    });
});

$('#Year').on('color7', function () {
    $(this).animate({color:'#3b5998'}, 2500, function(){
        $(this).trigger('color1');
    });
});

// Kick-off the infinite loop by firing one of the events
$(document).ready(function(){
    $('#Year').trigger('color1')
});
