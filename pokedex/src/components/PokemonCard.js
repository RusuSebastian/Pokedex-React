import "./pokemonCard.css"
import React from 'react';

const PokemonCard = ({id,name,image,typeOne,typeTwo}) =>{
const style =`poke-container ${typeOne} flex-center`;
const styleType=`type ${typeTwo}`; 
    return(
        <div className={style}>
            <div className="top-side flex">
                <h3 className="name">{name}</h3>
                <h4>{id}</h4>
            </div>
            <div className="bottom-side flex">
                <div className="types">
                    <div className="type allTypes">{typeOne}</div>
                    <div className={`allTypes ${styleType}`}>{typeTwo}</div>
                </div>
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}

export default PokemonCard