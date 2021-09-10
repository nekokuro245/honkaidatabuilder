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

// Khi hover vô slider thì hiện thanh tìm kiếm
document.getElementById("intro").addEventListener("mouseover", mouseOver);
document.getElementById("intro").addEventListener("mouseout", mouseOut);

function mouseOver() {
document.getElementById("heading-intro").style.display = "flex";}

function mouseOut() {
document.getElementById("heading-intro").style.display = "none";}


// Khi hover thì đổi box và rotate icon 1
const changeRotate1 = document.getElementById("social-bar-1");
const iconChangerotate1 = document.getElementById("icon-rotate-js1");

changeRotate1.addEventListener("mouseover", rotateIn1);
changeRotate1.addEventListener("mouseout", rotateOut1);

function rotateIn1(){
  changeRotate1.style.width = "400px";
  iconChangerotate1.style.transform = 'rotate(0deg)';
}

function rotateOut1(){
  changeRotate1.style.width = "100px";
  iconChangerotate1.style.transform = 'rotate(360deg)';
}

// Khi hover thì đổi box và rotate icon 2
const changeRotate2 = document.getElementById("social-bar-2");
const iconChangerotate2 = document.getElementById("icon-rotate-js2");

changeRotate2.addEventListener("mouseover", rotateIn2);
changeRotate2.addEventListener("mouseout", rotateOut2);

function rotateIn2(){
  changeRotate2.style.width = "400px";
  iconChangerotate2.style.transform = 'rotate(0deg)';
}

function rotateOut2(){
  changeRotate2.style.width = "100px";
  iconChangerotate2.style.transform = 'rotate(360deg)';
}

// Khi hover thì đổi box và rotate icon 3
// const changeRotate3 = document.getElementById("social-bar-3");
// const iconChangerotate3 = document.getElementById("icon-rotate-js3");

// changeRotate3.addEventListener("mouseover", rotateIn3);
// changeRotate3.addEventListener("mouseout", rotateOut3);

// function rotateIn3(){
//   changeRotate3.style.width = "400px";
//   iconChangerotate3.style.transform = 'rotate(0deg)';
// }

// function rotateOut3(){
//   changeRotate3.style.width = "100px";
//   iconChangerotate3.style.transform = 'rotate(360deg)';
// }

// Khi hover thì đổi box và rotate icon 4
// const changeRotate4 = document.getElementById("social-bar-4");
// const iconChangerotate4 = document.getElementById("icon-rotate-js4");

// changeRotate4.addEventListener("mouseover", rotateIn4);
// changeRotate4.addEventListener("mouseout", rotateOut4);

// function rotateIn4(){
//   changeRotate4.style.width = "400px";
//   iconChangerotate4.style.transform = 'rotate(0deg)';
// }

// function rotateOut4(){
//   changeRotate4.style.width = "100px";
//   iconChangerotate4.style.transform = 'rotate(360deg)';
// }


// Mở chatbox
const chatBoxbtn = document.querySelector('.js-chatbox')
const closeChatbox = document.querySelector('.js-close-chatbox')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.modal-container')

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








// chatBoxbtn.onclick = function(){
//     modalContainer.style.transform = "translateX(0)";
//     modal.style.display="flex";
// }

// closeChatbox.onclick = function(){
//     modalContainer.style.transform = "translateX(100%)";
//     modal.style.display="none";
// }
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
