

function Dinner(props) {
    let dinnerArr = props.fullMenu.filter(item => item.category.title === 'Dinner')
    console.log(dinnerArr);
    return(
        <>
            <div className="col-sm-6 col-lg-4">
                <div className="card border border-dark">
                    <div className="card-body">
                        <h5 className="card-title">{props.fullMenu[18].title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.fullMenu[18].price}</h6>
                        <p className="card-text">{props.fullMenu[18].description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dinner