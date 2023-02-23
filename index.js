let logo = [
    'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1600'
]
let web=[
    'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1600',
]

let mobile=[
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1600'
]

let divAll = document.getElementById('alldiv');
let divLogo = document.getElementById('logodiv');
let divWeb = document.getElementById('webdiv');
let divMobile = document.getElementById('mobilediv');
let allButton = document.getElementById('all')
let logoButton = document.getElementById('logo')
let webButton = document.getElementById('web')
let mobileButton = document.getElementById('mobile')

function addImages(){
    for(let i = 0; i < logo.length; i++){
        divAll.innerHTML+=`<img src=${logo[i]}>`;
        divLogo.innerHTML+= `<img src=${logo[i]}>`;
    }
    for(let i = 0; i < web.length; i++){
        divAll.innerHTML+=`<img src=${web[i]}>`;
        divWeb.innerHTML+= `<img src=${web[i]}>`;
    }
    for(let i = 0; i < mobile.length; i++){
        divAll.innerHTML+=`<img src=${mobile[i]}>`;
        divMobile.innerHTML+= `<img src=${mobile[i]}>`;
    }
}
addImages();
allButton.addEventListener("click",()=>{
    allNone();
    divAll.style.display='flex'
})
logoButton.addEventListener("click",()=>{
    allNone();
    divLogo.style.display='flex'
})
webButton.addEventListener("click",()=>{
    allNone();
    divWeb.style.display='flex'
})
mobileButton.addEventListener("click",()=>{
    allNone();
    divMobile.style.display='flex'
})
function allNone(){
    divLogo.style.display='none'
    divWeb.style.display='none'
    divMobile.style.display='none'
    divAll.style.display='none'
}