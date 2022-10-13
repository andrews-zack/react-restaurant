

function Lunch(props) {
    let lunchArr = props.fullMenu.filter(item => item.category.title === 'Lunch')
    console.log(lunchArr);
    return(
        <>
            <div className="col-sm-6 col-lg-4">
                <div className="card border border-dark">
                    <div className="card-body">
                        <h5 className="card-title">{props.fullMenu[19].title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.fullMenu[19].price}</h6>
                        <p className="card-text">{props.fullMenu[19].description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Lunch