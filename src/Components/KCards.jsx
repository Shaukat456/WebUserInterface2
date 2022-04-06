function Kcards(props) {
    return (<>
    
    <div className="d-lg-flex  flex-column text-light mx-2 p-4 card ktext ">
                    <figure>
                        <img src={props.img} alt="img" />
                        
                    </figure>
                    
                        <h4>{props.h}</h4>

                        <p>{props.p}</p>
                      
            </div>
    
    </> );
}

export default Kcards;