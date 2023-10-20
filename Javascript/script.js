

const numeriDaGenerare = 5
const numeriPagine = document.getElementById('visualizza');
const numeriGeneratiArray = [];
const numeriUtente = [];



const btn = document.querySelector('button')
btn.addEventListener('click',function(){
    generaNumeri()
     
    setTimeout (timer, 5000);
    setTimeout (chiedereNumeri, 6000)

    
   
    
    
})


function generaNumeri(){
    
    
    while (numeriGeneratiArray.length < numeriDaGenerare){
        let numero = getRndInteger (1,100)
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


function chiedereNumeri(){
    
    let num1 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num2 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num3 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num4 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num5 = parseInt(prompt('Quanti numeri ti ricordi?'))

    const array = numeriUtente.push(num1,num2,num3,num4,num5)


    console.log(array, numeriUtente)
    
    
    if (isNaN (num1) || isNaN (num2) || isNaN (num3) || isNaN (num4) || isNaN (num5)){
        alert('Bisogna inserire solo numeri.')
    }
    
}



    


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

