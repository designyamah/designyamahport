// template_7nwv2yh
// service_nzah3ja
// -uR_rgDGYqwm7a-7a
//navbar
const header = document.querySelector("header");
document.addEventListener('scroll', function(){
    const pixelscroll = window.pageYOffset;
    if(pixelscroll > 60){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})


//contact form
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add('modal__overlay--visible');    
    
    emailjs
      .sendForm(
        "service_nzah3ja",
        "template_7nwv2yh",
        event.target,
        "-uR_rgDGYqwm7a-7a"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add('modal__overlay--visible');

      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
  }

  //toggle contact form
  function toggleModal() {
    document.body.classList.toggle("modal--open");
  }

  //toggle darkmode
  function toggleContrast() {
    document.body.classList.toggle("dark-theme");
  }
  
//   toggle shapesssssss
const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    shapes.forEach((shape, index) => {
        const isOdd = index % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shape.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    })
  

  }


  ///mobile menu
const toggleTag = document.querySelector(".handbuger")
const mainTag = document.querySelector("body")
const navTag = document.querySelector("nav.mobile")

// when i click the toggle tag, toggle a class of open on the main tag
// and if it's open, make the toggle tag say closed
// and not, make the toggle tag say open
toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("hidden")
  navTag.classList.toggle("open")
  if (navTag.classList.contains("open")) {
    toggleTag.innerHTML = `CLOSE`
    // toggleTag.style.color = "white";
  } else {
    toggleTag.innerHTML = `MENU`;
    // toggleTag.style.color = "#333";
  }  
})

//toggle the project link to  hide nav
function togglehidenav() {
  navTag.classList.remove('open')
  mainTag.classList.remove('hidden')
  if (navTag.classList.contains("open")) {
    toggleTag.innerHTML = `CLOSE`
  } else {
    toggleTag.innerHTML = `MENU`
  } 
}

// git config --global user.email"nnyamahjoseph@gmail.com"
// git init
//git add .
//git push