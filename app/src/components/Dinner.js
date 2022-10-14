

function Dinner(props) {
    let dinnerArr = props.fullMenu.filter(item => item.category.title === 'Dinner')
    let shuffledArr = (dinnerArr.sort(() => 0.5 - Math.random())).slice(0,14);
    let dinnerItems = shuffledArr.map((item) =>
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
                    {dinnerItems}
                </div>
            </div>
    )
}


export default Dinner