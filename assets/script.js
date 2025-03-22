const menuButton = document.getElementById('open-menu');
const closeButton = document.getElementById('close-menu');
const menu = document.getElementById('navigation');
const links = document.querySelectorAll('nav ul a'); 
        

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});

closeButton.addEventListener('click', ()=>{
    menu.classList.remove('open')
})
        
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});