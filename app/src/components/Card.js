// import App from "../App";

function Card(props) {
    return (
        <>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card border border-dark">
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{props.price}</h6>
                                    <p className="card-text">{props.description}</p>
                                </div>
                            </div>
                        </div>
        </>
    )
}



export default Card