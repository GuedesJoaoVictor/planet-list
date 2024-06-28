import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet/planet";
import Form from "./form/form";

async function getPlanets() {
    const response = await fetch("http://localhost:3000/api/planets.json");
    const data = await response.json();
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, []);

    const addPlanet = (newPlanet) => {
        setPlanets([...planets, newPlanet]);
    }

    return (
        <Fragment>
            <div className="title">
                <h1>Planet List!</h1>
            </div>
            <hr></hr>
            <Form addPlanet={addPlanet} />
            <hr></hr>
            {planets.map((planet, index) => 
                <Planet
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    id={planet.id}
                    key={index}
                />
            )}
        </Fragment>
    );
}


export default Planets;