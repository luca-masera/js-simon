

const numeriDaGenerare = 5


const btn = document.querySelector('button')
btn.addEventListener('click',function(){
    generaNumeri()
    let numeriPagine = document.getElementById('visualizza');
    
    
})
function generaNumeri(){
    const numeriGeneratiArray = [];
    
    while (numeriGeneratiArray.length < numeriDaGenerare){
        let numero = getRndInteger (1,16)
        console.log(numero)
        
        
        if(!numeriGeneratiArray.includes(numero)){
            numeriGeneratiArray.push(numero);
        }
        
        let numeriPagine = document.getElementById('visualizza');
        numeriPagine.innerHTML= numeriGeneratiArray
    }
    console.log(numeriGeneratiArray);
    
    return numeriGeneratiArray;
    
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

