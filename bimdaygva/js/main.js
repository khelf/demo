(function ($) {
	"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  var wScroll = $(this).scrollTop();
	if (scroll < 400) {
    $('#back-top').fadeIn(500);
	} else {
    $('#back-top').fadeIn(500);
  }
  		// Back To Top Appear
      wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
});

$(document).ready(function(){
	
		$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
  });

  // a script to toggle two button to show text in accueil
			$("#btn1").attr("autofocus", true);
			$("#btn1").addClass("btn-active");
            $("#btn2").click(function () {
                $("#btn1").attr("autofocus", false);
				$("#btn1").removeClass("btn-active");
                $("#btn2").attr("autofocus", true);
                $("#matin").hide();
                $("#midi").removeClass("d-none");
            });
            $("#btn1").click(function () {
                $("#btn2").attr("autofocus", false);
                $("#matin").show();
                $("#midi").addClass("d-none");
            });
});

            $(".navbar-toggler").click(function() {
                $('body').toggleClass('modal-open');
            });
})(jQuery);

function subscribetonewsletter(){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
      console.log(this.readyState);
         if (this.readyState == 4) {           
        if(!(this.response).includes("Error")){
    document.getElementById("newsletter_email").value ="";
    document.getElementById("_subscribetonewsletterstatus").innerHTML="Merci de vous êtes inscrit à notre newsletter.";
    }else {document.getElementById("_subscribetonewsletterstatus").innerHTML="Veuillez vérifier vos informations";}
     }
    };
  xhttp.timeout = 5000;
  xhttp.ontimeout=function (){
      document.getElementById("_subscribetonewsletterstatus").innerHTML="Veuillez réessayer ou vérfier votre connexion";
  };
  document.getElementById("_subscribetonewsletterstatus").innerHTML ="Envoi en cours...";
  var email=document.getElementById("newsletter_email").value;
  var state = false;
  state = validateEmail(email);
  if(state){
  var url="newsletter.php?&email="+encodeURIComponent(email);
  xhttp.open("GET", url, true);
  xhttp.send();
  }else{
  document.getElementById("_subscribetonewsletterstatus").innerHTML="Veuillez vérifier vos informations";
  }

}

function validateEmail(email) {
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

