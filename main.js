// Es una calculadora para convertir los montos de las campras en dolares a pesos argentinos segun que tipo de dolar se vaya a usar para pagar
let importe=parseFloat(prompt("Ingrese el monto a pagar"))
let opcion=prompt("con que dolar pagara?")


function calcularTarjeta(importe) {
    if (parseFloat(importe)){
        let iva=importe*1.21
        let pais=importe*0.8
        let ganancias=importe*1.30
        let resultadoTarjeta=importe+iva+pais+ganancias
        console.log("el costo final es: "+resultadoTarjeta)
    }
    
}
function calcularMep(importe) {
    if(parseFloat(importe)){
        let resultadoMep=importe*1.21
        console.log("El costa final es: ",resultadoMep)

    }
    
}

switch (opcion) {
    case "mep":
        
        calcularMep(importe)
        break;
        case "tarjeta":
            
            calcularTarjeta(importe)
            

    default:
        break;
}