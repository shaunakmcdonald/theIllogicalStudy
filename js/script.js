$(document).ready(function(){

  $('#all').click(function (e) {
    e.preventDefault();
    $('.projects').show();
    $('.products').show();
    $('.furniture').show();
  });

  $('#furniture').click(function (e) {
    e.preventDefault();
    $('.projects').hide();
    $('.products').hide();
    $('.furniture').show();
  });

  $('#products').click(function (e) {
    e.preventDefault();
    $('.projects').hide();
    $('.products').show();
    $('.furniture').hide();
  });

  $('#projects').click(function (e) {
    e.preventDefault();
    $('.projects').show();
    $('.products').hide();
    $('.furniture').hide();
  });

  $(".cross").hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  });
});

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
});
});
})


  






/*$(document).ready(function(){
  $('.menuItem').on('click', function (e) {

  var itemClass = $(this).attr('data-item');

  if(itemClass == '.furniture')
  {
    $('.' + itemClass).show('.furniture').hide('.projects','.products');
  } 
})
})

    // Hide all


  //start code
/* 
  $('#optionsWrapper').hover(
  	function() {
  		$(this).find('img.nocolor').stop().animate({'opacity':'0'}, 1000);
  	},
  	function() {
  		$(this).find('img.nocolor').stop().animate({'opacity': '1'}, 1000);
  	
  	});

});



 $('nav li ul').hide().removeClass('fallback');
  $('nav li').hover();
});




	function fallback () {
		$('ul', this).stop().slideDown(100);
  	}
 	function () {
    	$('ul', this).stop().slideUp(100);
	}
);
*/