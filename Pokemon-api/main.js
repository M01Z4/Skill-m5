async function fetchPokemon(naam) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${naam}`);
        const data = await response.json();

        console.log(data);

        let name = document.querySelector("#name");
        name.textContent = data.name;

        let img = document.querySelector("img");
        img.src = data.sprites.other.home.front_default;

        let stats = document.querySelector("#stats");
        data.stats.forEach((stat) => {
            stats.innerHTML += `
        <li>${stat.stat.name}: ${stat.base_stat}</li>
    `;
        });

        let moveslist = document.querySelector("#moveslist");
        data.moves.forEach((element, index) => {
            if (element.version_group_details[0].move_learn_method.name === "level-up") {
                moveslist.innerHTML += `<li>${element.move.name}</li>`
            }

        });

    } catch (error) {
        console.error("error");
    }
}

let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", () => {
    let searchInput = document.querySelector("#search").value.toLowerCase();
    console.log(searchInput);
    fetchPokemon(searchInput);
});

fetchPokemon(1);
