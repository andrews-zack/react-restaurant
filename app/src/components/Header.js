


function Header(props) {
    return(
        <>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><button onClick={() => props.handleClick('Appetizers')} className="nav-link">Appetizers</button></li>
                    <li className="nav-item"><button onClick={() => props.handleClick('Lunch')} className="nav-link">Lunch</button></li>
                    <li className="nav-item"><button onClick={() => props.handleClick('Dinner')} className="nav-link">Dinner</button></li>
                    <li className="nav-item"><button onClick={() => props.handleClick('Breakfast')} className="nav-link">Breakfast</button></li>
                    <li className="nav-item"><button onClick={() => props.handleClick('Dessert')} className="nav-link">Dessert</button></li>
                    <li className="nav-item"><button onClick={() => props.handleClick('Sides')} className="nav-link">Sides</button></li>
                </ul>
            </header>
        </>
    )
}

export default Header
