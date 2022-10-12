import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';


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
            <Card title={data.title} price={data.price} description={data.description}/>
        </>
    )
}

export default App
