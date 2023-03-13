// let miPromesa = new Promise((resolve, reject) => {
//   console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
//   setTimeout(() => {
//     resolve("Hola");
//   }, 3000);
// });

// miPromesa.then((value) => console.log(value));

// //async/await funcion normal

// async function test() {
//   try {
//     const value = await miPromesa;
//     console.log(value);
//     console.log("pepito");
//   } catch (error) {
//     console.error(error);
//   }
// }
// //async/await funcion flecha

// const test2 = async () => {
//   try {
//     const value = await miPromesa;
//     console.log(value);
//     console.log("pepito");
//   } catch (error) {
//     console.error(error);
//   }
// };
// test();

// // function getPosts() {
// //   axios
// //     .get("https://jsonplaceholder.typicode.com/posts")
// //     .then((res) => console.log(res))
// //     .catch((err) => console.error(err));
// // }
// //async/await funcion normal
// // async function getPosts() {
// //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
// //   console.log(res);
// // }

// //async/await funcion flecha
// const getPosts = async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getPosts();

//* BUSCADOR RICK Y MORTY

const API_URL = "https://rickandmortyapi.com/api/character/";
const personajesDiv = document.querySelector(".personajes");
const formBuscar = document.getElementById("form");
const buscar = document.getElementById("buscar");

//funcion que muestra personajes en el HTML
const mostrarPersonajes = (personajes) => {
  personajesDiv.innerHTML = "";//limpiamos busqueda
  personajes.forEach((personaje) => {
    personajesDiv.innerHTML += `
                  <div class="card col-lg-3 col-xs-12 col-md-6">
                      <div class="personaje">
                      <div class="card-body">
                      <h3 class="card-header">${personaje.name}</h3>
                      <h5 class="card-title">${personaje.status}</h5>
                      <img style="height: 200px; width: 100%; display: block;" src="${personaje.image}"  alt="Card image">
                      </div>
                      </div>
                      </div>
                       `;
  });
};

const buscarPersonajes = async (e) => {
  e.preventDefault();
  try {
    const busqueda = buscar.value;
    console.log("BUSQUEDA", busqueda);
    const res = await axios.get(API_URL + "?name=" + busqueda);
      const personajes = res.data.results;
      mostrarPersonajes(personajes);
  } catch (error) {
    console.error(error);
  }
};

formBuscar.addEventListener("submit", buscarPersonajes);
