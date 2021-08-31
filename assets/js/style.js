function openHonkai(evt, honkaiName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(honkaiName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("intro").addEventListener("mouseover", mouseOver);
document.getElementById("intro").addEventListener("mouseout", mouseOut);

function mouseOver() {
document.getElementById("heading-intro").style.display = "flex";}

function mouseOut() {
document.getElementById("heading-intro").style.display = "none";}


// Mở chatbox
const chatBoxbtn = document.querySelector('.js-chatbox')
const modal = document.querySelector('.js-modal')
const closeChatbox = document.querySelector('.js-close-chatbox')

// Hàm hiển thị chatbox (thêm class open vào modal)
function showChatbox(){
  modal.classList.add('open')
}

// Hàm ẩn chatbox (gỡ bỏ class open của modal)
function hideChatbox(){
  modal.classList.remove('open')
}

//Nghe hành vi click, vào button
chatBoxbtn.addEventListener('click', showChatbox)
closeChatbox.addEventListener('click', hideChatbox)

// $(window).scroll(function () {
//   if($(window).scrollTop() > 0) {
//     element.addClass("animateMe");
//   }
//   else {
//     element.removeClass("animateMe");
//   }
// });

// function myFunction() {
//   document.getElementById("myDIV").style.overflowY = "scroll";
// }