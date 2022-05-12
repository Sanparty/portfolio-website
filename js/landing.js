

let mainlogo = document.getElementById("logo_dsp");


window.onload = function(){
    mainlogo.style.opacity = 1;
    mainlogo.style.transform = "scale(1, 1)";
    };



const logos  = () => {

    

    let webtext = document.querySelector(".web-text");

    let videotext = document.querySelector(".video-text");

    webtext.innerHTML = `<a href="index.html" class="web-link" target="_blank"><img src="img/web_icon_50.svg" id="web_image" alt="Web Development"></a>
    `;

    videotext.innerHTML = `<a href="http://edit.dansanpedro.com" class="video-link" target="_blank"><img src="img/video_editing_icon.svg" id="video_image" alt="Video Editing"></a>
    `;
    let webimage = document.getElementById("web_image");
    let videoimage = document.getElementById("video_image");
    let mainlogo = document.getElementById("logo_dsp");
    var socialmedia = document.querySelectorAll(".social-media_logo");
    var i;


window.onload = function(){
    mainlogo.style.opacity = 1;
    mainlogo.style.transform = "scale(1, 1)";

   
    setTimeout(function() {
        webimage.style.opacity = 1;
        videoimage.style.opacity = 1;
        webimage.style.transform = "scale(1, 1)";
        videoimage.style.transform = "scale(1, 1)";
      }, 1000);

    setTimeout(function() {
        for (i = 0; i < socialmedia.length; i++) {
            socialmedia[i].style.opacity = 1;
            socialmedia[i].style.transform = "scale(1,1)";
          }
      }, 2000);
 
    };
    
    let webmiddle = document.createElement("div");
    webmiddle.classList.add(`middle`);
    let webmiddletext = document.createElement("div");
    webmiddletext.classList.add('text');
    webmiddletext.innerHTML = `WEB DEVELOPMENT`;
    webmiddle.append(webmiddletext);
    webtext.append(webmiddle);

    let videomiddle = document.createElement("div");
    videomiddle.classList.add(`video-middle`);
    let videomiddletext = document.createElement("div");
    videomiddletext.classList.add('text');
    videomiddletext.innerHTML = `VIDEO EDITING`;
    videomiddle.append(videomiddletext);
    videotext.append(videomiddle);

    webtext.addEventListener("mouseover", function (event) {
        webmiddletext.style.opacity = "1";
        webmiddletext.style.textTransform = "uppercase";
    })
    webtext.addEventListener("mouseout", function (event) {
        webmiddletext.style.opacity = "0";
    })

    videotext.addEventListener("mouseover", function (event) {
        videomiddletext.style.opacity = "1";
        videomiddletext.style.textTransform = "uppercase";
    })
    videotext.addEventListener("mouseout", function (event) {
        videomiddletext.style.opacity = "0";
    })



};      

logos();