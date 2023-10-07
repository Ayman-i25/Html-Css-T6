let img = document.querySelector(".Landing-page .container .lan .imgs .img")
let imagsArray = ["im-2.jpg", "im-3.jpg", "im-4.jpg", "im-5.jpg", "im-6.jpg"]
let backgroundOption = true;
let backgroundInterval;

function randomizimgs() {
    if(backgroundOption === true){
        backgroundInterval = setInterval(() => {

            let randoumNum = Math.floor(Math.random() * imagsArray.length)
            
            img.style.backgroundImage = `url(./imgs/${imagsArray[randoumNum]})`
        },2000)
    }
}

randomizimgs()

// sitting-box 

let settingBox = document.querySelector(".settings-box")
let iconGear = document.querySelector(".settings-box .toggle")

iconGear.onclick = function(){
    settingBox.classList.toggle("open")
    document.querySelector(".toggle .fa-gear").classList.toggle("fa-spin")

}

// switch Colors

const colorsList = document.querySelectorAll(".colors-list li")
if(window.localStorage.getItem("color")){
    document.documentElement.style.setProperty("--main-color",window.localStorage.getItem("color"))
    colorsList.forEach(ele =>{
        ele.classList.remove("active")
        if(ele.dataset.color == window.localStorage.getItem("color")){
            ele.classList.add("active")
        }
    })
}
colorsList.forEach(li => {
    li.addEventListener("click", (e) =>{
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        colorsList.forEach((e) => {
            e.classList.remove("active")
        })
        e.target.classList.add("active")
        window.localStorage.setItem("color",e.target.dataset.color)
    })
})

// switch background-Images
const RaBgSp = document.querySelectorAll(".btn-Background span")
if(window.localStorage.getItem("background-img")){
    if(window.localStorage.getItem("background-img") === "true"){
        backgroundOption = true
    }else{
        backgroundOption = false
        clearInterval(backgroundInterval)
    }
    RaBgSp.forEach(e =>{
        e.classList.remove("active")
    })

    if(window.localStorage.getItem("background-img") == "true"){
        document.querySelector(".btn-Background .yes").classList.add("active")
    }else{
        document.querySelector(".btn-Background .no").classList.add("active")

    }
}
RaBgSp.forEach(span => {
    span.addEventListener("click", (e) =>{
        RaBgSp.forEach((e) => {
            e.classList.remove("active")
        })
        e.target.classList.add("active")

        if(e.target.dataset.bg === "yes"){
            backgroundOption = true;
            randomizimgs()
            window.localStorage.setItem("background-img", true)
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval)
            window.localStorage.setItem("background-img", false)
        }
    })
})

// Show/Hide bullest

let bulletsSpan = document.querySelectorAll(".btn-bullt span")
let bullestsContainer = document.querySelector(".nav-bullets");

if(window.localStorage.getItem("bullets-option")){
    bulletsSpan.forEach(span =>{
        span.classList.remove("active")
    })
    if(window.localStorage.getItem("bullets-option") === "block"){
        bullestsContainer.style.display = "block"
        document.querySelector(".btn-bullt .yes").classList.add("active")
    }else{
        bullestsContainer.style.display = "none"
        document.querySelector(".btn-bullt .no").classList.add("active")
    }
}

bulletsSpan.forEach((span) => {
    span.addEventListener("click" , (e) =>{
        if(e.target.dataset.display === "show"){
            bullestsContainer.style.display = "block"
            localStorage.setItem("bullets-option", 'block')
        }else{
            bullestsContainer.style.display = "none"
            localStorage.setItem("bullets-option", 'none')

        }

        bulletsSpan.forEach((e) => {
            e.classList.remove("active")
        })

        e.target.classList.add("active")
    })
})

//  Reset Option
document.querySelector(".settings-box .reset-btn").onclick = function() {
    localStorage.clear();
    window.location.reload();
}
// skills prograse
let mySkills = document.querySelector(".skills")
window.onscroll = function() {
    let skillsOffsetTop = mySkills.offsetTop;
    let skillsOffsetHeight = mySkills.offsetHeight;
    let windoHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOffsetHeight  - windoHeight)){
        let mySpan = document.querySelectorAll(".skills .container .main-box .skill-prog span")
        mySpan.forEach((span) => {
            span.style.width = span.dataset.prog
        })
    }
}

// creat popup gallary

let imgsGallary = document.querySelectorAll(".img-box img");
imgsGallary.forEach((img) =>{
    img.addEventListener("click", (e) =>{
        let popupOverlay = document.createElement("div");
        popupOverlay.className = "popOverlay";
        document.body.appendChild(popupOverlay);

        let popupBox = document.createElement("div");
        popupBox.className = "popup-Box";
        document.body.appendChild(popupBox);

        let popupImge = document.createElement("img");
        popupImge.src = img.src;
        popupBox.appendChild(popupImge);

        let exit = document.createElement("span");
        exit.className = "close";
        exit.textContent = "X";
        popupBox.append(exit);
    })
})

document.addEventListener("click", (e) =>{
    if(e.target.className == "close"){
        e.target.parentNode.remove();
        document.querySelector(".popOverlay").remove();
    }
})


// nav bullet 

let allBullets = document.querySelectorAll(".nav-bullets .bullet");
let allLinks = document.querySelectorAll(".header-area .container ul li a")
function scrollToSection(element){
    element.forEach((ele) =>{
        ele.addEventListener("click",(e) => {
            
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
    
            })
        })
    })
}
scrollToSection(allBullets)
scrollToSection(allLinks)



let toggleBtn = document.querySelector(".header-area .toggle-menu")
let menu = document.querySelector(".header-area ul")
toggleBtn.addEventListener("click", (e) => {
    menu.classList.toggle("open")
})