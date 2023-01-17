// // // # Exercice :
// // // >*En utilisant l'attribut style*

// // // >*Cherche des methodes pour résoudre les énoncés suivants :*


// // // // ### 1. Récupère le h1 dans une variable

// let h1 = document.getElementsByTagName('h1')[0];

// // // // ### 2. Créer un programme qui met le texte du h1 en bleu

// h1.style.color = 'blue';

// // // ### 3. Met ce programme dans une fonction

// // // ### 4. Appelle cette function pour qu'elle soit executé 

// // // ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function

let h1 = document.querySelector("h1");

h1.addEventListener('click',function(){
    bleu();
})

function bleu(){
    h1.style.color = "blue";
}







/*

methode 1 
let div = document.getElementById('id');
div.addEventListener('dblclick',()=>{
    //instructions
    console.log('kad');
})

div.addEventListener('click',()=>{
    //instructions
    console.log('Quentin');
})




methode 2 
let bonjour = ()=> {
    console.log(`Bonjour Quentin`);
}

div.addEventListener('click',bonjour);






Methode 3

div.addEventListener('mouseover',()=>{
    document.body.style.background = 'red';
})



*/