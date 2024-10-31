let cajaNombre=document.getElementById('nombreSignoVital')
let cajaValor=document.getElementById('valorSignoVital')
let cajaFechaMedida=document.getElementById('fechaMediaSignoVital')

let botonRegistroSignoVital=document.getElementById('botonregistrosignovital')

botonRegistroSignoVital.addEventListener('click',function(evento){
    evento.preventDefault()


    let datosFormularioSignoVital={
        nombre:cajaNombre,
        valor:cajaValor,
        fechaMedida:cajaFechaMedida
    }
    console.log(datosFormularioSignoVital)

    Swal.fire({
        title: "Buen Trabajo!",
        text: "Ya haces parte de nuestra familia!",//ESTE ES EL ALERTA
        icon: "success"
      })
})