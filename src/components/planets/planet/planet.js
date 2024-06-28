import React from "react";
import Grayimg from "../../shared/grayImg/grayImg";
import DescriptionAndLink from "../../shared/descriptionWithLink/descriptionWithLink";
import { Link } from "react-router-dom";

const Planet = (props) => {
    let title;
    if (props.titleWithUnderline) {
        title = <h2><u>{props.name}</u></h2>
    }
    else {
        title = <h2>{props.name}</h2>
    }
    return (
        <div className="planets">
            <Link to={`/planet/${props.id}`} id="planet-link">{title}</Link>
            <DescriptionAndLink description={props.description} link={props.link}/>
            <Grayimg img_url={props.img_url} gray={props.gray}/>
            <hr></hr>
        </div>
        );
    }

export default Planet;