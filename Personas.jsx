import React from "react";
import { useEffect, useState } from "react";

function Personas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/1.4/');
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return <>
    <div className="contenedorPersonas">
      <h2 className="contenedorPersonas__tituloCard">Listado de Personas</h2>
      <ul className="contenedorPersonas__lista">
        {data.map((item, index) => (
          <li key={index}>
            <p className="contenedorPersonas__listado">Género: {item.gender}</p>
            <p className="contenedorPersonas__listado">Nombre: {item.name.first}</p>
            <p className="contenedorPersonas__listado">Apellido: {item.name.last}</p>
            <img className="contenedorPersonas__imagenCard" src={item.picture.medium} alt="miniatura" />
          </li>
        ))}
      </ul>
    </div>
  </>


}

export default Personas;