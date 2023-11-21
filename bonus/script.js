// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

// creiamo il container
const container = document.querySelector(".container");

// iniziamo il ciclo
for(let i=1; i<=100; i++){
    // creiamo un div generico
    const square = document.createElement("div");
    // aggiungiamo il div al container
    container.append(square);
    // aggiungiamo la classe square al div
    square.classList.add("square");
    // aggiungiamo il contenuto al div con condizioni
    if(i % 3 === 0 & i % 5 === 0){
        square.append("Fizz Buzz");
        square.style.backgroundColor = "yellow";
    }
    else if (i % 3 === 0){
        square.append("Fizz");
        square.style.backgroundColor = "blue";
    }
    else if (i % 5 === 0){
        square.append("Buzz");
        square.style.backgroundColor = "rgb(47, 255, 0)";
    }
    else{
        square.append(i);
    }  
}