// change color o navbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10)
});

//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // //change the plus icon
        // const icon = faq.querySelector('.faq-icon img');
        // if(img.src === 'icon-plus.svg'){
        //     img.src === 'icon-minus.svg'
        // }
    })
})


//tablet and mobile nav toggle
const openNav = document.getElementById('open-menu-btn');
const closeNav = document.getElementById('close-menu-btn');
const navMenu = document.getElementById('nav-menu');


openNav.addEventListener('click', () => {
    navMenu.style.display = "flex";
    openNav.style.display = "none";
    closeNav.style.display = "inline-block";
})
closeNav.addEventListener('click', () => {
    navMenu.style.display = "none";
    openNav.style.display = "flex";
    closeNav.style.display = "none";
})
