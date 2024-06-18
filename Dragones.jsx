import React from "react";
import { useEffect, useState } from "react";


function Dragones() {

    const [dragones,setDragones] = useState({});

    useEffect(()=>{
        fetch('https://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
            .then(res=>res.json())
            .then(data => {console.log(data);setDragones(data)})
            .catch(error=>console.error('Error fetchin Data', error))
            .finally(()=>controller.abort())

        },[])

useEffect(()=> {console.log(dragones)},[dragones])

    return (<>

        
    <div className="contenedorDragones">
        
        {
            <div className="contenedorDragones__card">
                <h3 className="contenedorDragones__tituloCard">Nombre del dragón: {dragones.name}</h3>
                <h3 className="contenedorDragones__descripcionCard">Tamaño:{dragones.size}</h3>
            </div>
        }
    </div>

    </>)
}

export default Dragones