import './index.css'

const Ourharvester = ()=>{
    return (
        <div className='harvest-container'>
            <h1 className="our-harvest-heading">Our Harvesters</h1>
            <div className="vehicles-container">
                <div className="tactor-container">
                    <img src="./tactor1.jpg" alt="no-tactor1" className="tactor-1"/>
                    <p className="tactor-para">GAM Harvester</p>
                </div>
                <div className="tactor-container">
                    <img src="./tactor2.jpg" alt="no-tactor2" className="tactor-2"/>
                    <p className="tactor-para">Massey Ferguson</p>
                </div>
            </div>
        </div>
    )
}

export default Ourharvester