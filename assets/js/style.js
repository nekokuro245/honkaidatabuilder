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
const closeChatbox = document.querySelector('.js-close-chatbox')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.modal-container')

// chatBoxbtn.onclick = function(){
//     modalContainer.style.transform = "translateX(0)";
//     modal.style.display="flex";
// }

// closeChatbox.onclick = function(){
//     modalContainer.style.transform = "translateX(100%)";
//     modal.style.display="none";
// }

// Hàm hiển thị chatbox (thêm class open vào modal)
function showChatbox(){
  modal.classList.add('open')
  modalContainer.style.transform="translateX(0)";
}

// Hàm ẩn chatbox (gỡ bỏ class open của modal)
function hideChatbox(){
  modal.classList.remove('open')
  modalContainer.style.transform="translateX(100%)";
}

// Nghe hành vi click, vào button
chatBoxbtn.addEventListener('click', showChatbox)
closeChatbox.addEventListener('click', hideChatbox)









// Thực hiện animation khi mử
// chatBoxbtn.onclick = function(){
//   var isChangedOpen = modalContainer.ClientAnimation === modalContainerAnimation;
//   if (isChangedOpen){
    
//     modalContainer.style.animation = 'modalFadeout ease 1s';
//   }else{
//     closeChatbox.onclick = function(){
//       modalContainer.style.animation = 'null';
//     }
//   }
// }
// Thực hiện animation khi đóng
// closeChatbox.onclick = function(){
//   if (modalContainerAnimation){
//     modalContainer.style.animation = 'modalFadeout ease 1s';
//   }
// }

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
