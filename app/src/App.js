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
import Footer from './components/Footer'
import './css/App.css'

function App() {
    
    const [ data, setData ] = useState([]);
    const [ page, setPage ] = useState('Home');
    
    const url = 'https://8000-andrewszack-backendbist-y5p6npi7sr0.ws-us75.gitpod.io/full_menu/';
    
    useEffect(() => {
        async function getData() {
            const resp = await axios.get(url);
            setData(resp.data);
        }
        getData();
    }, []);
    
    if (data.length === 0) {
        return (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        )
    };

    // const shuffler = (filteredArr) => {
    //     (filteredArr.sort(() => 0.5 - Math.random())).slice(0,14);
    // }

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
            <Footer />
        </>
    )
}

export default App
