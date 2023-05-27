function filterAnimal(animal){
 var btn=document.getElementsByClassName('button-value');
 for (let i=0;  i< btn.length; i++) {

    btn[i].classList.remove('active');
    
 }

 var btnseleccionado=document.querySelector("button[active='"+ animal +"']");

 btnseleccionado.classList.add('active');



var card=document.getElementsByClassName('cards');
for (let i=0;  i< card.length; i++) {

    card[i].classList.remove('visible');
    
 }


 for (let i=0;  i< card.length; i++) {

    if(card[i].classList.contains(animal)){
        card[i].classList.add('visible');
    
    }
    
 }

}


//Buscador

document.addEventListener('keyup', teclas =>{


    // console.log(teclas.target.value)

    if (teclas.target.matches('#buscador')) {

        document.querySelectorAll('.cards').forEach(cards =>{

            cards.querySelector('.category').textContent.toLowerCase().includes(teclas.target.value.toLowerCase())

            ? cards.classList.remove('ver')
            
            : cards.classList.add('ver')


        })
        
    }



})