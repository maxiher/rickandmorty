// Elementos del DOM
const input = document.getElementById("Input");
const buscarBtn = document.getElementById("searchBtn");
const rickedex = document.getElementById("rickedex");


//Evento click para buscar
buscarBtn.addEventListener("click", () => {
  const inputValor = input.value.toLowerCase().trim(); //Tomo el contenido del input en minusculas y sin espacios
  rickedex.innerHTML = ""; //Limpio el contenedor

  //Si hay contenido en el input hago el fetch
  if (inputValor) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValor}`)
      .then(response => {
        if(!response.ok) throw new Error("noResults");
        return response.json();
        })
      .then(data => {
          console.log(data)

          rickedex.className = "container text-center"; //Le agrego clases de bootstrap al contenedor

          const row = document.createElement("div");
          row.className = "row justify-content-center";
          rickedex.appendChild(row); // Creo un div con clases bootstrap

          //Manejo cada elemento de la respuesta
          data.results.forEach(element => {

            const col = document.createElement("div");
            col.className = "col-md-3 mb-4";

            //Inserto la informacion en las tarjetas
            col.innerHTML = `
        <div class="card h-100 mt-3">
          <img src="${element.image}" class="card-img-top" alt="${element.name}">
          <div class="card-body">
            <h4 class="card-title">${element.name}</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>status:</strong> ${element.status}</li>
            <li class="list-group-item"><strong>Especie:</strong> ${element.species}</li>
            </ul>
        </div>
          `;

            row.appendChild(col);
          });
        })
      .catch(() => {
        rickedex.innerHTML = `<p class="error">⚠️ Ningun personaje con este nombre</p>`;
      });
  }
});

// Botón oscuro/claro
const themeBtn = document.getElementById("themeBtn")
const body = document.body;

themeBtn.addEventListener("click", () => {
  if (body.className === "light") {
    body.className = "dark"
    themeBtn.textContent = 'Cambiar a modo claro'
  } else {
    body.className = "light"
    themeBtn.textContent = "Cambiar a modo oscuro"
  }
})

body.className = "light"
themeBtn.classList.add("mt-2")