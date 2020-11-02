// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the menu
var sticky = menu.offsetTop;
// var skill = skills.offsetTop;
// console.log(skill)

// Add the sticky class to the menu when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky +100) {
    menu.classList.add("sticky")
  } else {
    menu.classList.remove("sticky");  
  }
}

// stylist nvabar

document.getElementById("menu-mobile").addEventListener('click',function(){
  document.getElementById('menu').classList.toggle("oke")
});

// Contact Form send

var sent =document.getElementById('form-btn').addEventListener('click',function(){
  document.getElementById('sent').innerHTML='Đã gửi thành công ! cảm ơn ạ'
  document.getElementById('sent').style.display = 'block'
  setTimeout(function() {
      document.getElementById('sent').style.display = 'none'
  },1000)
});

