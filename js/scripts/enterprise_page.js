function isFullScreen()
{
    return (document.fullScreenElement && document.fullScreenElement !== null)
         || document.mozFullScreen
         || document.webkitIsFullScreen;
}


function requestFullScreen(element)
{
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
}

function exitFullScreen()
{
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
}

function toggleFullScreen(element)
{
    if (isFullScreen())
        exitFullScreen();
    else
        requestFullScreen(element || document.documentElement);
}


$(document).ready(function(){
	$('.waves-effect.waves-block.waves-light.toogle-fullscreen').click(function() { 
		toggleFullScreen();
    });
    
    $('#myProfile').click(function(){
        console.log('click');
        $('#profile-page-wall').html(make_Profile());
    });
    
    $('#messages').click(function(){
        console.log('clickMessages');
        $('#profile-page-wall').html(make_Message());
    }); 
    
    $('#calendar').click(function(){
        console.log('clickCalen');
        $('#profile-page-wall').html(make_Calendar());
    });
    
    $('#opportunities').click(function(){
        console.log('clickOPP');
        $('#profile-page-wall').html(make_Opportunities());
    });
});