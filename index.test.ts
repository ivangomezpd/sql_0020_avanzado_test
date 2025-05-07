// index.js

const usuarios = [
  { id: 1, nombre: "Iván", edad: 35, email: "ivan@crypto.com" },
  { id: 2, nombre: "Ana", edad: 17, email: "ana@correo.com" },
  { id: 3, nombre: "Carlos", edad: 28, email: "carlos@empresa.com" },
];

export function contarUsuarios() {
  return usuarios.length;
}

export function usuariosMayores() {
  return usuarios.filter(u => u.edad >= 18);
}

export function buscarUsuarioPorEmail(email) {
  return usuarios.find(u => u.email === email) || null;
}
