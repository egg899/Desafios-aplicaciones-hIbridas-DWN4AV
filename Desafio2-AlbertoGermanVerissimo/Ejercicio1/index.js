//adding export in from is for  type:module in package JSON
// export function esPrimo(numero) {



//     if(numero <=1){
        
//         return `${numero} no es un número primo`;
//     }

//     if(numero === 2){
        
//         return `${numero} es un número primo`;
//     }

//     if(numero % 2 === 0) {
        
//         return `${numero} no es un número primo`;
//     }

//     for(let i =3; i <=Math.sqrt(numero); i+=2) {
//         if (n % i === 0) {
            
//             return `${numero} no es un número primo`;
//         }
//     }


// return `${numero} no es un número primo` ;




// }//esPrimo

function esPrimo(numero) {



    if(numero <=1){
        
        return `${numero} no es un número primo`;
    }

    if(numero === 2){
        
        return `${numero} es un número primo`;
    }

    if(numero % 2 === 0) {
        
        return `${numero} no es un número primo`;
    }

    for(let i =3; i <=Math.sqrt(numero); i+=2) {
        if (numero % i === 0) {
            
            return `${numero} no es un número primo`;
        }
    }


return `${numero} es un número primo` ;




}//esPrimo



//Common JS
module.exports = (esPrimo);

//exports.esPrimo = esPrimo;
