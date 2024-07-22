class users {
    constructor(
      email,
      first_name,
      last_name,
      avatar    ) 
      
      {
      this.id = crypto.randomUUID();
      this.email = email;
      this.first_name = first_name;
      this.last_name = last_name;
      this.avatar = avatar;
      
    }
  }
  
  let users = [];


  let email = document.querySelector("#email");
let first_name = document.getElementById("First_name");
let last_name = document.querySelector("#Last_name");
let avatar = document.querySelector("#Avatar");

// cargar las listas con datos
// especies.forEach((especie) => {
//   let option = document.createElement("option");
//   option.value = especie;
//   option.innerText = especie;
//   listaEspecies.append(option);

//   {
//     /* <select>
// <option value='perro'>perro</option> 
// <option value='gato'>gato</option> 
// </select> */
//   }
// });

// sexo.forEach((item) => {
//   let option = document.createElement("option");
//   option.value = item;
//   option.innerText = item;
//   listaSexo.append(option);
// });

// estaturas.forEach((item) => {
//   let option = document.createElement("option");
//   option.value = item;
//   option.innerText = item;
//   listaEstatura.append(option);
// });
// crear la función para agregar mascotas nuevas
const agregarUsuarios = (event) => {
  event.preventDefault();
  let nuevoUsuarios = new users(
    email.value,
    first_name.value,
    last_name.value,
    avatar.value,
    
  );

  users.push(nuevoUsuarios);
  localStorage.setItem("users", JSON.stringify(users));
  document.querySelector("#formulario-alta").reset();
  email.focus();

  //   nombre.value = "";
  //    listaEspecies.value = "";
  //     raza.value = "";
  //     edad.value = "";
  //     listaSexo.value = "";
  //     listaEstatura.value = "";
  //     color.value = "";
  //     vacunado.checked = false;
  //     esterilizado.checked = false;
  //     contacto.value = "";
  //     destacado.checked = false;
  //     imagen.value = "";
};
//array de objetos
//guardar en localstorage
document
  .querySelector("#formulario-alta")
  .addEventListener("submit", agregarUsuarios);

  