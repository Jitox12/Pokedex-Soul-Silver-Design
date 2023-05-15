
let lugia = document.getElementById('lugia')
let content = document.getElementById('contenido')

fetch("https://pokeapi.co/api/v2/pokemon/lugia")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    lugia.src = data.sprites.front_default;
    data.abilities.forEach((ability)=> {
        content.textContent = ability;
    })
    
  })
  .catch(error => {
    console.error(error);
  });