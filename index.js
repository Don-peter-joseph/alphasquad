const togglebar= document.getElementById('togglebutton')
const menu =document.getElementById('menu')
const navlogo=document.getElementById('navbarlogo')

togglebar.addEventListener('click',() =>{
    togglebar.classList.toggle('is-active');
    menu.classList.toggle('active');
})

const highlightmenu=()=>{
    const ele=document.getElementById('highlight')
    const home=document.getElementById('HOME')
    const about=document.getElementById('ABOUT')
    const service=document.getElementById('SERVICES')
    let scrollPos=window.scrollY;
    console.log(scrollPos)

    if(window.innerWidth>900 && scrollPos<300){
        home.classList.add('highlight')
        about.classList.remove('highlight')
        return
    }
    else if(window.innerWidth>900 && scrollPos<800){
        home.classList.remove('highlight')
        about.classList.add('highlight')
        service.classList.remove('highlight')
        return
    }
    else if(window.innerWidth>900 && scrollPos<1600){
        service.classList.add('highlight')
        about.classList.remove('highlight')
        return
    }
    else{
        service.classList.remove('highlight')
    }
    if(ele && innerWidth<900 &&scrollPos<600 || ele){
        ele.classList.remove('highlight')
    }
}
    window.addEventListener('scroll',highlightmenu)
    window.addEventListener('click',highlightmenu)

