import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderTwo(props) {
  return (
    <>
  {/* Hello world */}
  {/* mian-content */}
  <div className="main-banner inner" id="home">
    {/* header */}
    <header className="header">
      <div className="container-fluid px-lg-5">
        {/* nav */}
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
            <li>
              <Link to="/">Home</Link>         </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li className="active">
              <a href="blog.html">Blog</a>
            </li>
            <li>
              {/* First Tier Drop Down */}
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
                  <a href="single.html">Single Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        {/* //nav */}
      </div>
    </header>
    {/* //header */}
  </div>
  {/*//main-content*/}
  {/**/}
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="index.html">Home</a>
    </li>
    <li className="breadcrumb-item active">Blogs</li>
  </ol>
  <div>{props.children}</div>
</>

  )
}
