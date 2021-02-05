const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#navbar__logo')
const body=document.querySelector('body')
const heroContent=document.querySelector('.hero__content')
const goToGalleryButton=document.querySelector('#galleryButton')
const hero=document.querySelector('.hero')
const gallerySection=document.querySelector('.gallery-section')
const linkGallery=document.querySelector('#linkGallery')
const linkInicio=document.querySelector('#linkInicio')
const linkContacto=document.querySelector('#linkContacto')
const linkAbout=document.querySelector('#linkAbout')
const links=document.querySelector('.navbar__link')
const about=document.querySelector('.about')
const contact= document.querySelector('.contact')

window.onload = (event) => {
  linkInicio.classList.toggle('clicked')
};

const checkLinks = ()=>{
  if(linkInicio.classList.contains('clicked')){
    linkInicio.classList.toggle('clicked')
  }
  if(linkGallery.classList.contains('clicked')){
    linkGallery.classList.toggle('clicked')
  }
  if(linkContacto.classList.contains('clicked')){
    linkContacto.classList.toggle('clicked')
  }
  if(linkAbout.classList.contains('clicked')){
    linkAbout.classList.toggle('clicked')
  }
}
const checkDivs = ()=>{

}
const mobileMenu = () =>
{
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
  body.classList.toggle('active')
}

const appearGallery = () =>
{
  hero.classList.toggle('deactivated')
  heroContent.classList.toggle('deactivated')
  gallerySection.classList.toggle('activate')
  checkLinks()
  linkGallery.classList.toggle('clicked')

}
const goToInicio = () =>{
  heroContent.classList.toggle('deactivated')
  hero.classList.toggle('deactivated')

  if(gallerySection.classList.contains('activate')){
    gallerySection.classList.toggle('activate')
  }
  if(menu.classList.contains('is-active')){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
  }
  if(about.classList.contains('active')){
    about.classList.toggle('active')
  }
  checkLinks()  
  linkInicio.classList.toggle('clicked')
}
const appearGalleryFromNavBars = () =>{
  if(!hero.classList.contains('deactivated')){
    heroContent.classList.toggle('deactivated')
    hero.classList.toggle('deactivated')
  }
  if(menu.classList.contains('is-active')){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
  }
  if(about.classList.contains('active')){
    about.classList.toggle('active')
  }
  gallerySection.classList.toggle('activate')
  checkLinks()

  linkGallery.classList.toggle('clicked')
}

const goToAbout= () =>{
  if(gallerySection.classList.contains('activate')){
    gallerySection.classList.toggle('activate')
  }
  if(!hero.classList.contains('deactivated')){
    heroContent.classList.toggle('deactivated')
    hero.classList.toggle('deactivated')
  }
  if(menu.classList.contains('is-active')){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
  }
  about.classList.toggle('active')
  checkLinks()
  linkAbout.classList.toggle('clicked')
  
}
const goToContact = () =>{
  if(gallerySection.classList.contains('activate')){
    gallerySection.classList.toggle('activate')
  }
  if(!hero.classList.contains('deactivated')){
    heroContent.classList.toggle('deactivated')
    hero.classList.toggle('deactivated')
  }
  if(menu.classList.contains('is-active')){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
  }
  if(about.classList.contains('active')){
    about.classList.toggle('active')
  }
  contact.classList.toggle('active')
    checkLinks()
  linkAbout.classList.toggle('clicked')
}



goToGalleryButton.addEventListener('click',appearGallery)
linkGallery.addEventListener('click',appearGalleryFromNavBars)
menu.addEventListener('click',mobileMenu)
linkInicio.addEventListener('click',goToInicio)
linkAbout.addEventListener('click',goToAbout)
