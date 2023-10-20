

const numeriDaGenerare = 5
const numeriPagine = document.getElementById('visualizza');



const btn = document.querySelector('button')
btn.addEventListener('click',function(){
    generaNumeri()
     
    setTimeout (timer, 5000);
    
   
    
    
})


function generaNumeri(){
    const numeriGeneratiArray = [];
    
    while (numeriGeneratiArray.length < numeriDaGenerare){
        let numero = getRndInteger (1,16)
        console.log(numero)
        
        
        if(!numeriGeneratiArray.includes(numero)){
            numeriGeneratiArray.push(numero);
        }

        
        numeriPagine.innerHTML= numeriGeneratiArray
    }

    console.log(numeriGeneratiArray);
    return numeriGeneratiArray; 
    
}
function timer (){
    numeriPagine.classList.add('display')
}




    


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

