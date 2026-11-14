const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Fechar navegação':'Abrir navegação')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir navegação')}));
// Fecha a navegação por teclado e ao retornar ao layout de computador.
function closeNavigation(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir navegação')}
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeNavigation();menu.focus()}});
window.matchMedia('(min-width:1001px)').addEventListener('change',event=>{if(event.matches)closeNavigation()});
