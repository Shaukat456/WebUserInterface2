import Lefth from './lefthed'
import Button from './Button';
function Contact () {
    return ( 
        <>
        <div className="contact">

        <div className="row   ">
            <div className="col text-light my-5 py-5">
        <Lefth h1='CONTACT' h2='US' />

            </div>


<div className="col my-5 py-5">
            <div className="row text-light">
                <div className="col-6">
                    <h2>Your name  </h2>
                    <input type="text" placeholder='John Smith *'/>

                </div>
                <div className="col-6 w-100">
                    <h2>E-mail </h2>
                    <input type="email" placeholder='Email' />

                </div>
                
                <div className="col flex-column my-5">

                    <div className="my-5 ">
                    <h2>Tell Us About Your Project</h2>
                    <input type="text" className='w-100' placeholder='Type something or just leave this area empty' />

                    </div>
                </div>
                
            </div>
</div>
        </div>
        <div className="row">
            <div className="col">

            <div className="d-flex mx-2" style={{alignItems:'center'}}>
                <figure>
                    <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6139c3b6b9efb0a037897313_Group%20543.svg" className='text-underline' alt="" />
                </figure>
             <p className='mx-2 eml'>
             <u> hello@yggy.ai</u>
             </p>
            </div>

            </div>

            <div className="col d-flex" style={{alignItems:'center'}}>
<Button  />
        
        <p className='mx-4 w-50 ints'> By clicking on the button, I accept the terms of the transfer of personal data and agree to the privacy policy</p>
            </div>
        </div>
        </div>
        
        </>
     );
}

export default Contact ;