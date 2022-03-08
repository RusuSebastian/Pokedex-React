import PokemonCard from "./components/PokemonCard";
import {useEffect, useState} from "react"

function App() {
  const [allPokemons,setAllPokemons] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const getData = async () =>{
    const res = await fetch("data.json");
    const data = await res.json();
    setAllPokemons(data);
  }
  
  useEffect(()=>{
    getData();
  },[]);

  const onChange = (event) =>{
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <div className="header">
        <h1>Pokedex</h1>
        <input 
          type="text" 
          placeholder="Search pokemon name, number or type..."
          onChange={onChange}
        />
      </div>
      
      <div className="pokemonContainer flex-center">
        {allPokemons.filter((pokemon)=>{
          if(searchTerm == ""){
            return pokemon
          }else if (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return pokemon
          }else if (pokemon.id === (Number(searchTerm))){
            return pokemon 
          }else if (pokemon.types[0].type.name.includes(searchTerm.toLowerCase())){
            return pokemon
          }else if (pokemon.types.length === 2 && pokemon.types[1].type.name.includes(searchTerm.toLowerCase())){
            return pokemon
          }
        }).map((pokemon,key) =>
              <PokemonCard
              id={ Number(pokemon.id) < 10 ? `#00${pokemon.id}` : (Number(pokemon.id) < 100 ? `#0${pokemon.id}` :`#${pokemon.id}`) }
              name={ pokemon.name }
              image={ pokemon.sprites.other["official_artwork"]["front_default"] }
              typeOne={ pokemon.types[0].type.name }
              typeTwo={ pokemon.types.length === 2 ? pokemon.types[1].type.name : null }
              key={key}
              />)}
      </div>
    </>
  );
}

export default App;
