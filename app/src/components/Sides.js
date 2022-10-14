
function Sides(props) {
    let sidesArr = props.fullMenu.filter(item => item.category.title === 'Side')
    let sidesItems = sidesArr.map((item) =>
            <div className="col-sm-6 col-lg-6">
                <div className="card border border-dark h-100">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            </div>
    )
    return(
            <div className="container">
                <div className="row">
                    {sidesItems}
                </div>
            </div>
    )
}


export default Sides

