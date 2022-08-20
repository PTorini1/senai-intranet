


let dia = document.getElementsByClassName('dia');
let icone = document.getElementsByName('icone-aniversario');

for(let i = 0; i < dia.length; i++){
    if(dia[i].textContent < date.getDate()){
        icone[i].style = 'background-image: url(images/icons/calendario_passou.png);'
    } else if (dia[i].textContent == date.getDate()){
        icone[i].style = 'background-image: url(images/icons/bolo-de-aniversario.png);'
    }else{
        icone[i].style = 'background-image: url(images/icons/calendario_chegar.png);'
    }
}