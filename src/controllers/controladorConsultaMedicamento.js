import {medicamentosSimulador} from "../data/simuladorMedicamento.js"

let fila = document.getElementById('fila')
//DEBO RECORRER LOS DATOS DE LA BD PARA PINTARLOS

medicamentosSimulador.forEach(function(enfermedad){
    console.log(enfermedad)
    //APLICANDO TRAVERSING

    //1-CREO UNA COLUMNA PARA CADA PACIENTE
    let columna = document.createElement('div')
    columna.classList.add('col')

    //2-CREO UNA TARJETA PARA CAJA PACIENTE
    let tarjeta = document.createElement('div')
    tarjeta.classList.add('card','h-100','p-50','shadow')

    //3-CREO UNA ETIQUETA PARA EL NOMBRE DE CADA PACIENTE
    let etiquetaNombre=document.createElement('h2')
    etiquetaNombre.classList.add('text-center')
    etiquetaNombre.textContent='Nombre: '+enfermedad.nombre

    let etiquetaIcono=document.createElement('img')
    etiquetaIcono.classList.add('img-fluid', 'w-50','p-3','mx-auto','d-block')
    etiquetaIcono.src='../../assets/img/MediCamentoSs.png'


    let etiquetaPresentacion=document.createElement('h4')
    etiquetaPresentacion.classList.add('text-center')
    etiquetaPresentacion.textContent='Presentacion: '+enfermedad.presentacion


    let etiquetaLaboratorio=document.createElement('h3')
    etiquetaLaboratorio.classList.add('text-center','textosura')
    etiquetaLaboratorio.textContent='Laboratorio: '+enfermedad.laboratorio


    let etiquetaFechaCaducidad=document.createElement('h4')
    etiquetaFechaCaducidad.classList.add('text-center','textosura')
    etiquetaFechaCaducidad.textContent='Fecha De Caducidad: '+enfermedad.fechaCaducidad


    let etiquetaContraIndicaciones=document.createElement('h4')
    etiquetaContraIndicaciones.classList.add('text-center')
    etiquetaContraIndicaciones.textContent='Contra Indicaiones: '+enfermedad.contraIndicaciones


    let etiquetaRegistroINVIMA=document.createElement('h4')
    etiquetaRegistroINVIMA.classList.add('text-center')
    etiquetaRegistroINVIMA.textContent='Registro INVIMA: '+enfermedad.registroINVIMA


    let etiquetaTieneCopago=document.createElement('h4')
    etiquetaTieneCopago.classList.add('text-center')
    etiquetaTieneCopago.textContent='Tiene Copago?: '+enfermedad.etiquetaTieneCopago

    //PASO FINAL --> ASOCIO LAS ETIQUETAS
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaPresentacion)
    tarjeta.appendChild(etiquetaLaboratorio)
    tarjeta.appendChild(etiquetaFechaCaducidad)
    tarjeta.appendChild(etiquetaContraIndicaciones)
    tarjeta.appendChild(etiquetaRegistroINVIMA)
    tarjeta.appendChild(etiquetaTieneCopago)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})