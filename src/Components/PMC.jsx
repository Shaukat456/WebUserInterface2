import data from './data';



function PMC(props) {





    return ( 

        <>
        {
        data.map((mod)=>{
          return (
            <>
              
        <div id="accordion  sa">
        <div className="card ">
          <div className="card-header  " id="headingOne">
            <h5 className="mb-0 text-white   " >
              <button className="btn  text-white btnh  bg-transparent btn-outline-none " data-toggle="collapse" data-target={'#collapse' + mod.id} aria-expanded="true" aria-controls={`collapse` + mod.id}>
                  {mod.h}
              </button>
            </h5> 
            <figure>

            </figure>
          </div>
      
          <div id={`collapse`+mod.id } className="collapse " aria-labelled="headingOne" data-parent="#accordion">
            <div className="card-body d-flex dpp">
              {/* <div className="col"> */}
                  <figure>
                      <img src={mod.img} alt="" />
                  </figure>
              {/* </div> */}
      
              {/* <div className="col"> */}
                  <p className="col mx-5 dp"> {mod.p} </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      
        <div class="drop_line" style={{height:'1px'}}></div>
      </div>

            </>
          )
        })}
        </>

     );
}

export default PMC;