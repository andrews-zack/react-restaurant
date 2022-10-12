import {useState, useEffect} from 'react';
import axios from 'axios';



function App() {
    
    const [ data, setData ] = useState([]);
    
    const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';

    // useEffect(() => {
    //     axios.get(url).then((resp) => {
    //         setData(resp.data);
    //     });
    // }, []);
    
    useEffect(() => {
        async function getData() {
            const resp = await axios.get(url);
            setData(resp.data);
        }
        getData();
    }, []);
console.log(data);
    if (data.length === 0) {
        return null
    };

    return (
        <>
            <h1>{data[50].title}</h1>
            <h2>${data[50].price}</h2>
            <p>{data[50].description}</p>
        </>
    )
}

export default App
