import React from 'react'
import "./nav.css"
export default function Nav() {
  return (
    <>
    <nav>
      <a href='/'><div class="nav__logo">Dost Airlines</div></a>
      <ul class="nav__links">
        <li class="link"><a href="/">Home</a></li>
        <li class="link"><a href="/newoffer">Offers</a></li>
        <li class="link"><a href="#">Seats</a></li>
        <li class="link"><a href="#">About</a></li>
        <li class="link"><a href="#">Contact</a></li>
      </ul>
      <a href='/Login-signup'><button class="btnn">Login / Singup</button></a>
    </nav>
    
    </>
  )
}
