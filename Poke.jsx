import react from "react";
import { useEffect, useState } from "react";

function Poke() {

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ limit: 10, offset: 0 }),
            mode: 'cors'
        }
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then(res => res.json()).then(datos => {

                setPokemons(datos);
            })
            .catch(error=>console.error('Error fetchin Data', error))
            .finally(()=>controller.abort())

    }, [])

    return <>
        <div className="contenedorPokemons__card">
            <h3 className="contenedorPokemons__tituloCard">Listado de Pokemons: {pokemons.count}</h3>
            <ul>

                {pokemons?.results?.map((pokemon) => {

                    return <li className="contenedorPokemons__listado">{pokemon.name}</li>
                })}

            </ul>
        </div>



    </>
}

export default Poke