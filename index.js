const boton = document.querySelector('#boton')
let from = document.querySelector('#from')
let to = document.querySelector('#to')
let valor = document.querySelector('#valor')
let resultado = document.querySelector('#resultado')
function getInfo(){

    axios.get('https://s3.amazonaws.com/dolartoday/data.json')
    .then( (result) => {
        console.log('Aqui el resultado')
        console.log(result)
        let datos =  result.data
        localStorage.setItem('monedas', JSON.stringify(datos))
        
       
       
    }).catch((err) => {
        console.log(err);
    });
}
getInfo().then(res=> console.log('Peticion hecha') ).catch(err => console.log(err))
let info = JSON.parse(localStorage.getItem('monedas'))
let usd = info.USD.dolartoday

function convertir(){
  
       let valorFinal= (valor.value * usd).toString()
        
        if(valorFinal){
            resultado.innerHTML = `BsS: ${new Intl.NumberFormat().format(valorFinal)}`
        }
}

boton.addEventListener('click', convertir )



