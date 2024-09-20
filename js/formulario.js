
function enviarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value
  var sexo = document.getElementsByName('sexo')
  let sexoSeleccionado = ""

  var telefono = document.getElementById('telefono').value
  var descripcion = document.getElementById('descripcion').value

  var e1 = document.querySelector('.e1')
  var e2 = document.querySelector('.e2')
  var e3 = document.querySelector('.e3')
  var e4 = document.querySelector('.e4') 
  
  e1.classList.remove('errorTrue')
  e2.classList.remove('errorTrue')
  e3.classList.remove('errorTrue')
  e4.classList.remove('errorTrue')

  var error = false;
  if (nombre == "" || nombre == null) {
    error = true ;
    e1.classList.add('errorTrue')
  }

  if (apellidos == "" || apellidos == null) {
    error = true
    e2.classList.add('errorTrue')
  }

  var errorSexo = true
  for (const radio of sexo) {
    if (radio.checked) {
        sexoSeleccionado = radio.value;
        errorSexo = false
        break;
    }
  }
  if (errorSexo) {
    error = true
    e3.classList.add('errorTrue')
  }


  if (telefono < 111111111 || telefono > 999999999) {
    error = true
    e4.classList.add('errorTrue')
  }
  
  if (!error) {
    var cadena = 'Nombre: '+nombre+'%0D%0A'+
    'Apellidos: '+apellidos+'%0D%0A'+
    'Sexo: '+sexoSeleccionado+'%0D%0A'+
    'Telefono: '+telefono+'%0D%0A'+'%0D%0A'+
    'Descripción: %0D%0A'+descripcion;

    window.location.href = "mailto:alexcesarfer1234@gmail.com?subject=Envio de Cuestionario&body="+cadena;
  }
}