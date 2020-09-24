$(document).ready(function(){
	var amout = 1;
	$('.current-amount').text(amout);
	 $('.plus').click(function(){
	 	amout++;
	 	$('.current-amount').text(amout);
	 })
	 $('.minus').click(function(){
	 	if(amout == 1) return;
	 	amout--;
	 	$('.current-amount').text(amout);
	 })
	 $('.wrapper').hide();
	 $('.wrapper').fadeIn(1000);
	 $('.fade1').attr('style','opacity:0');
	 $('.fade2').attr('style','opacity:0');
	 $('.fade3').attr('style','opacity:0');
	 $('.fade4').attr('style','opacity:0');
	 $('.fade5').attr('style','opacity:0');
	 var check  = 0;
	 $("#sidebarToggle").click(function(){
         if(check == 0) {
         	$("#sidenavAccordion").slideToggle("slow",function(){
         		$('body').addClass('sb-sidenav-toggled');
         	});
         	check = 1;
         }
         else {
         	$('body').removeClass('sb-sidenav-toggled');
         	$("#sidenavAccordion").slideToggle("slow");
         	check = 0;
         }
    });
     // messege
     var checkmg = true;
     $('.message-text').attr('style','display:block;');
     setTimeout(function(){
        $('.message-text').removeAttr('style');
        checkmg = false;
    },3000)
     $('.message-box').on('click',function(){
        checkmg = true;
     })
     $('.message').click(function(){
        if(checkmg == true) {
            $('.message-text').attr('style','display:none;');
            checkmg = false;
            return;
        }
        else
        $('.message-box').fadeToggle(200);
     })
})
function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    $('.header').attr('style','position: fixed;width: 100%;transition: 0.3s;top:-8px;border:0;');
    $('.header-dam').attr('style','position: fixed;width: 100%;transition: 0.3s;top:-8px;border:0;background-color: rgba(255,255,255,0.2);');
    $('.search>input::placeholder').attr('style','color: #292929');
    $('.color-hover').attr('style','color:black');
    $('.small-circle-cart').attr('style','background-color:#292929;color:white'); 
 }
 else{
 	$('.header').removeAttr('style');
 	$('.header-dam').removeAttr('style');
 	 $('.color-hover').removeAttr('style');
 	 $('.small-circle-cart').removeAttr('style');
 	 $('.search>input::placeholder').removeAttr('style');
 }
 if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
 	$('.fade1').attr('style','opacity:1;transition:1s;');
 }
 if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  	setTimeout(function(){$('.fade2').attr('style','opacity:1;transition:1s;');},300)
 }
 if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
 	setTimeout(function(){$('.fade3').attr('style','opacity:1;transition:1s;');},300)
 }
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop >1200) {
 	setTimeout(function(){$('.fade4').attr('style','opacity:1;transition:1s;');},300)
 }
  if (document.body.scrollTop > 1600 || document.documentElement.scrollTop >1600) {
 	setTimeout(function(){$('.fade5').attr('style','opacity:1;transition:1s;');},300)
 }
}
window.onscroll = function() {myFunction()};