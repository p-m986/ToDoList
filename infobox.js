$(document).ready(function(){
    $("#Info").dblclick(function(){
        console.log("event")
        $(this).css({"margin":"5px", "borderRadius":"50%", "height":'calc(2em + 0.390625vw)', "width":"calc(2em + 0.390625vw)"}, 2000)
        $("#Info").click(function(){
            $(this).animate({top:"110vh", left:"5vw"}, 900, function(){
                $(this).trigger('bounceup');
                $('body').removeClass('nojQuery');
            });
        });
    });

    $("body").on("keydown", function(event){
        if(event.key == "Escape"){
            $("#Info").animate({height:"(2em + 0.390625vw)", width:"(2em + 0.390625vw)"})
            }
       });

    $("#Info").click(function(){
        $(this).animate({top:"110vh", left:"5vw"}, 900, function(){
            $(this).trigger('bounceup');
            $('body').removeClass('nojQuery');
        });
    });
});

//For droping box animation
$('#Info').on('bounceup', function () {
    $(this).animate({ width:"99vw", top:'0.5vh', borderRadius:"4px", left:"0.5vh", height:"97vh"}, 1300, function(){
        $(this).trigger('addItems');
    });
});

$('#Info').on('addItems', function () {
    $('#Info').off('click');   
});

//For bouncing box animation
$('#Info').on('bounce-up1', function () {
    $(this).animate({top:'3vh'}, 300, function(){
        $(this).trigger('bounce-down1');
    });
});

$('#Info').on('bounce-down1', function () {
    $(this).animate({top:'5vh'}, 200, function(){
        $(this).trigger('bounce-up2');
    });
});

$('#Info').on('bounce-up2', function () {
    $(this).animate({top:'4vh'}, 300, function(){
        $(this).trigger('bounce-down2');
    });
});

$('#Info').on('bounce-down2', function () {
    $(this).animate({top:'5vh'}, 200, function(){
        $(this).trigger('expand');
    });
});

$('#Info').on('expand', function () {
    $(this).animate({top:"5px", borderRadius:"4px", height:'99vh', width:"99vw"}, 2000)
    $('body').addClass('nojQuery');
});
