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
    
    $('#dashboard').click(function(){
        console.log('click');
        $('#profile-page-wall').html(make_Dashboard());
    });
    
    $('#messages').click(function(){
        console.log('clickMessages');
        $('#profile-page-wall').html(make_Message());
    }); 
    
    $('#VOs').click(function(){
        console.log('clickCalen');
        $('#profile-page-wall').html(make_VOs());
        $('#ped1').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'block';
        });
        $('#ped2').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'block';
        }); 
        $('#ped3').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'block';
        }); 
        $('#closeModal').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'none';
        }); 
    });
    
    $('#empresas').click(function(){
        console.log('clickOPP');
        $('#profile-page-wall').html(make_Empresas());
        $('#ped1').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'block';
        }); 
        $('#ped2').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'block';
        }); 
        $('#ped3').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'block';
        }); 
        $('#closeModal').click(function(){   
            var modal = document.getElementById('modal1');
            modal.style.display = 'none';
        }); 
        // window.onclick = function(event){           
        //     var modal = document.getElementById('modal1');
        //     console.log(event.target); 
        //     console.log(modal); 
        //     if(event.target === modal){
        //         modal.style.display = 'none';
        //     }
        // }  
    });
});