import {Fade, Reveal } from'react-reveal'

function Navbar() {
    return (
         <>

        <div className="row py-2 ">
          <Reveal bottom >

            <div className="col bg-none d-flex  ">
            
          
            <div className="col-lg-5 col-sm-3  bg-none  p-1 ">
            <nav className="navbar navbar-light ">
  <a className="navbar-brand" href="#">
    {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/> */}
    <Fade top>

    <figure>
      <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612222b86eeedd5d9689d25d_Logo_YGGY_black%201.svg" alt="" />
    </figure>
    </Fade>
  </a>
</nav>
            </div>
            
            <div className="col text-light bg-none  p-3 ">
      <nav class="navbar navbar-expand-lg navbar-light bg-none">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav text-light">
      <li class="nav-item  text-light  text-capitalize">
        <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item mx-2 ">
        <a class="nav-link text-light " href="#">Konsule Ai</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-light " href="#">YGG PLAtFORM</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light mx-2" href="#">MODULES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light mx-2" href="#">TEAM </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light mx-2" href="#">CONTACT </a>
      </li>
    </ul>
  </div>
 {/* <button> */}
 <label class="switch">
  <input type="checkbox"/> 
  <span class="slider round"></span>
</label>
 {/* </button> */}
</nav>
            </div>

            </div>

            </Reveal>

        </div>
    
    </> 
    
    );
}

export default Navbar;