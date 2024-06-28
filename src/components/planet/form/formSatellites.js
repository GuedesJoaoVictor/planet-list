import React, { Fragment, useState } from "react";

const initialState = {
    name: ""
}

const FormSatellites = (props) => {
    const [fields, setFields] = useState(initialState);
    const handleFieldsChange = (event) => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value
    })
    const handleSubmit = event => {
        props.addSatellites(fields);
        event.preventDefault();
        setFields(initialState);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="planet">
                    <label htmlFor="name">Name of satellite:</label>
                    <input name="name" value={fields.name} type="text" onChange={handleFieldsChange}/>
                    <button type="submit" id="button-submit">Submit</button>
                </div>
            </form>
        </Fragment>
    );
}

export default FormSatellites;