import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header'
import Home from './components/Home';
import Appetizers from './components/Appetizers'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import Breakfast from './components/Breakfast';
import Dessert from './components/Dessert';
import Sides from './components/Sides';

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


    return (
        <>
            <Header handleClick={setPage}/>
            {page === 'Home'&& <Home />}
            {page === 'Appetizers' && <Appetizers fullMenu={data}/>}
            {page === 'Lunch' && <Lunch fullMenu={data}/>}
            {page === 'Dinner' && <Dinner fullMenu={data}/>}
            {page === 'Breakfast' && <Breakfast fullMenu={data}/>}
            {page === 'Dessert' && <Dessert fullMenu={data}/>}
            {page === 'Sides' && <Sides fullMenu={data}/>}
        </>
    )
}

export default App
