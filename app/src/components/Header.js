import Appetizers from "./Appetizers"


function Header(props) {
    return(
        <>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    {/* <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li> */}
                    <li className="nav-item" onClick={() => props.handleClick(<Appetizers />)}>Appetizers</li>
                    <li className="nav-item"><a href="#" className="nav-link">Lunch</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Dinner</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Dessert</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Drinks</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header