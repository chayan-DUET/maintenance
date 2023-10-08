import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
       <div className="main-banner" id="home">
        <header className="header">
          <div className="container-fluid px-lg-5">
            <nav className="py-4">
              <div id="logo">
                <h1>
                  {" "}
                  <a href="index.html">
                    <span className="fa fa-bold" aria-hidden="true" />
                    ootie
                  </a>
                </h1>
              </div>
              <label htmlFor="drop" className="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu mt-2">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <Link to="blog">Blog</Link>
                </li>
                <li>
                  <Link to="registration">Reg</Link>
                </li>
                <li>
                  <label htmlFor="drop-2" className="toggle">
                    Drop Down{" "}
                    <span className="fa fa-angle-down" aria-hidden="true" />{" "}
                  </label>
                  <a href="#">
                    Drop Down{" "}
                    <span className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop Now</a>
                    </li>
                    <li>
                      <Link to="/shop-single">Single Page</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="banner-info">
          <p>Trending of the week</p>
          <h3 className="mb-4">Casual Shoes for Men</h3>
          <div className="ban-buttons">
            <a href="shop-single.html" className="btn">
              Shop Now
            </a>
            <a href="single.html" className="btn active">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
