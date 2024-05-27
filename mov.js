function dinero () {
  document.getElementById("Cuota_uno_computadora").innerHTML = "6 cuotas de $ 300.000";
}

function dinero_tot_uno () {
  document.getElementById("Cuota_uno_computadora").innerHTML = "Precio total: $ 3.706.999";
}

function dinero_compu_dos () {
  document.getElementById("Cuota_dos_computadora").innerHTML = "7 cuotas de $ 250.000";
}

function dinero_tot_compu_dos () {
  document.getElementById("Cuota_dos_computadora").innerHTML = "Precio total: $ 4.050.000";
}

function dinero_compu_tres () {
  document.getElementById("Cuota_tres_computadora").innerHTML = "3 cuotas de $ 200.000";
}

function dinero_tot_compu_tres () {
  document.getElementById("Cuota_tres_computadora").innerHTML = "Precio total: $ 2.925.999";
}

function dinero_compu_cuatro () {
  document.getElementById("Cuota_cuatro_computadora").innerHTML = "5 cuotas de $ 400.000";
}

function dinero_tot_compu_cuatro () {
  document.getElementById("Cuota_cuatro_computadora").innerHTML = "Precio total: $ 2.322.400";
}

function dinero_compu_cinco () {
  document.getElementById("Cuota_cinco_computadora").innerHTML = "3 cuotas de $ 510.000";
}

function dinero_tot_compu_cinco () {
  document.getElementById("Cuota_cinco_computadora").innerHTML = "Precio total: $ 3.444.999";
}

function dinero_notebook_uno () {
  document.getElementById("Cuota_uno_notebook").innerHTML = "6 cuotas de $ 500.000";
}

function dinero_tot_notebook_uno () {
  document.getElementById("Cuota_uno_notebook").innerHTML = "Precio total: $ 3.605.000";
}

function dinero_notebook_dos () {
  document.getElementById("Cuota_dos_notebook").innerHTML = "6 cuotas de $ 100.000";
}

function dinero_tot_notebook_dos () {
  document.getElementById("Cuota_dos_notebook").innerHTML = "Precio total: $ 623.725";
}

function dinero_notebook_tres () {
  document.getElementById("Cuota_tres_notebook").innerHTML = "7 cuotas de $ 110.000";
}

function dinero_tot_notebook_tres () {
  document.getElementById("Cuota_tres_notebook").innerHTML = "Precio total: $ 757.500";
}

function dinero_tablet_uno () {
  document.getElementById("Cuota_uno_tablet").innerHTML = "3 cuotas de $ 50.000";
}

function dinero_tot_tablet_uno () {
  document.getElementById("Cuota_uno_tablet").innerHTML = "Precio total: $ 150.000";
}

function dinero_tablet_dos () {
  document.getElementById("Cuota_dos_tablet").innerHTML = "3 cuotas de $ 120.000";
}

function dinero_tot_tablet_dos () {
  document.getElementById("Cuota_dos_tablet").innerHTML = "Precio total: $ 380.400";
}

function dinero_celular_uno () {
  document.getElementById("Cuota_uno_celu").innerHTML = "6 cuotas de $ 130.000";
}

function dinero_tot_celular_uno () {
  document.getElementById("Cuota_uno_celu").innerHTML = "Precio total: $ 695.999";
}

function dinero_celular_dos () {
  document.getElementById("Cuota_dos_celu").innerHTML = "3 cuotas de $ 200.000";
}

function dinero_tot_celular_dos () {
  document.getElementById("Cuota_dos_celu").innerHTML = "Precio total: $ 600.000";
}

function dinero_celular_tres () {
  document.getElementById("Cuota_tres_celu").innerHTML = "11 cuotas de $ 102.000";
}

function dinero_tot_celular_tres () {
  document.getElementById("Cuota_tres_celu").innerHTML = "Precio total: $ 1.164.999";
}

function dinero_celular_cuatro () {
  document.getElementById("Cuota_cuatro_celu").innerHTML = "10 cuotas de $ 120.000";
}

function dinero_tot_celular_cuatro () {
  document.getElementById("Cuota_cuatro_celu").innerHTML = "Precio total: $ 1.140.000";
}

function dinero_celular_cinco () {
  document.getElementById("Cuota_cinco_celu").innerHTML = "4 cuotas de $ 35.000";
}

function dinero_tot_celular_cinco () {
  document.getElementById("Cuota_cinco_celu").innerHTML = "Precio total: $ 175.999";
}

function historia_Mensaje () {
  document.getElementById("hist_bot").innerHTML = "Innovación / Accesibilidad / Excelencia / Compromiso / Inclusión";
}

let nombre = document.getElementById("n_nombre");
let apellido = document.getElementById("n_apellido");
let docu = document.getElementById("dni");
let nombreRegex = /^[^\d]*$/;
let noPoner = /[#$%&*()?/]/;
let correo = document.getElementById("correo");
let numTel = document.getElementById("tel");
let numCel = document.getElementById("cel");
let contador = 0;

function validacionDatos (correcto) {
  let genCirculo = document.querySelector('input[name="genero"]:checked');
  let semana = document.getElementById("fechas");
  let reloj = document.getElementById("time");
  if (nombre.value === "") {
      alert("Por favor ingrese su nombre");
      nombre.focus();
      event.preventDefault();
      return false;
  } else if (nombre.value.length < 2) {
      alert("Por favor ingrese un nombre completo");
      nombre.focus();
      event.preventDefault();
      return false;
  } else if (!nombreRegex.test(nombre.value)) {
      alert("No introduzca números en el nombre");
      nombre.focus();
      event.preventDefault();
      return false;
  } else if (noPoner.test(nombre.value)) {
      alert("No introduzca caracteres como #, ?, / en el nombre");
      nombre.focus();
      event.preventDefault();
      return false;
  } else if (apellido.value === "") {
      alert("Por favor ingrese su apellido");
      apellido.focus();
      event.preventDefault();
    return false;
  } else if (apellido.value.length < 2) {
      alert("Por favor ingrese su apellido completo");
      apellido.focus();
      event.preventDefault();
    return false; 
  } else if (!nombreRegex.test(apellido.value)) {
      alert("No introduzca números en el apellido");
      apellido.focus();
      event.preventDefault();
      return false; 
  } else if (noPoner.test(apellido.value)) {
      alert("No introduzca caracteres como #, ?, / en el apellido");
      apellido.focus();
      event.preventDefault();
      return false;
  } else if (docu.value === "") {
      alert("Por favor introduzca su DNI");
      docu.focus();
      event.preventDefault();
      return false;
  } else if (docu.value.length != 8) {
      alert("Su número de documento debe tener 8 dígitos");
      docu.focus();
      event.preventDefault();
      return false;
  } else if (!genCirculo) {
      alert("Por favor seleccione un género");
      event.preventDefault();
      return false;
  } else if (correo.value === "") {
      alert("Por favor debe introducir un correo electrónico");
      correo.focus();
      event.preventDefault();
      return false;
  } else if (numTel.value === "") {
      alert("Por favor complete su número de teléfono");
      numTel.focus();
      event.preventDefault();
      return false;
  } else if (numCel.value === "") {
      alert("Por favor complete su número de celular");
      numCel.focus();
      event.preventDefault();
      return false;
  } else if (semana.value === 0 || semana.value === "") {
      alert("Por favor seleccione un día de la semana para contactarlo");
      semana.focus();
      event.preventDefault();
      return false;
  } else if (reloj.value === 0 || reloj.value === "") {
      alert("Por favor seleccione un horario para contactarlo");
      reloj.focus();
      event.preventDefault();
      return false;
  }
  return true;
}

document.getElementById("forma").addEventListener("submit", validacionDatos);