
function Dessert(props) {
    let dessertArr = props.fullMenu.filter(item => item.category.title === 'Dessert')
    let dessertItems = dessertArr.map((item) =>
            <div className="col-sm-6 col-lg-6 py-1">
                <div className="card border border-0 h-100" id="crad">
                    <div className="card-body">
                        <h5 className="card-title fs-2 fw-bold">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted fs-4">{item.price}</h6>
                        <p className="card-text fs-4">{item.description}</p>
                    </div>
                </div>
            </div>
    )
    return(
            <div className="container mt-3 pt-3" id="cont">
                <div className="row">
                    {dessertItems}
                </div>
            </div>
    )
}


export default Dessert

