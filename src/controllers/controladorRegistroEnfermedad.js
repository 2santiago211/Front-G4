let cajaNombre = document.getElementById('nombreEnfermedad')
let cajaSintoma = document.getElementById('sintomaEnfermedad')
let cajaClasificacion = document.getElementById('clasificacionEnfermedad') 
let cajaGrado = document.getElementById('gradoEnfermedad')
let cajaProbabilidadVivir = document.getElementById('probabilidadVivirEnfermedad') 

let botonRegistroEnfermedad = document.getElementById('botonregistropaciente')

// 5- DETECTAR EL EVENTO DE CLIC EN EL BOTON
botonRegistroEnfermedad.addEventListener('click', function(evento) {
    evento.preventDefault();

    // 6- RECOGER LOS DATOS
    let datosFormularioEnfermedad = {
        nombre: cajaNombre.value,
        sintoma: cajaSintoma.value,
        clasifiacion: cajaClasificacion.value,
        grado: cajaGrado.value,
        probabilidadVivir: cajaProbabilidadVivir.value
    }
    
    console.log(datosFormularioEnfermedad);

    Swal.fire({
        title: "¡Buen Trabajo!",
        text: "¡Ya haces parte de nuestra familia!", // ESTE ES EL ALERTA
        icon: "success"
    })
})
