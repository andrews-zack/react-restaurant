

function Appetizers(props) {
<>
    <div className="col-sm-6 col-lg-4">
        <div className="card border border-dark">
            <div className="card-body">
                <h5 className="card-title">{props.fullMenu.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.fullMenu.price}</h6>
                <p className="card-text">{props.fullMenu.description}</p>
            </div>
        </div>
    </div>
</>
}


export default Appetizers