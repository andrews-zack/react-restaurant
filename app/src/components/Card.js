// import App from "../App";

function Card(props) {
    return (
        <>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">{props.title}</h1>
                    <p class="col-md-8 fs-4">{props.price}</p>
                    <p class="col-md-8 fs-4">{props.description}</p>
                    {/* <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
                </div>
            </div>
        </>
    )
}



export default Card