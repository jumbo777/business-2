


$(document).ready(function()
{
    $('.contact').click(function (e) 
    {
        $('.card').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.social-media-banner').toggleClass('active');
        $('.email-form').toggleClass('active');  
        var buttonText = $('button.contact#main-button').text();
        if (buttonText === 'back')
        {
            buttonText = 'Send a Quick Email';
            $('button.contact#main-button').text(buttonText);
        }
        else
        {
            buttonText = 'back';
            $('button.contact#main-button').text(buttonText);
        }
    });
// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
});

$("#typed").typed({
  		strings: ["Hi", "Jambo", "Erro"],
  		typeSpeed: 100,
  		startDelay: 0,
  		backSpeed: 60,
  		backDelay: 2000,
  		loop: true,
  		cursorChar: "",
  		contentType: 'html'
  	});
});
//turn on to make the photo follow mouse
// $(document).ready(function()
// {
//     $(document).mousemove(function( event ) 
//     {
//         var docWidth = $(document).width();
//         var docHeight = $(document).height();
//         var xValue = (event.clientX/docWidth)*100;
//         var yValue = (event.clientY/docHeight)*100;
//         $('.photo').css('background-position', xValue+'%,'+yValue+'%');
//     });
// });
