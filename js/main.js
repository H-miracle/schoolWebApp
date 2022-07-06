 const nav = document.querySelector('nav');
// change background when scroll exceeds 0
window.addEventListener('scroll', () => {
   nav.classList.toggle('window-scroll', window.scrollY > 0)
});