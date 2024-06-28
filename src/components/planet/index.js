import React, { useState, useEffect } from "react";
import Grayimg from "../shared/grayImg/grayImg";
import DescriptionAndLink from "../shared/descriptionWithLink/descriptionWithLink";
import FormSatellites from "./form/formSatellites";
import { useParams, useNavigate, Navigate } from "react-router-dom";

async function getPlanet(id) {
    const response = await fetch(`http://localhost:3000/api/${id}.json`);
    const data = await response.json();
    return data;
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    const [redirect, setRedirect] = useState(false);
    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        }, error => {
            setRedirect(true);
        })
    }, []);

    const goToHome = () => {
        navigate("/");
    }

    const addSatellites = (newSatellite) => {
        setSatellites([...satellites, newSatellite]);
    }

    let title;
    if (planet.titleWithUnderline) {
        title = <h2><u>{planet.name}</u></h2>
    }
    else {
        title = <h2>{planet.name}</h2>
    }
    if (redirect) {
        return <Navigate to="/"/>
    }
    return (
        <div className="planet">
            {title}
            <hr></hr>
            <DescriptionAndLink description={planet.description} link={planet.link}/>
            <Grayimg img_url={planet.img_url} gray={planet.gray}/>
            <hr></hr>
            <p>Add new satellite</p>
            <FormSatellites addSatellites={addSatellites}/>
            <hr></hr>
            <h3>Satellites!</h3>
            <ul>
                {
                    satellites.map((satellites, index) =>
                        <li key={index}>{satellites.name}</li>
                    )
                }
            </ul>
            <div className="button-submit">
                <button type="button" onClick={goToHome}>Voltar a pagina</button>
            </div>
        </div>
        );
    }

export default Planet;