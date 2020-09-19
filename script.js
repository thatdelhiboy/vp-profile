$(window).scroll(function(){ 
    //more then or equals to 
    if($(window).scrollTop() >= 100 && $(window).width() > 767 ){ 
        $( ".topallprofilestats" ).css( "display", "block" ); 
   
    //less then 100px from top 
    }
    if($(window).scrollTop() <= 100 ){ 
        $( ".topallprofilestats" ).css( "display", "none" ); 
   
    //less then 100px from top 
    }
  }); 