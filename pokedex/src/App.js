import PokemonCard from "./components/PokemonCard";
import {useEffect, useState} from "react"

function App() {
  const [allPokemons,setAllPokemons] = useState([]);

  const getData = async () =>{
    const res = await fetch("data.json");
    const data = await res.json();
    setAllPokemons(data);
  }
  
  useEffect(()=>{
    getData();
  },[]);

  return (
    <>
      <div class="header">
        <h1>Pokedex</h1>
        <input type="text" placeholder="Search pokemon name, number or type..."/>
      </div>
      
      <div className="pokemonContainer">
        {allPokemons.map(pokemon =>
              <PokemonCard
              id={Number(pokemon.id) < 10 ? `#00${pokemon.id}` : (Number(pokemon.id) < 100 ? `#0${pokemon.id}` :`#${pokemon.id}`)}
              name={pokemon.name}
              image={pokemon.sprites.other["official_artwork"]["front_default"]}
              typeOne={pokemon.types[0].type.name}
              
              typeTwo={ pokemon.types.length === 2 ? pokemon.types[1].type.name : null }
              />)}
      </div>
    </>
  );
}

export default App;
