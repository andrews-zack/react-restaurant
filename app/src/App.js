import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header'
import Home from './components/Home';
import Appetizers from './components/Appetizers'
import Lunch from './components/Lunch'

let fullMenu = [];

function App() {
    
    const [ data, setData ] = useState([]);
    const [ page, setPage ] = useState('Home');
    
    const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
    
    useEffect(() => {
        async function getData() {
            const resp = await axios.get(url);
            setData(resp.data);
        }
        getData();
    }, []);
// console.log(data);
    if (data.length === 0) {
        return (
            <>
                <Header />
                <Home />
            </>
        )
    };

fullMenu = data;
console.log(fullMenu);

    return (
        <>
            <Header handleClick={setPage}/>
            {page === 'Home'&& <Home />}
            {page === 'Appetizers' && <Appetizers fullMenu="fullMenu"/>}
            {page === 'Lunch' && <Lunch fullMenu="fullMenu"/>}
        </>
    )
}

export default App
