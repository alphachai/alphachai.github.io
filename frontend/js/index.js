// handle loading animation
$(document).ready(function($) {
	$("#preloader-wrap").animate({opacity: 0}, 400);
	setTimeout(function() {$("#loading").animate({opacity: 0}, 200);}, 400);
	setTimeout(function() {$("#loading").remove();}, 600);
});

function showMenu() {
	$("#burger").addClass("cross");
	$("#menu").addClass("open");
	$("article").css("opacity", "0.2");
}

function hideMenu() {
	$("#burger").removeClass("cross");
	$("#menu").removeClass("open");
	$("article").css("opacity", "1");
}

// menu animation
$("#burger").click(function() {
  if(!$(this).hasClass("cross")) {
		showMenu();
	} else {
		hideMenu();
	}
});

// hide menu if user clicks on content? need to improve.
$("#content").click(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});

// hide menu if user scrolls
$(window).scroll(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});

// https://github.com/dixonandmoe/rellax
// var rellax = new Rellax('.relax');

// https://github.com/benceg/vanilla-modal
// var modal = new VanillaModal.default();
