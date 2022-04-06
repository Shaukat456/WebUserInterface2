function Cards(props) {
    return (  <>
            <div className="d-lg-flex  flex-column w-100 text-light mx-2 p-5 card">
                    <figure>
                        <img src={props.img} alt="img" />
                        
                    </figure>
                    
                        <h4>{props.h}</h4>
                        {/* <span>  */}
                          <span className="d-flex"> 
                              {/* check here */}
                              <img src={props.img1} alt="" className="mx-2" />    
                                 <h5 className="my-4 mx-2"> {props.checks1} </h5>
                              </span> 
                          <span className="d-flex">
                                {/* check here */}
                             <img src={props.img2} className="mx-2" alt="" />   <h5 className=" mx-2 my-4"> {props.checks2} </h5>
                              </span> 
                          <span className="d-flex">
                                {/* check here */}
                                <img src={props.img3}  className="mx-2" alt="" />     <h5 className=" mx-2 my-4"> {props.checks3} </h5>
                              </span> 
                             
                            
                            {/* </span> */}
            </div>
    
    
    </>
    
    );
}

export default Cards;