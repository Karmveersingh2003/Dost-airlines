import React from 'react'
import "./home.css"
import anjli from "./anjli.jpg"
import esha from "./esha.jpg"
import jitu from "./jitu.jpg"
import anuj from "./anuj.jpg"
import { FaMapLocationDot } from "react-icons/fa6";
import { CiUser,CiCalendar,CiSearch } from "react-icons/ci";
import { FaRegCalendarAlt,FaCalendarAlt,FaCalendarCheck,FaRegBookmark} from "react-icons/fa";
export default function Home() {
  return (
    <>
    
    <header class="section__container">
      <h1 class="section__header">Find And Book<br />A Great Experience</h1>
      <div id="header_image">
      <img src="https://www.airvistara.com/content/dam/airvistara/global/english/media-center/images/aircraft/high-res/5.jpg" alt="header" />
      </div>
    </header>

    <section class="section__container"> 
    <div class="booking__container">
      <div class="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form id='business_margin'>
        <div class="form__group">
          <span><i class="ri-map-pin-line"><FaMapLocationDot/></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Location</label>
            </div>
            <p>Where are you going?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-user-3-line"><CiUser/></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"><CiCalendar/></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"><FaRegCalendarAlt/></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button class="btn"><i class="ri-search-line"><CiSearch/></i></button>
      </form>
      </div>
    </section>

    <section class="section__container">
      <div class='plan__container'>
      <p class="subheader">TRAVEL SUPPORT</p>
      <h2 class="section__header">Plan your travel with confidence</h2>
      <p class="description">
        Find help with your bookings and travel plans, and seee what to expect
        along your journey.
      </p>
      <div class="plan__grid">
        <div class="plan__content">
          <span class="number">01</span>
          <h4>Travel Requirements for Dubai</h4>
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span class="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span class="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
        <div class="plan__image">
          <img src="https://e1.pxfuel.com/desktop-wallpaper/296/176/desktop-wallpaper-wonderful-fly-with-planes-from-lufthansa-over-the-clouds-lufthansa.jpg" alt="plan" />
          <img src="https://e1.pxfuel.com/desktop-wallpaper/990/878/desktop-wallpaper-3-best-airplane-airplanes.jpg" alt="plan" />
          <img src="https://c0.wallpaperflare.com/preview/375/519/597/airplane-wing-window-view-thumbnail.jpg" alt="plan" />
        </div>
      </div>
      </div>
    </section>

    <section class="memories">
      <div class="section__container">
       <div class="memories__container">
        <div class="memories__header">
          <h2 class="section__header">
            Travel to make memories all around the world
          </h2>
          <button class="view__all">View All</button>
        </div>
        <div class="memories__grid">
          <div class="memories__card">
            <span><i class="ri-calendar-2-line"><FaCalendarAlt/></i></span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div class="memories__card">
            <span><i class="ri-shield-check-line"><FaCalendarCheck /></i></span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div class="memories__card">
            <span><i class="ri-bookmark-2-line"></i><FaRegBookmark /></span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="section__container"> 
    <div class="lounge__container">
      <div class="lounge__image">
        <img src="https://media.istockphoto.com/id/511483506/photo/business-jet-interior.jpg?s=612x612&w=0&k=20&c=Iu5kVoMbLarCo3weTvh-VuH3S0XQIuPwxdev56y_liw=
        " alt="lounge" />
        <img src="https://img.money.com/2018/02/gettyimages-895151318.jpg" alt="lounge" />
      </div>
      <div class="lounge__content">
        <h2 id="minor_lounge">Unaccompanied Minor Lounge</h2>
        <div class="lounge__grid">
          <div class="lounge__details">
            <h4>Experience Tranquility</h4>
            <p>
              Serenity Haven offers a tranquil escape, featuring comfortable
              seating, calming ambiance, and attentive service.
            </p>
          </div>
          <div class="lounge__details">
            <h4>Elevate Your Experience</h4>
            <p>
              Designed for discerning travelers, this exclusive lounge offers
              premium amenities, assistance, and private workspaces.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Welcoming Space</h4>
            <p>
              Creating a family-friendly atmosphere, The Family Zone is the
              perfect haven for parents and children.
            </p>
          </div>
          <div class="lounge__details">
            <h4>A Culinary Delight</h4>
            <p>
              Immerse yourself in a world of flavors, offering international
              cuisines, gourmet dishes, and carefully curated beverages.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="section__container"> 
    <div class="travellers__container">
      <h2 class="section__header">Best travellers of the month</h2>
      <div class="travellers__grid">
        <div class="travellers__card">
          <img src="https://wallpapers.com/images/featured/dubai-pictures-8h5etmigpwhcbg5s.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src={esha} alt="client" />
            <h4>Esha Dhoot</h4>
            <p>Dubai</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="https://c4.wallpaperflare.com/wallpaper/29/111/595/dawn-france-paris-panorama-wallpaper-preview.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src={jitu} alt="client" />
            <h4>Jitendra</h4>
            <p>Paris</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="https://c4.wallpaperflare.com/wallpaper/91/546/459/photography-1920x1200-fotografias-wallpaper-preview.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src={anjli} alt="client" />
            <h4>Anjali</h4>
            <p>Singapore</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src="https://images.pexels.com/photos/462671/pexels-photo-462671.jpeg?cs=srgb&dl=pexels-ben-cheung-462671.jpg&fm=jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src={anuj} alt="client" />
            <h4>Anuj</h4>
            <p>Malaysia</p>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="subscribe">
      <div class="section__container"> 
      <div class="subscribe__container">
        <h2 class="section__header">Subscribe newsletter & get latest news</h2>
        <form class="subscribe__form">
          <input type="text" placeholder="Enter your email here" />
          <button class="btn">Subscribe</button>
        </form>
      </div>
      </div>
    </section>

   
    </>
  )
}
