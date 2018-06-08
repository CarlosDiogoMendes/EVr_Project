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

$('#autocomplete-input').autocomplete({
    lookup: ['Manel','José','Maria','André','Adriana','Inês']
});

/*// ajax lookup
$('#autocomplete-input').autocomplete({
    serviceUrl: '/autocomplete/countries'
});

Response from the server must be JSON formatted following JavaScript object:

{
    // Query is not required as of version 1.2.5
    "query": "Unit",
    "suggestions": [
        { "value": "United Arab Emirates", "data": "AE" },
        { "value": "United Kingdom",       "data": "UK" },
        { "value": "United States",        "data": "US" }
    ]
}*/


  });
      