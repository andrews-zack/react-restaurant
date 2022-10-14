


function Header(props) {
    return(
        <>
        <div id='header'>
            <div className='container'>
                <header className="d-flex align-items-center py-3 h-25">
                    <img src={require('../img/logo.png')} onClick={() => props.handleClick('Home')} alt='logo' style= {{height: '75px', width: '75px'}} className='mr-5 pr-5'></img>
                    <ul className="nav nav-pills">
                            <li className="nav-item"><button onClick={() => props.handleClick('Appetizers')} className="nav-link text-dark">Appetizers</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick('Lunch')} className="nav-link text-dark">Lunch</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick('Dinner')} className="nav-link text-dark">Dinner</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick('Breakfast')} className="nav-link text-dark">Breakfast</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick('Dessert')} className="nav-link text-dark">Dessert</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick('Sides')} className="nav-link text-dark">Sides</button></li>
                        </ul>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header
