var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("frontpage");
  if (slideIndex == 0){slides[0].style.cssText = "background-image: url(img/Coffee1.jpg);"}
  if (slideIndex == 1){slides[0].style.cssText = "background-image: url(img/Coffee1.jpg);"}
  if (slideIndex == 2){slides[0].style.cssText = "background-image: url(img/Coffee2.jpg);"}
  if (slideIndex == 3){slides[0].style.cssText = "background-image: url(img/Coffee3.jpg);"}
  if (slideIndex == 4){slides[0].style.cssText = "background-image: url(img/Coffee4.jpg);"}
  slideIndex++;
  if (slideIndex > 4) {slideIndex = 1}
  setTimeout(showSlides, 4000); 
}
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}