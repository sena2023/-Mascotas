function activarImgB(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.add("active");
    imgA.classList.remove("active");

    btnB.classList.add("active");
    btnA.classList.remove("active");

}

function activarImgA(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.remove("active");
    imgA.classList.add("active");

    btnB.classList.remove("active");
    btnA.classList.add("active");

}




/*let animals = {
    data: [
        {
        animalName: "Ivanna",
        category: "perros",
        price: "400",
        image:"ivana.png",
    },
    {
        animalName: "Alvan",
        category: "perros",
        price: "300",
        image:"alvan.png",
    },
    {
        animalName: "Karsten",
        category: "perros",
        price: "200",
        image:"Karsten.png",
    },
    {
        animalName: "Reigner",
        category: "perros",
        price: "240",
        image:"reigner.png",
    },

    {
        animalName: "Ariana",
        category: "gatos",
        price: "40",
        image:"ariana.png",
    },
    {
        animalName: "Remi",
        category: "gatos",
        price: "70",
        image:"remi.png",
    },
    {
        animalName: "Alex",
        category: "gatos",
        price: "100",
        image:"alex.png",
    },

    {
        animalName: "Zoe",
        category: "gatos",
        price: "80",
        image:"zoe.png",
    },


    ],
};*/

for(let i of animals.data){
    //Create card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card",i.category,"hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //animal name
    let name = document.createElement("h5");
    name.classList.add("animal-name");
    name.innerText = i.animalName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);


    document.getElementById("animals").appendChild(card);
}


//parameter passed from button (parameter same as category)

function filterAnimal(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) =>{
        //check if evalue equals innerText
        if(value.toUpperCase() == button.innerText.
        toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    } );
}

    //elect all cards
    let elements = document.querySelectorAll(".cards");
    //loop through all cards
   elements.forEach((element) => {
   // display all cards on 'all' button click
    if (value == "perros" ){
            element.classList.remove("hide");
       }else{
           //elementos por categoria
            if(element.classList.contains(value)){
                //display element basado en category
            element.classList.remove("hide");
           }
         else{
                //hide other elements
              element.classList.add("hide");
            }
     }
    }
    );
    for(let i of animals.data){
        //Create card
        let card = document.createElement("div");
        //Card should have category and should stay hidden initially
        card.classList.add("cards","hide");
    }



//initially display all animals
window.onload = () => {
    filterAnimal("perros");
};

