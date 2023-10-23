

const numeriDaGenerare = 5
const numeriPagine = document.getElementById('visualizza');
const numeriGeneratiArray = [];
const numeriUtente = [];



const btn = document.querySelector('button')
btn.addEventListener('click',function(){
    generaNumeri()
     
    setTimeout (timer, 30000);
    setTimeout (chiedereNumeri, 35000)

    
   
    
    
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
    numeriPagine.classList.add('display');
}


function chiedereNumeri(){
    
    let num1 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num2 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num3 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num4 = parseInt(prompt('Quanti numeri ti ricordi?'))
    let num5 = parseInt(prompt('Quanti numeri ti ricordi?'))

    //numeriUtente.push(num1,num2,num3,num4,num5)
    //console.log (numeriUtente)


    //console.log(array, numeriUtente)

    
    if(numeriGeneratiArray.includes(num1)){
        numeriUtente.push(num1)       
                
    }if(numeriGeneratiArray.includes(num2)){
        numeriUtente.push(num2)       
                
    }if(numeriGeneratiArray.includes(num3)){
        numeriUtente.push(num3)       
                
    }if(numeriGeneratiArray.includes(num4)){
        numeriUtente.push(num4)       
                
    }if(numeriGeneratiArray.includes(num5)){
        numeriUtente.push(num5)       
                
    }
    console.log(numeriUtente)
    
    
    if (isNaN (num1) || isNaN (num2) || isNaN (num3) || isNaN (num4) || isNaN (num5)){
        alert('Bisogna inserire solo numeri.')
    }
    
}



    


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

