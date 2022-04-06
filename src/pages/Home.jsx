import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import '../index.css'
import KonsulAi from "../Components/KonsulAi";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Button from "../Components/Button";
import {Fade, Reveal, Slide} from 'react-reveal'
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Testig from "../Components/Testing";
import PM from "../Components/PM";


function Home() {
    

    
    return ( <>
    {/* <ScrollContainer> */}

        <div className="container-fluid   ">
            <Navbar/>

                  
            <div className="hcomp mx-lg-4 mx-sm-2 py-lg-5 py-sm-3">
            <Reveal bottom >


                <div className="div heroh text-light">
                <span className="d-md-flex ">
                  <h1>WORK</h1>
{/* <Animator animation={batch(Move(0,19))}> */}

                     <h1 className="   white_stroke" id='bter'> BETTER </h1>

{/* </Animator> */}
                     {/* <figure > */}
                         {/* <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61268f6d4076c165dce4c16f_green.svg" alt="" className="offset-3" /> */}
                     {/* </figure> */}

                    {/* <div className="col">
                        
                    </div> */}
                    
                    </span> 
                    
                <span className=" d-md-flex col-lg-8 flex-lg-nowrap flex-md-wrap   " >
                  <h1 >WITH</h1>
                  <figure>
                      <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61222041ae7b92522ff44f99_arrow%20top%20offer.svg" className="arrimg " alt="" />
                  </figure>
                     <h1 className="d-flex mr-md-5 pr-md-3" >YGGY</h1>
                    
                    </span> 

<span className="d-md-flex col offset-md-5   ">

                  <h1 className="  col  ">TECHNOLOGIES</h1>
                    </span> 
                        
                </div>


                {/* <div className="text-light d-lg-flex py-5"> */}
                    {/* <div className="col-6 d-lg-flex "> */}
                    


                    {/* <h1 className="heroh " id='work'>WORK   </h1>
                    <h1 className="heroh white_stroke mx-5 w-100 " id='better'> BETTER  </h1> */}
                    
                    {/* {
                        window.addEventListener("scroll",()=>{
                            const better = document.querySelector("#better")
                            const work = document.querySelector("#work")
                            const yg = document.querySelector("#yg")
                            let scrollPosition = window.pageYOffset;
                            
                            better.style.transform = `translateX(${scrollPosition * -0.5}px)`
                            work.style.transform = `translateX(${scrollPosition * -0.5}px)`
                            yg.style.transform = `translateX(${scrollPosition * 0.5}px)`
                            
                        })
                    } */}
                    
                    {/* <h1 className="heroh ">WITH    */}
                {/* Arrow here for parallax */}
                     {/* </h1> */}
                     

                    {/* </div> */}
                    {/* <hr /> */}

                    {/* <div className="col ygg my-5 py-5">
                    <h1 className="heroh bg-none my-5"  id='yg'>YGGY TECHNOLOGIES  </h1>
                    </div> */}
                        
                {/* </div> */}


            </Reveal>
            </div>

            <div className="d-flex    hcomp mx-4 py-5 ">
<div className="herobtttn arww row py-5 my-lg-4 my-md-2 d-lg-flex ">
<div className="col-6">

<Button  /> 
                    <div className="bottom_lines">

                <figure>
                    {/* <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61b357884d317a22b9b8d413_Ellipse%2020.svg" className="circle_bottom" alt="" /> */}
                    {/* <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6139169436953f5186243c02_1233.svg" className="btm_A" alt="" /> */}

                </figure>
</div>
                    </div>

<div className="col-6">
{/* <figure > */}
    <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61269034abbfbd0927d833e5_Frame%2047511.svg" className='arw' alt="" />
{/* </figure> */}

</div>

</div>
            </div>  
                    
            <Intro/>
            
            <KonsulAi/>
               
            
            <Team/>

        </div>

        {/* </ScrollContainer> */}

    </> 
    
    
    );
}


export default Home;