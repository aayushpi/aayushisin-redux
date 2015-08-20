/**
 * scripts.js
 */
(function($) {
  $(window).load(function(){
    var revealer = 500;
    $('.spinner').delay(150).fadeOut(150,function(){
    $('#main h1').fadeIn(500,function(){
        $( "#main nav li" ).each(function( index ) {
          $(this).fadeIn(revealer);
          revealer += 300;
        });
    });
  });
  });

  var data ={
    "about" : "<img src='/img/resume.png' />",
    "sample" : "<h1>We walked into a party one day, and the music sucked.</h1><img src='/img/portfolio/piq/piq-header.jpg' width='100%'/><h2>Subhead</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"};

  // Hide Body
  var height = window.innerHeight;
  $('body').css({'overflow': 'hidden', 'height': height});
  // $('#detail').css('top', height + 10);
  // Code to change background on Hover
  // $('#main > nav > ul li a').mouseover(function(){
  $('#main li a, #work a').mouseover(function(){
    var url = "white";
    if($(this).data('bg')){
      var bg = $(this).data('bg');
      url = "url('./img/bg/" + bg + "')";
    }
    // else{
    //   url = "white";
    // }
      $('#background').fadeOut(500, function(){
        $('#background').css({'background' : url, 'background-size' : 'cover', 'background-position' : 'fixed'});
        $('#background').fadeIn(1000);
      });
  });

  //Code to Reveal Section
  $('#main > nav > ul li a').click(function(){
    if($(this).data('navsection') === "work"){
      if($(this).data('navsection') === "work"){
      if(window.innerWidth <700){
        $('#main > h1').fadeOut(100);
        $('#main > nav > ul').fadeOut(100,function(){
          $('.mobileback').fadeIn(100);
        });
      }}
      var section = "#" + $(this).data('navsection');
      // $(section).fadeIn(250);
      var revealer = 500;
      $( "#work li" ).each(function( index ) {
        $(this).fadeIn(revealer);
        revealer += 250;
      });
    }
    
  $('.mobileback').click(function(){
    var revealer = 500;
    // $( "#work li" ).each(function() {
    //   $(this).fadeOut(revealer);
    //   revealer -= 50;
    // });
    $('#work li').fadeOut(0);
    $('.mobileback').fadeOut(100,function(){
      $('#main > h1').fadeIn(100); 
      $('#main > nav > ul').fadeIn(100);
    });
  });


    // else if($(this).data('navsection' === "about"){
    //   $('#background').css('background', "white");
    //   $('body').css('overflow','visible');
    //   $('#detail').html(data.about);
    //   $('#detail').fadeIn(0);
    //   $('#detail').animate({
    //     top: 0
    //   }, 500, "linear");
    // }
  });

  //Code to Reveal Work Detail
  aayush.reveal = function(){
    console.log("sup");
    $('#background').css('background', "white");
    $('body').css('overflow','visible');
    // $('#detail div').html(data.sample);
    $('#detail').fadeIn(0);
    // $('#detail').animate({
    //   top: 60
    // }, 500, "linear");
  };

  // Jumper
  $('#close ul li').click(function(){
    var jumper = $(this).data('id');
     console.log("sup");
    var jump = '*[data-section="' + jumper + '"]';
    $('html,body').animate({
        scrollTop: $(jump).offset().top},
        '500', function(){
    });
  });
  $('.mobileclose a').click(function(){
    $('#detail').css('margin-top','1500');
    $('#detail').html('');
  });

 
}(jQuery));
