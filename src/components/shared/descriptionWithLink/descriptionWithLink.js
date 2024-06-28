import React, { Fragment } from "react";

const DescriptionAndLink = (props) => {
    if(props.link) {
        return (
            <Fragment>
                <div className="planets">
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank" rel="noreferrer">{props.link}</a>
                    <br></br>
                </div>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
            <div className="planets">
                <p>{props.description}</p>
                <br></br>
            </div>
            </Fragment>
        );
    }
}

export default DescriptionAndLink;