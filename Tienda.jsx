import React from "react";
import { useEffect, useState } from "react";


function Tienda() {

    const [prendas,setPrendas] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(data => {setPrendas(data)
        .catch(err => console.log(err))
        .finally(()=>AbortController.abort())

        })

    },[])

    return <>
        
    <div className="contenedorPrendas">
        {prendas.map((prenda)=>{
            return <div className="contenedorPrendas__card">
                <h3 className="contenedorPrendas__tituloCard">Categoría: {prenda.category}</h3>
                <img src={prenda.image} className="contenedorPrendas__imagenCard"/>
                <p className="contenedorPrendas__descripcionCard">"{prenda.description}"</p>
            </div>
        })}
    </div>

    </>
}

export default Tienda



// --------------------------------------








// Funcion1
// function Efecto() {

//     const [contador, setContador] = useState(0);
//     const [contador2, setContador2] = useState(0);

//     function sumaContador() {
//         let valorAnterior = contador;

//         setContador(valorAnterior + 1);
//     }

// function sumaContador2(){
//     let valorAnterior = contador2;

//     setContador2(valorAnterior + 1);
//     }

//     useEffect(()=>{
//         console.log('Hola');
//     },[]);

//     return <>
//     <button type="button" onClick={sumaContador}>Click para sumar</button>
//     <button type="button" onClick={sumaContador2}>Click para sumar AL 2</button>
//         <p>{contador}</p>
//         <p>{contador2}</p>
//     </>

// }

