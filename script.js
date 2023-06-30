// Datos de usuarios registrados en el sistema
const usuarios = [
  { usuario: "Pedro Perez", contrasena: "0000", saldo: 500 },
  { usuario: "Esteban Quito", contrasena: "1111", saldo: 20 },
  { usuario: "Silvia Fuerte", contrasena: "2222", saldo: 800 },
];

let usuarioActual = null;

// Inicio de sesión
function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  usuarioActual = usuarios.find(
    (user) => user.usuario === usuario && user.contrasena === contrasena
  );

  if (usuarioActual) {
    document.getElementById("formulario-inicio-sesion").style.display = "none";
    document.getElementById("menu-cajero").style.display = "block";
    document.getElementById("nombre-usuario").innerHTML = `Bienvenido, ${usuario}`;
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

// Consultar el saldo
function consultarSaldo() {
  alert(`Su saldo actual en su cuenta es: $${usuarioActual.saldo}`);
}

// Ingresar un monto
function ingresarMonto() {
  const monto = parseFloat(prompt("Ingrese el monto a depositar:"));

  if (isNaN(monto) || usuarioActual.saldo + monto > 990) {
    alert("Monto inválido.  El saldo total no puede ser mayor a 990.");
  } else {
    const saldoTotal = usuarioActual.saldo + monto;
    if (saldoTotal < 10) {
      alert("Monto inválido. El saldo total no puede ser menor a 10.");
    } else {
      usuarioActual.saldo += monto;
      alert(
        `Su deposito fue de $${monto} en su cuenta. Su saldo actual es de: $${usuarioActual.saldo}`
      );
    }
  }
}

// Función para retirar un monto
function retirarMonto() {
  const monto = parseFloat(prompt("Ingrese el monto a retirar:"));

  if (isNaN(monto) || monto > usuarioActual.saldo) {
    alert("Monto inválido. No puede exceder el saldo disponible.");
  } else {
    const saldoTotal = usuarioActual.saldo - monto;
    if (saldoTotal < 10) {
      alert("Monto inválido. El saldo total no puede ser menor a 10.");
    } else {
      usuarioActual.saldo -= monto;
      alert(`Se ha retirado $${monto} de su cuenta. Saldo actual: $${usuarioActual.saldo}`);
    }
  }
}

// Función para salir
function cerrarSesion() {
  usuarioActual = null;
  document.getElementById("formulario-inicio-sesion").style.display = "block";
  document.getElementById("menu-cajero").style.display = "none";
  document.getElementById("usuario").value = "";
  document.getElementById("contrasena").value = "";
}

function ejecutarOpcion() {
  const opcion = parseInt(document.getElementById("opcion").value);

  switch (opcion) {
    case 1:
      consultarSaldo();
      break;
    case 2:
      ingresarMonto();
      break;
    case 3:
      retirarMonto();
      break;
    case 4:
      cerrarSesion();
      break;
    default:
      alert("Opción inválida");
      break;
  }
}
