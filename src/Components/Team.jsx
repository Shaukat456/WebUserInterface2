import Members from "./Members";
import Platform from "./Platform";
// import Sech from "./SecH";
import {Fade, Slide} from 'react-reveal'
import Contact from "./Contact";
import Footer from './Footer'


function Team() {

    return (

        <>
        
        <div className="row text-light tec">
      
          <div className="col text-light white_stroke teamm">

              <h1 className=" white_stroke">OUR </h1>


              <figure>
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b8591a65ebf3eeaa4f699_Vector6.svg" className="" alt="" />
              </figure>
              <figure>
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b8591b03cedb07dfa2c41_Vector4.svg " className="ar_team_2" alt="" />
              </figure>

<figure>
  <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61393b5928313038e04266ec_%E2%9C%A6.svg" alt="" />
</figure>

          </div>
          <div className="col-6 teamm">
            <h1>TEAM</h1>
          <Members
          img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/614b46d0ff249572b3c3681b_grigory-p-500.jpeg'
          name='Grigory Gubarev'
          des='СHIEF EXECUTIVE OFFICER'
          bio='Grigory has over 8 years of experience managing teams that create Data Science-based software. Previously, he was in charge of an internal startup and a university research department, where he was responsible for business development, finance planning and sales support.'
          />
          <Members
            img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/614b466cbef5ba08a90771b3_nikita-p-500.jpeg'
            name='Nikita Nikitinskii   '
            des='CHIEF TECHNICAL OFFICER'
            bio='Nikita gained experience in the field of Computational Linguistics and Natural Language Processing while managing R&D teams in large IT companies for more than 10 years. He has an extensive scientific research experience.'
          />
          <Members
          img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/614b45c7e1e4151a9512f621_mikhail-p-500.jpeg '
          name='Mikhail Bashnin'
          des='CHIEF COMMERCIAL OFFICER'
          bio='Mikhail has 10 years of experience in business development in large technology companies, including managing strategic IT projects, building sales and marketing teams. He is an expert in project efficiency evaluation and market demand assessment.'
          
          />
        </div>
        </div>

<Platform/>

        </>
      );
}

export default Team;