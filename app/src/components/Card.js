// import App from "../App";

function Card(props) {
    return (
        <>
                        <div className="card w-25 border border-dark">
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{props.price}</h6>
                                <p className="card-text">{props.description}</p>
                            </div>
                        </div>
            {/* <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{props.title}</h1>
                    <p className="col-md-8 fs-4">{props.price}</p>
                    <p className="col-md-8 fs-4">{props.description}</p>
                    {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
                {/* </div> */}
            {/* </div> */}
        </>
    )
}



export default Card