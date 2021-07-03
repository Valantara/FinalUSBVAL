

jQuery(document).ready(function(){
  jQuery("#navHGM").hide();
  jQuery("#img3").hide();
  jQuery("#img4").hide();
  jQuery(document).scroll(function(event){
        var position = jQuery(document).scrollTop();
        if(position>250){ 
          jQuery("#navHG").hide();
          jQuery("#navHGM").fadeIn(1000);
                if(position>150){ 
                jQuery("#img2").hide();
                jQuery("#img3").fadeIn(1000);
            }
           if(position>250){ 
                jQuery("#img3").hide();
                jQuery("#img4").fadeIn(1000);
            }
        }else{
          jQuery("#navHGM").hide();
          jQuery("#navHG").show();
        }
  });
});


