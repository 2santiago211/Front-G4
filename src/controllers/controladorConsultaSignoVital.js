import { signosVitalesSimulados } from "../data/simuladorSignoVital.js"

let fila = document.getElementById('fila')
//DEBO RECORRER LOS DATOS DE LA BD PARA PINTARLOS

signosVitalesSimulados.forEach(function(signosVitales){
    console.log(signosVitales)
    //APLICANDO TRAVERSING

    //1-CREO UNA COLUMNA PARA CADA PACIENTE
     let columna = document.createElement('div')
     columna.classList.add('col')

     //2-CREO UNA TARJETA PARA CAJA PACIENTE
     let tarjeta = document.createElement('div')
     tarjeta.classList.add('card','h-100','p-50','shadow')

     //3-CREO UNA ETIQUETA PARA EL NOMBRE DE CADA PACIENTE
     let etiquetaNombre=document.createElement('h3')
     etiquetaNombre.classList.add('text-center')
    etiquetaNombre.textContent='Nombre: '+signosVitales.nombre

    let etiquetaIcono=document.createElement('img')
    etiquetaIcono.classList.add('img-fluid', 'w-50','p-3','mx-auto','d-block')
    etiquetaIcono.src='../../assets/img/Signos-VitaLes.png'


    let etiquetaValor=document.createElement('h3')
    etiquetaValor.classList.add('text-center')
    etiquetaValor.textContent='Valor: '+signosVitales.valor


    let etiquetaFechaMedida=document.createElement('h3')
    etiquetaFechaMedida.classList.add('text-center','textosura')
    etiquetaFechaMedida.textContent='Fecha Media: '+signosVitales.fechaMedida

    //PASO FINAL --> ASOCIO LAS ETIQUETAS
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaValor)
    tarjeta.appendChild(etiquetaFechaMedida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})