lista = document.getElementById("lista-derecho-penal");
botonUl = document.getElementById("boton-ver-mas-penal");
boton = document.getElementById("boton-ver-mas-penal-button");

boton.addEventListener("click", function () {
  botonUl.remove();

  lista.innerHTML += `
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <i class="bi bi-chevron-double-right pe-2 text-gold"></i>Audiencias indagatorias y explicativas
    </li>
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <i class="bi bi-chevron-double-right pe-2 text-gold"></i>Excarcelación y eximision de prision
    </li>
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <i class="bi bi-chevron-double-right pe-2 text-gold"></i>Elaboración de estrategias de defensas
    </li>
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <i class="bi bi-chevron-double-right pe-2 text-gold"></i>Juicios orales y abreviados
    </li>
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <i class="bi bi-chevron-double-right pe-2 text-gold"></i>Salidas transitorias y libertad condicional
    </li>
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <i class="bi bi-chevron-double-right pe-2 text-gold"></i>Probation (suspensión del juicio prueba)
    </li>
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <i class="bi bi-chevron-double-right pe-2 text-gold"></i>Denuncias y Querellas
    </li>
    <li class="list-group-item text-bg-dark nuevo" style="background-color: #f4f4f4">
      <span id="boton-cerrar" class="clickeable">Cerrar</span>
    </li>
  `;
  
  var botonCerrar = document.querySelector("#boton-cerrar");
  botonCerrar.addEventListener("click", function() {
    var elementosAQuitar = lista.querySelectorAll(".list-group-item.nuevo");
    elementosAQuitar.forEach(function(elemento) {
      elemento.remove();
    });
    
    lista.appendChild(botonUl);
  });
})
