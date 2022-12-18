let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
let slideindex = 0;
showSlide();

function showSlide() {
  let i;
  let slides = document.getElementsByClassName("items");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slides.length) { slideindex = 1 }
  slides[slideindex - 1].style.display = "block";
  setTimeout(showSlide, 4000); // Change image every 4 seconds
}
let btn = document.getElementById("fbtn");
btn.addEventListener("click",()=>{
  location.href = "search.html"
})
let formData = JSON.parse(localStorage.getItem('formData')) || []
formData.forEach((element)=>{
  let ename = document.getElementById("hname");
  ename.innerText ="Hello ," + element.fname;
  ename.style.marginTop = "5px"
})
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
