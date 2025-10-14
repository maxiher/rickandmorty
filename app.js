// Seleccionar elementos del DOM
const input = document.getElementById("pokemonInput");
const buscarBtn = document.getElementById("searchBtn");
const rickedex = document.getElementById("rickedex");
const modoBtn = document.getElementById("themeBtn");

// 2. Evento para buscar Personaje
buscarBtn.addEventListener("click", () => {
  const inputValor = input.value.toLowerCase();
  rickedex.innerHTML = "";
  if (inputValor) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValor}`)
      .then(response => response.json())  // COMPLETAR: convertir respuesta a JSON 
      .then(data => {
        console.log(data)

        rickedex.className = "container text-center"
        const row = document.createElement("div")
        row.className = "row justify-content-center"
        rickedex.appendChild(row);

        data.results.forEach(element => {


          const col = document.createElement("div");
          col.className = "col-md-3 mb-4"

          col.innerHTML = `
        <div class="card h-100">
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
        
          row.appendChild(col)

        });
      
      })
      //Si hay error
      .catch(error => {
        rickedex.innerHTML = `<p class="error">⚠️ Ningun personaje con este nombre</p>`;
      });
  }
});

// 3. Botón de modo oscuro/claro
const themeBtn = document.getElementById("themeBtn")
const body = document.body;

themeBtn.addEventListener("click", () => {
  if (body.className === "light"){
    body.className = "dark"
  } else {
    body.className = "light"
  }
})

body.className = "light"
themeBtn.classList.add("mt-2")