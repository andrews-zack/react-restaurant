

function Home() {
    return(
        <>
            <div className="card text-bg-dark">
                <img src={require('../img/restaurant.jpeg')} alt='arbitrary text' className='img-fluid'/>
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <img src={require('../img/logo.png')} alt='main logo' className="text-center h-75"/>
                </div>
            </div>
        </>
    )
}

export default Home
