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

// Khi hover thì hiện vkr-box main
const vkrbox1 = document.getElementById("the-first-content");
const Descvkrmain = document.getElementById("desc-vkr-1");

vkrbox1.addEventListener("mouseover", onHovervkrbox1);
vkrbox1.addEventListener("mouseout", offHovervkrbox1);

function onHovervkrbox1(){
  Descvkrmain.style.transform = 'translateY(0)';
}

function offHovervkrbox1(){
  Descvkrmain.style.transform = 'translateY(100%)';
}

// Khi hover thì hiện vkr-box sub 1
const vkrbox2 = document.getElementById("the-second-content");
const Descvkrsub1 = document.getElementById("desc-vkr-2");

vkrbox2.addEventListener("mouseover", onHovervkrbox2);
vkrbox2.addEventListener("mouseout", offHovervkrbox2);

function onHovervkrbox2(){
  Descvkrsub1.style.transform = 'translateY(0)';
}

function offHovervkrbox2(){
  Descvkrsub1.style.transform = 'translateY(100%)';
}

// Khi hover thì hiện vkr-box sub 2
const vkrbox3 = document.getElementById("the-third-content");
const Descvkrsub2 = document.getElementById("desc-vkr-3");

vkrbox3.addEventListener("mouseover", onHovervkrbox3);
vkrbox3.addEventListener("mouseout", offHovervkrbox3);

function onHovervkrbox3(){
  Descvkrsub2.style.transform = 'translateY(0)';
}

function offHovervkrbox3(){
  Descvkrsub2.style.transform = 'translateY(100%)';
}

// Khi hover thì hiện vkr-box sub 3
const vkrbox4 = document.getElementById("the-fourth-content");
const Descvkrsub3 = document.getElementById("desc-vkr-4");

vkrbox4.addEventListener("mouseover", onHovervkrbox4);
vkrbox4.addEventListener("mouseout", offHovervkrbox4);

function onHovervkrbox4(){
  Descvkrsub3.style.transform = 'translateY(0)';
}

function offHovervkrbox4(){
  Descvkrsub3.style.transform = 'translateY(100%)';
}

// Khi hover thì hiện vkr-box sub 4
const vkrbox5 = document.getElementById("the-fifth-content");
const Descvkrsub4 = document.getElementById("desc-vkr-5");

vkrbox5.addEventListener("mouseover", onHovervkrbox5);
vkrbox5.addEventListener("mouseout", offHovervkrbox5);

function onHovervkrbox5(){
  Descvkrsub4.style.transform = 'translateY(0)';
}

function offHovervkrbox5(){
  Descvkrsub4.style.transform = 'translateY(100%)';
}


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
  changeRotate1.style.width = "120px";
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
  changeRotate2.style.width = "120px";
  iconChangerotate2.style.transform = 'rotate(360deg)';
}

// Khi hover thì đổi box và rotate icon 3
const changeRotate3 = document.getElementById("social-bar-3");
const iconChangerotate3 = document.getElementById("icon-rotate-js3");

changeRotate3.addEventListener("mouseover", rotateIn3);
changeRotate3.addEventListener("mouseout", rotateOut3);

function rotateIn3(){
  changeRotate3.style.width = "400px";
  iconChangerotate3.style.transform = 'rotate(0deg)';
}

function rotateOut3(){
  changeRotate3.style.width = "120px";
  iconChangerotate3.style.transform = 'rotate(360deg)';
}

// Khi hover thì đổi box và rotate icon 4
const changeRotate4 = document.getElementById("social-bar-4");
const iconChangerotate4 = document.getElementById("icon-rotate-js4");

changeRotate4.addEventListener("mouseover", rotateIn4);
changeRotate4.addEventListener("mouseout", rotateOut4);

function rotateIn4(){
  changeRotate4.style.width = "400px";
  iconChangerotate4.style.transform = 'rotate(0deg)';
}

function rotateOut4(){
  changeRotate4.style.width = "120px";
  iconChangerotate4.style.transform = 'rotate(360deg)';
}


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
