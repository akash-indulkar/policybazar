import "./Home.css"
import footerlogo1 from "../../logos/footer-logo1.png"
import footerlogo2 from "../../logos/footer-logo2.png"
import footerlogo3 from "../../logos/footer-logo3.png"
import footerlogo4 from "../../logos/footer-logo4.png"
import footerlogo5 from "../../logos/footer-logo5.png"
import fb from "../../logos/fb.png"
import tweet from "../../logos/tw.png"
import ln from "../../logos/ln.png"
import you from "../../logos/yu.png"
import Visa1 from "../../logos/Visa1.png"
import Visa2 from "../../logos/Visa2.png"
import Visa3 from "../../logos/Visa3.png"
import Visa4 from "../../logos/Visa4.png"

import Visa6 from "../../logos/Visa6.png"
import Visa7 from "../../logos/Visa7.png"
export const Footer=()=>{
    return(
        <>
        <div className="footer">
        <div>
          <h1 className="footer-h1">More Products</h1>
        </div>
      <div className="footer-f">
        
                <div>
                  <img src={footerlogo1} alt="footer-logo"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>General Insurance</b>
                  <div style={{marginLeft:"0%"}} >
                  <p className="footer-hover">Car Insurance</p>
                  <p className="footer-hover">Bike Insurance</p>
                  <p className="footer-hover">Motor Insurance</p>
                  <p className="footer-hover">Motor Insurance</p>
                  <p className="footer-hover">Third Party Car Insurance</p>
                  <p className="footer-hover">Third Party Bike Insurance</p>
                  <p className="footer-hover">Travel Insurance</p>
                  <p className="footer-hover">Commercial Vehicle Insurance</p>
                  </div>
                </div>
            <div>
                  <img src={footerlogo2} alt="footer-logo"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>Life Insurance</b>
                  <div style={{marginRight:"0%"}}>
                  <p className="footer-hover">Team Insurance</p>
                  <p className="footer-hover">Spouse Term Plan</p>
                  <p className="footer-hover">Return of Premium</p>
                  <img style={{position:"absolute",left:"440px",width:"1.3%"}} src={footerlogo5} alt="side" /> <b>Other Insurance</b> 
                  <p className="footer-hover">Group Health Insurance</p>
                  <p className="footer-hover">Other General Insurance products</p>
                  <p className="footer-hover">Cancer Insurance</p>
                  <p className="footer-hover">Home Insurance</p>
                </div>
            </div>
            <div>
                  <img src={footerlogo3} alt="footer-logo"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>Investment</b>
                  <div style={{marginRight:"0%"}}>
                  <p className="footer-hover">Investment Plans</p>
                  <p className="footer-hover">Child Plans</p>
                  <p className="footer-hover">Pension Plans</p>
                  <p className="footer-hover">ULIPS</p>
                  <p className="footer-hover">Money back Policy</p>
                  <p className="footer-hover">Endowment Policy</p>
                  <p className="footer-hover">Guaranteed Return Plans</p>
                  <p className="footer-hover">Tax Saving Plan</p>
                  </div>
            </div>
            <div style={{marginRight:"18%"}}>
                    <img src={footerlogo4} alt="footer-logo"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>Health  Insurance</b>
                    <div style={{marginRight:"0%"}}>
                    <p className="footer-hover">Health Insurance</p>
                    <p className="footer-hover">1cr Health Cover </p>
                    <p className="footer-hover">Family Health Insurance</p>
                    <p className="footer-hover">Senior Citizen Health Insurance</p>
                    <p className="footer-hover">Corona Virus Insurance</p>
                    <p className="footer-hover">Corona Kavach Policy</p>
                    <p className="footer-hover">Corona Rakshak Policy</p>
                    <p className="footer-hover">Arogya Sanjeevni Policy</p>
                    </div>
            </div>
      </div>
     
      <p style={{textAlign:"right",fontSize:"11px"}}>
     
     <p>  <sup>*</sup>Standard Plans Terms and Conditions apply</p>
     <p> <sup>+</sup>For insurance plans that do not require inspection of your car</p>
     <p>#The above returns are based on the past performance of 7 years</p>
  
      </p>
      <div className="footer-boro">
        <div className="footer-bor">
        <p>Home</p>
        <p>About Us</p>
        <p>Sitemap</p>
        <p>Careers</p>
        <p>Legal & Admin Polices</p>
        <p>ISNP</p>
        <p>Insurance Companies</p>
        <p>Articles</p>
        <p>Contacts Us</p>
        <p>Know your advisor</p>
        <p>Newsroom</p>
      <img  className="footer-logo"  src={fb} alt="fb"/>
       <img className="footer-logo"  src={ln} alt="fb"/>
        <img className="footer-logo"  src={you} alt="fb"/>
         <img className="footer-logo"  src={tweet} alt="fb"/>
       
        </div>
      </div>
      <div>
      <div style={{width:"80%",marginLeft:"10%"}}>
      <b style={{position:"absolute"}}>Payment Methods</b>
      <p style={{textAlign:"end"}}><b> Secured with</b></p>
      </div>
      <div style={{width:"80%", display:"flex",marginLeft:"10%",flexDirection:"row"}}>
      <div style={{backgroundColor:"white",marginRight:"1%",paddingLeft:"12px",paddingTop:"15px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa1} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"70px"}} >
      <img src={Visa2} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",paddingTop:"12px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa3} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa4} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa1} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"50%",padding:"5px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa6} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"85x"}}>
      <img src={Visa7} alt="vs"/>
      </div>
      
      </div>
      <div style={{textAlign:"center",color:"#A8A8A8",fontSize:"12px"}}>
      <p>**Discount is offered by the Insurance company as approved by IRDAI for the product under File & Use guidelines</p>
      <p>#On the basis of your profile</p>
      <p>Policybazaar Insurance Brokers Private Limited (formerly known as Policybazaar Insurance Web Aggregator Private Limited) | CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44,</p>
      <p>Gurgaon, Haryana - 122001</p>
      <p style={{color:"white"}}>Contact Us | Legal and Admin Policies</p>
      <p>Policybazaar is now registered as a Direct Broker |Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life & General)| Visitors are hereby informed</p>
      <p>that their information submitted on the website may be shared with insurers.Product information is authentic and solely based on the information received from the insurers.</p>
      <p>© Copyright 2008-2022 policybazaar.com. All Rights Reserved.</p>
      </div>
      </div>
      </div>
        </>
    )
}