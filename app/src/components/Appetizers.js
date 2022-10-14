

function Appetizers(props) {
    let appArr = props.fullMenu.filter(item => item.category.title === 'Appetizer')
    let appItems = appArr.map((item) =>
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
                {appItems}
            </div>
        </div>
    )
}


export default Appetizers