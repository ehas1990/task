$(document).ready(function(){
   $(".fa-bars").click(function(){
  $(".mobile-nav").slideToggle("Slow");
   });
// testimonial
$("#user1").click(function(){
   $(".testimonial2").hide();
   $(".testimonial1").show();
   $(".testimonial3").hide();
   $(".testimonial1").animate({  
      left: '250px',  
      
        
  });    
 });
 $("#user2").click(function(){
   $(".testimonial2").show();
   $(".testimonial1").hide();
   $(".testimonial3").hide();
   $(".testimonial2").animate({  
      left: '250px',  
      
        
  });     
 });

 $("#user3").click(function(){
   $(".testimonial2").hide();
   $(".testimonial1").hide();
   $(".testimonial3").show();
   $(".testimonial3").animate({  
      left: '250px',  
      
        
  });   
 });
});

