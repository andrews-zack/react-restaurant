


function Header(props) {
    return(
        <>
            <nav className="navbar navbar-expand-md" id="header">
                <div className="container">
                    <img src={require("../img/coffee-cup.png")} onClick={() => props.handleClick("Home")} alt="logo" style= {{height: "75px", width: "75px"}} className='mr-5 pr-5 navbar-brand'></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item"><button onClick={() => props.handleClick("Appetizers")} className="nav-link text-dark fw-bold">Appetizers</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick("Lunch")} className="nav-link text-dark fw-bold">Lunch</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick("Dinner")} className="nav-link text-dark fw-bold">Dinner</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick("Breakfast")} className="nav-link text-dark fw-bold">Breakfast</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick("Dessert")} className="nav-link text-dark fw-bold">Dessert</button></li>
                            <li className="nav-item"><button onClick={() => props.handleClick("Sides")} className="nav-link text-dark fw-bold">Sides</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
