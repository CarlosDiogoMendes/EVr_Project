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

    var check=false;
    var check_aux=false;

$('#autocomplete-input').autocomplete({
    lookup: ['Manel','José','Maria','André','Adriana','Inês']
});

$('#newVO').click(function(){
    console.log('click');
    $('#profile-page-wall').html(make_newVO());
    check_aux=false;
});

$('#myTasks').click(function(){
    console.log('clickTasks');
    check_aux=false;
}); 

$('#myVO').click(function(){
    console.log('clickVO');
    check_aux=false;
});

$('#myMessages').click(function(){
    console.log('clickMessages');
    $('#profile-page-wall').html(makeMessages());
    check_aux=false;
}); 

$('#newTask').click(function(){
    console.log('clickTask');
    $('#profile-page-wall').html(make_newTask());
    check_aux=false;
}); 

$('#checkEnterprises').click(function(){
    console.log('clickEnterprises');
    check_aux=true;
    $('#profile-page-wall').html(make_listEnterprises('none','none','none','none'));
    $('#loc').click(function(){
        $('#profile-page-wall').html(make_listEnterprises('block','none','none','none'));//////continuar aqui
        check=true;
    });
    $('#serv').click(function(){
        $('#profile-page-wall').html(make_listEnterprises('none','block','none','none'));//////continuar aqui
        check=true;
    });
    $('#disp').click(function(){
        $('#profile-page-wall').html(make_listEnterprises('none','none','block','none'));//////continuar aqui
        check=true;
    });
    $('#trab').click(function(){
        $('#profile-page-wall').html(make_listEnterprises('none','none','none','block'));//////continuar aqui
        check=true;
    });
});

/*while(check_aux){
    console.log('clicked');
    
    if(check){
        $('#loc').click(function(){
            $('#profile-page-wall').html(make_listEnterprises('none','none','none','none'));
        });
        $('#serv').click(function(){
            $('#profile-page-wall').html(make_listEnterprises('none','none','none','none'));
        });
        $('#disp').click(function(){
            $('#profile-page-wall').html(make_listEnterprises('none','none','none','none'));
        });
        $('#trab').click(function(){
            $('#profile-page-wall').html(make_listEnterprises('none','none','none','none'));
        });
    }
}*/

$('#checkPartners').click(function(){
    console.log('clickPartners');
    $('#profile-page-wall').html(make_listPartners());
    check_aux=false;
});

$('#checkFestivals').click(function(){
    console.log('clickFestivals');
    $('#profile-page-wall').html(make_listFestivals());
    check_aux=false;
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
      