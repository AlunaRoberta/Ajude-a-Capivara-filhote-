const avanca= document.querySelectorAll('.btn-proximo');

avanca. forEach(button=>{
    Button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso= 'ppasso-' + this,getAttribute('data-proximo'); 

       atualatual.classList.remove('ativo');
       document.gtElementeById(proximoPasso).classList.classList.add('ativo');
    })
})