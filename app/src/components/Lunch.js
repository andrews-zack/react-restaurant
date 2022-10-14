

function Lunch(props) {
    let lunchArr = props.fullMenu.filter(item => item.category.title === 'Lunch')
    let shuffledArr = (lunchArr.sort(() => 0.5 - Math.random())).slice(0,14);
    let lunchItems = shuffledArr.map((item) =>
    <div className="col-sm-6 col-lg-6">
                <div className="card border border-light h-100">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            </div>
    )
    return(
        <div className="container mt-5 pt-5">
            <div className="row">
                {lunchItems}
            </div>
        </div>
    )
}


export default Lunch