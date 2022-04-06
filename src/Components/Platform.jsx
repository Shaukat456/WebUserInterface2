import Contact from "./Contact";
import PM from "./PM";
import PMC from "./PMC";

function  Platform() {
    return (  <>
    <div className="row text-light tec">
     
     <div className="col text-light d-flex teamm">

         <h1 className=" ">YGGY  </h1>
       <h1 className="white_stroke mx-2 plaf ">PLATFORM</h1>
     </div>

     <div className="col col-6 teamm">
    
     <p className="heads py-5 para pr-5 mr-5"></p>
     
     </div>
     <div className="col col-6 teamm">
    
     <h3     className="heads ygg para py-5 para pr-5 mr-5">
YGGY Platform is an intelligent platform based on state-of-the-art Machine Learning technologies, which converts piles of unstructured text data into business value.

The Platform is production-ready, scalable and can be modified to cope with custom tasks</h3>
     
<div className="col-5 pb-5 mb-5">
    <h3>We use and improve advanced technologies and frameworks in order to create our solutions — both back and frontend, as well as the intelligent part.</h3>
</div>
     </div>
     
     <div className="col">

   <Contact/>


{/* <PMC/> */}
<PM/>

{/* <PMC  
h='Full-text search'
p='a rapid full-text search over millions of documents in almost any language. Reduces time of information retrieval'
img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/613a2d76fb13ac1b4a93c33c_Group%20548.svg'
/>     

<PMC  
h='Search query context expansion'
p='automatically modifies a user’s query with related terms, phrases and synonyms and helps users to find information from adjacent knowledge areas. Perfect for research cases'
img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/613e3872e34aaf7fdc8c3dec_new_no_bg.svg'
/>     


<PMC  
h='Sementic Search'
p='understands the search query instead of simply finding literal matches and provides a user with an opportunity to find semantically close documents, i.e. documents that are differently written but with similar meaning. Increases quality of information retrieval'
img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/613a2dd390437c74a49e5bc8_Group%20550.svg'
/>      */}
     
     </div>
   
   </div>


    
    </>
    );
}

export default Platform ;