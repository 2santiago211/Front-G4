let cajaNombre = document.getElementById('nombreMedicamento'); 
let cajaPresentacion = document.getElementById('presentacionMedicamento'); 
let cajaDosis = document.getElementById('dosisMedicamento');
let cajaLaboratorio = document.getElementById('laboratorioMedicamento');
let cajaFechaCaducidad = document.getElementById('fechaCaducidadMedicamento');
let cajaContraIndicaciones = document.getElementById('contraIndicacionesMedicamento');
let cajaRegistroINVIMA = document.getElementById('registroInvimaMedicamento');
let cajaTieneCopago = document.getElementById('tieneCopagoMedicamento');

let botonRegistroMedicamentos = document.getElementById('botonregistraenfermedad'); 

botonRegistroMedicamentos.addEventListener('click', function(evento) {
    evento.preventDefault();

    let datosFormularioMedicamentos = {
        nombre: cajaNombre.value,
        presentacion: cajaPresentacion.value,
        dosis: cajaDosis.value,
        laboratorio: cajaLaboratorio.value,
        fechaCaducidad: cajaFechaCaducidad.value,
        contraIndicaciones: cajaContraIndicaciones.value,
        registroINVIMA: cajaRegistroINVIMA.value,
        tieneCopago: cajaTieneCopago.checked // Cambiado a .checked
    };

    console.log(datosFormularioMedicamentos);

    Swal.fire({
        title: "¡Buen Trabajo!",
        text: "¡Ya haces parte de nuestra familia!", // ESTE ES EL ALERTA
        icon: "success"
    });
});


