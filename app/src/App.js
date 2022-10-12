import React, { useEffect, useState } from 'react';
import axios from 'axios';



async function App() {
    
    const [ data, setData ] = React.useState();
    
    const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        });
    }, []);
    console.log(setData.data)

    if (!data) return null;

    return (
        <>
            {/* <h2>{data.title}</h2>
            <p>{data.description}</p> */}
        </>
    )
}

export default App
