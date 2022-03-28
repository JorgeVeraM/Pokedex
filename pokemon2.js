const fetchpokemon = () =>{
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(url).then((res) => {
        return res.json();
    }).then((data) =>{
        console.log(data);
        let pokeimg = data.sprites.front_default;
        console.log(pokeimg);
    })
}


//fetchpokemon();

const pokeimage = (url) => {
    const pokeimg = document.getElementById("pokeimg")
    pokeimg.src = url;
}

pokeimage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

function buscar() {
    const pokemon = document.getElementById("pokemon")
    let pokeinput = pokemon.value;
    console.log("hola" + pokeinput);
}
