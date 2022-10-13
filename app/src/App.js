import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header'
import Appetizers from './components/Appetizers'
import Lunch from './components/Lunch'

let fullMenu = [];

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
// console.log(data);
    if (data.length === 0) {
        return <Header />
    };

fullMenu = data;
console.log(fullMenu);

    return (
        <>
            <Header />
            <Appetizers fullMenu="data"/>
            <Lunch />
        </>
    )
}

export default App
