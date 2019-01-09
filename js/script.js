
// When you scroll down 20px from the top of the page,you can see the button
window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("Btn-top").style.display = "block";
  } else {
    document.getElementById("Btn-top").style.display = "none";
  }
}

// When you click on the button,you will see the top of the page
function topFunction() {
  document.documentElement.scrollTop = 0;
}


// Navigation part

function openNav() {
  document.getElementById("nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("nav").style.width = "0%";
}


//Header-name

const paths = document.querySelectorAll("path");



paths.forEach(drawLines);

function drawLines(path, index) {


    setTimeout(function() {
        path.classList.add("drawSVG")
    }, index * 1000);


}
