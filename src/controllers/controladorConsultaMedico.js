import {medicosSimulados} from "../data/simuladorMedico.js"

let fila = document.getElementById('fila')
//DEBO RECORRER LOS DATOS DE LA BD PARA PINTARLOS

medicosSimulados.forEach(function(medico){
    console.log(medico)
    //APLICANDO TRAVERSING

   //1-CREO UNA COLUMNA PARA CADA PACIENTE
   let columna = document.createElement('div')
   columna.classList.add('col')

   //2-CREO UNA TARJETA PARA CAJA PACIENTE
   let tarjeta = document.createElement('div')
   tarjeta.classList.add('card','h-100','p-50','shadow')

   //3-CREO UNA ETIQUETA PARA EL NOMBRE DE CADA PACIENTE
   let etiquetaNombre=document.createElement('h2')
   etiquetaNombre.classList.add('text-center','fw-bold')
   etiquetaNombre.textContent='Nombre: '+medico.nombre


   let etiquetaIcono=document.createElement('img')
    etiquetaIcono.classList.add('img-fluid', 'w-50','p-3','mx-auto','d-block')
    etiquetaIcono.src='../../assets/img/MeDico.png'

   let etiquetaMatricula=document.createElement('h4')
   etiquetaMatricula.classList.add('text-center')
   etiquetaMatricula.textContent='Matricula: '+medico.matricula


   let etiquetaEspecialidad=document.createElement('h4')
   etiquetaEspecialidad.classList.add('text-center')
   etiquetaEspecialidad.textContent='Especiadlidad: '+medico.especialidad


   let etiquetaSalario=document.createElement('h4')
   etiquetaSalario.classList.add('text-center')
   etiquetaSalario.textContent='Salario: '+medico.salario


   let etiquetaIps=document.createElement('h4')
   etiquetaIps.classList.add('text-center','textosura')
   etiquetaIps.textContent='Ips: '+medico.ips


   let etiquetaCorreo=document.createElement('h4')
   etiquetaCorreo.classList.add('text-center')
   etiquetaCorreo.textContent='Correo: '+medico.correo


   let etiquetaTelefono=document.createElement('h4')
   etiquetaTelefono.classList.add('text-center')
   etiquetaTelefono.textContent='Telefono: '+medico.telefono


   let etiquetaDireccion=document.createElement('h4')
   etiquetaDireccion.classList.add('text-center')
   etiquetaDireccion.textContent='Direccion: '+medico.direccion


    let etiquetaEstaDisponibleFindeSemana=document.createElement('h5')
    etiquetaEstaDisponibleFindeSemana.classList.add('text-center','textosura')
    etiquetaEstaDisponibleFindeSemana.textContent='Esta Disponible El Fin De Semana?: '+medico.estaDisponibleFindeSemana


    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaEstaDisponibleFindeSemana)
    tarjeta.appendChild(etiquetaMatricula)
    tarjeta.appendChild(etiquetaEspecialidad)
    tarjeta.appendChild(etiquetaSalario)
    tarjeta.appendChild(etiquetaIps)
    tarjeta.appendChild(etiquetaCorreo)
    tarjeta.appendChild(etiquetaTelefono)
    tarjeta.appendChild(etiquetaDireccion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})