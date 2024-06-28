import React, { Fragment, useState } from "react";

const initialState = {
    name: "",
    description: "",
    link: "",
    img_url: ""
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState);
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState);
    }

    return (
        <Fragment>
            <div className="planet-group">
                <h3 className="form-title">Add your planet!</h3>
                <form onSubmit={handleSubmit} className="planet-form">
                    <div className="inputBox">
                        <label htmlFor="name">Name: </label>
                        <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}></input>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="description">Description: </label>
                        <textarea id="description" name="description" type="text" value={fields.description} onChange={handleFieldsChange}></textarea>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="link">Link: </label>
                        <input id="link" name="link" type="text" value={fields.link} onChange={handleFieldsChange}></input>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="img_url">Image URL: </label>
                        <input id="img_url" name="img_url" type="text" value={fields.img_url} onChange={handleFieldsChange}></input>
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Fragment>
    );
}

export default Form;