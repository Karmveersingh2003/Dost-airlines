import React from 'react'
import "./footer.css"
import { FaFacebookSquare,FaInstagramSquare,FaYoutube} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";


export default function Footer() {
  return (
   <>
    <footer class="footer">
      <div class="section__container"> 
      <div class="footer__container">
        <div class="footer__col">
          <h3>Dost Airlines</h3>
          <p>
            Where Excellence Takes Flight. With a strong commitment to customer
            satisfaction and a passion for air travel, Flivan Airlines offers
            exceptional service and seamless journeys.
          </p>
          <p>
            From friendly smiles to state-of-the-art aircraft, we connect the
            world, ensuring safe, comfortable, and unforgettable experiences.
          </p>
        </div>
        <div class="footer__col">
          <h4>INFORMATION</h4>
          <a href='/'><p>Home</p></a>
          <a href='/about'><p>About</p></a>
         <a href='/newoffer'><p>Offers</p></a>
          <a href=''><p>Seats</p></a>
          
        </div>
        <div class="footer__col">
          <h4>CONTACT</h4>
          <p>Support</p>
          <p>Media</p>
          <p>Socials</p>
        </div>
      </div>
      <div class="section__container">
        <div class="footer__bar">
        <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
        <div class="socials">
          <span><i class="ri-facebook-fill"></i><FaFacebookSquare /></span>
          <span><i class="ri-twitter-fill"></i><FaSquareXTwitter /></span>
          <span><i class="ri-instagram-line"></i><FaInstagramSquare /></span>
          <span><i class="ri-youtube-fill"></i><FaYoutube /></span>
        </div>
      </div>
      </div>
      </div>
    </footer>
    


   
   </>
  )
}
