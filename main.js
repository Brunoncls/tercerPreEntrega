//Simulador interactivo de intereses plazo fijo ,entregable n°3

let formulario = document.getElementById("formulario");
let contenedor = document.getElementById("contenedor");

class IncrementoParcial {
    constructor(meses,incremento){
        this.meses = meses;
        this.incremento = incremento;
    }
}

const interesCompuesto = (e)=>{
    e.preventDefault();
    let inputs = e.target.children;
    let montoIngresado = parseFloat(inputs[0].value);
    let meses = parseFloat(inputs[1].value);
    let porcentaje = parseFloat(inputs[2].value);
    const interesMensual = porcentaje/12
    let interesDecimal = interesMensual/100

    if(isNaN(montoIngresado)|| isNaN(meses)|| isNaN(porcentaje)){
        let div =document.createElement("div")
        contenedor.innerHTML = ""
        div.innerHTML = `
        <div class="color">
        <h2>Alguno de los datos ingresados no es un número</h2>
        </div>
        `
        contenedor.append(div)

    }else{
        const evolucionPlazo = [];
        let resultado
        for(let i=1; i<=meses; i++){
            resultado = (montoIngresado * Math.pow(1+interesDecimal,i)).toFixed(2)
            //resultado =resultado.toFixed(2)
            evolucionPlazo.push(new IncrementoParcial(i,resultado));
        }
        let div =document.createElement("div")
        contenedor.innerHTML = ""
        div.innerHTML = `
        <div class="color">
        <h2 >A los ${meses} meses usted tendra $${resultado}</h2>
        <button class="botonEvolucion" id="botonEvolucion">VER EVOLUCION</button>
        </div>
        `
        contenedor.append(div)
        let botonEvolucion = document.getElementById("botonEvolucion")

        botonEvolucion.addEventListener("click",() =>{
            contenedor.innerHTML =""
            
            evolucionPlazo.forEach(item => {
                let div1 = document.createElement("div")
                div1.innerHTML = `
                <div class="color">
                <h2>Mes n°${item.meses}   $${item.incremento}</h2>
                </div>
                `
                contenedor.append(div1)
            })
        })
    }

}

formulario.addEventListener("submit",interesCompuesto)



