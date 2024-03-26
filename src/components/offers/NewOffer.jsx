import React from 'react'
import "./offer.css"
import { FaArrowRightLong, FaChildReaching, FaPlaneDeparture } from "react-icons/fa6";
import CARD1 from "./crd1.png"
import CARD2 from "./crd2.png"
import CARD3 from "./crd3.png"
import CARD4 from "./crd4.png"

import { TbBrandBooking } from "react-icons/tb";

export default function NewOffer() {
  return (
    <>


      <header class="section__container">
        <div class="header__container" id="home">

          <div class="header__image">
            <img src="https://c4.wallpaperflare.com/wallpaper/614/447/693/airline-airplane-city-lights-air-travel-wallpaper-preview.jpg" alt="header" />
          </div>
          <div class="header__content">
            <h1>Meet, Travel & Enjoy The <span>True Journey</span>.</h1>
            <p class="section__description">
              Discover the true essence of culinary delight as you meet, enjoy, and
              travel the authentic tour that define our passion for Journey.
            </p>
            <div class="header__btn">
              <button class="btn">Get Started</button>
            </div>
          </div>
        </div>
      </header>


      <section class="section__container">
        <div class="special__container" id="special">

          <h2 class="section__header">Ours Special</h2>
          <p class="section__description">
            "Fly high, explore the sky, and let your dreams take flight with our unforgettable aerial tours. Adventure awaits with every journey."
          </p>
          <div class="special__grid">
            <div class="special__card">
              <img src="https://blog.blacklane.com/wp-content/uploads/2019/02/Untitled-design-11.png" alt="special" />
              <h4>Lounge Access</h4>
              <p>
                Embark on a journey where every layover becomes a moment of luxury, with airplane lounges as your tranquil rest stops in the sky. Let your travels soar with comfort and elegance.
              </p>

              <div class="special__footer">
                <p class="price">$12.50</p>
                <button class="btn">View More</button>
              </div>
            </div>
            <div class="special__card">
              <img src="https://t4.ftcdn.net/jpg/06/97/06/85/360_F_697068594_ZHKaqykjBwYkXnXB9nZIqxWRmmMc9cdb.jpg" alt="special" />
              <h4>Access Bagage</h4>
              <p>
                Fly worry-free with our tours, where your access baggage is included, offering you the best quote for seamless travel experiences.
              </p>
              <div class="special__footer">
                <p class="price">$18.50</p>
                <button class="btn">View More</button>
              </div>
            </div>
            <div class="special__card">
              <img src="https://media.istockphoto.com/id/498240641/photo/business-man-traveling.jpg?s=612x612&w=0&k=20&c=rFiGXOhvTA5C63MJvPocXZq1PU7LTaAoQ8_qPnS4ae4=" alt="special" />
              <h4>Priority</h4>
              <p>
                Embark on a journey where the skies are your highway, and every destination awaits with open arms. Let your dreams take flight with our priority airplane tours.
              </p>
              <div class="special__footer">
                <p class="price">$15.50</p>
                <button class="btn">View More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section__container">
        <div className="explore__container">
          <div class="explore__image">
            <img src="https://wallpapers.com/images/featured/4k-plane-39efmsuz0fhub1c3.jpg" alt="explore" />
          </div>
          <div class="explore__content">
            <h1 class="section__header">We Serve Secure & Saftey flight</h1>
            <p class="section__description">
              In the azure vastness, a sleek bird of steel takes flight,
              Wings slicing through the heavens with effortless might.
              A marvel of human ingenuity, defying gravity's hold,
              Carrying dreams and aspirations, stories yet untold.
              In its wake, it leaves trails of wonder, soaring bold.
            </p>
            <div class="explore__btn">
              <button class="btn">
                Explore Story <span><i class="ri-arrow-right-line"><FaArrowRightLong /></i></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="section__container">
        <div className="banner__container">
          <div class="banner__card">
            <span class="banner__icon"><i class="ri-bowl-fill"><TbBrandBooking /></i></span>
            <h4>Order Your Tickets</h4>
            <p>
              Ready to embark on your journey of dreams?
              Secure your seat in the sky, where adventure gleams.
              Book your flight tickets now, and let wanderlust ignite,
              For the world awaits, in boundless delight.
            </p>
            <a href="#">
              Read more
              <span><i class="ri-arrow-right-line"><FaArrowRightLong /></i></span>
            </a>
          </div>
          <div class="banner__card">
            <span class="banner__icon"><i class="ri-truck-fill"><FaChildReaching /></i></span>
            <h4>Reach At Airport</h4>
            <p>
              At the airport, a bustling symphony of departures and arrivals,
              Where fleeting moments blend with heartfelt goodbyes.
              Here, anticipation dances with nostalgia's embrace,
              In the ebb and flow of journeys, each with its own pace.
            </p>
            <a href="#">
              Read more
              <span><i class="ri-arrow-right-line"><FaArrowRightLong /></i></span>
            </a>
          </div>
          <div class="banner__card">
            <span class="banner__icon"><i class="ri-star-smile-fill">
              <FaPlaneDeparture /></i></span>
            <h4>Enjoy Your Trip</h4>
            <p>
              Amidst the clouds, let your spirit soar,
              Embrace the journey, let adventure explore.
              With each mile traveled, new horizons ignite,
              Enjoy your flight trip, and revel in the flight.
            </p>
            <a href="#">
              Read more
              <span><i class="ri-arrow-right-line"><FaArrowRightLong /></i></span>
            </a>
          </div>
        </div>
      </section>



      <div class="section__container ">



        <h2 class="section__header">OFFERS</h2>
        <div id='disp'>

          <img src={CARD1} />

          <img src={CARD2} />

          <img src={CARD3} />

          <img src={CARD4} />
        </div>

      </div>








    </>
  )
}
