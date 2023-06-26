
function background(){
    fetchPokemon();
        
        let stats = document.querySelector(".stats");
        let colorPoke = document.querySelector(".background-pokemon")
        let recomendacion = document.getElementById("recomendacion")
        stats.style.display = "block";
        stats.style.background = "#fff"
        colorPoke.style.background = "#eb5c5c"
        recomendacion.style.display = "none";
        clear();
       
}




window.addEventListener("keydown" , (e) => {

    if(e.keyCode === 13){
      background();
    }
})





const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value.toLowerCase();
    const url = ` https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    
    fetch(url)
    .then((res) => {
        if (res.status != "200") {

            console.log(res);
            pokeImage("./css/imagenes/cry-bula.gif");

        }
        else {
            return res.json();
        }
        
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
             let name = data.name
             let weight = data.weight
             let height = data.height;
             let species = data.species.name;
             let type = data.types[0].type.name;
             let attack = data.abilities[0].ability.name;
          
            pokeImage(pokeImg);
            namePokemo(name , weight , height , species , type , attack);
            console.log(pokeImg);
            
        }
    })
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const namePokemo = (url , url2 , url3 , url4 , url5 , url6) => {
    
    const name = document.getElementById("name");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const species = document.getElementById("species");
    const type = document.getElementById("color");
    const attack = document.getElementById("atacck");

    name.innerHTML = url.charAt(0).toUpperCase() + url.slice(1);
    weight.innerHTML = url2;
    height.innerHTML = url3;
    species.innerHTML = url4.charAt(0).toUpperCase() + url4.slice(1);
    type.innerHTML = url5.charAt(0).toUpperCase() + url5.slice(1);
    attack.innerHTML = url6.charAt(0).toUpperCase() + url6.slice(1);

    
    


}

function clear(){
    let   pokeNameInput = document.getElementById("pokeName");
    pokeNameInput.value = "";
}



