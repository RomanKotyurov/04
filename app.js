let headerMenu = document.getElementById('header-menu')
headerMenu.onclick = function () {
  
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')

    let menuProfile = document.getElementById('menu-profile')
    menuProfile.innerText = 'Новый пользователь'
}

let menuCompany = document.getElementById('menu-company')
menuCompany.onclick = function (){

    let picture = document.getElementById('picture')
    picture.src = 'https://cms.prodengi.kz/uploads/news/vlasti-bagam-obyavili-cto-eks-glavu-kriptobirzi-ftx-vydadut-v-ssa.jpg'

}

let menuMap = document.getElementById('menu-map')
menuMap.onclick = function (){

    let picture = document.getElementById('picture')
    picture.src = 'http://balovin.ru/livejournal/2012/5/21/1.jpg'

}

let menuGoods = document.getElementById('menu-goods')
menuGoods.onclick = function (){

    let picture = document.getElementById('picture')
    picture.src = 'https://w.forfun.com/fetch/e6/e6845dfe2fff9b2d6156ef78671f4957.jpeg'

}

let menuContacts = document.getElementById('menu-contacts')
menuContacts.onclick = function (){

    let picture = document.getElementById('picture')
    picture.src = 'https://coinlife.com/wp-content/uploads/2020/05/shutterstock_1049641082.jpg'

}

let menuProfile = document.getElementById('menu-profile')
menuProfile.onclick = function (){

    let picture = document.getElementById('picture')
    picture.src = 'https://overclockers.ru/st/legacy/blog/370098/129925_O.jpg'

}