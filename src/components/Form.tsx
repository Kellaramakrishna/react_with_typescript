import React, { useState } from 'react';

const formStyling = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
};

const FormElement: React.FC = () => {
    const [data, setValue] = useState<string | undefined>(''); // Initialize state with an empty string


    const getForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted")
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const getFormElement = () => (
        <>
            <form style={formStyling} onSubmit={getForm}>
                <input type='text' value={data} onChange={handleInputChange} placeholder='enter'/>
                <button type="submit">Submit</button>
            </form>
            <p>{data}</p>
        </>
    );

    return (
        <>
            {getFormElement()} {/* Ensure to call the function to render the form */}
        </>
    );
};

export default FormElement;
