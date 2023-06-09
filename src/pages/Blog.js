import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTwo from './HeaderTwo'

export default function Blog(props) {
  return (
    <>

  <section className="ab-info-main py-5">
    <div className="container py-lg-3">
      <div className="ab-info-grids">
        <h3 className="tittle text-center mb-lg-5 mb-3">Blog Posts</h3>
        <div id="products" className="row view-group">
          <div className="item col-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img
                  className="group list-group-image img-fluid"
                  src="assets/images/img2.jpg"
                  alt=""
                />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 1
                </h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit,dolore magna aliquam volutpat.
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">$720.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img
                  className="group list-group-image img-fluid"
                  src="assets/images/img5.jpg"
                  alt=""
                />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 2
                </h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit,dolore magna aliquam volutpat.
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">$825.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img
                  className="group list-group-image img-fluid"
                  src="assets/images/img3.jpg"
                  alt=""
                />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 3
                </h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit,dolore magna aliquam volutpat.
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">$730.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 mt-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img
                  className="group list-group-image img-fluid"
                  src="assets/images/img4.jpg"
                  alt=""
                />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 4
                </h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit,dolore magna aliquam volutpat.
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">$634.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 mt-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img
                  className="group list-group-image img-fluid"
                  src="assets/images/img6.jpg"
                  alt=""
                />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 5
                </h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit,dolore magna aliquam volutpat.
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">$729.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 mt-lg-4">
            <div className="thumbnail card">
              <div className="img-event">
                <img
                  className="group list-group-image img-fluid"
                  src="assets/images/img7.jpg"
                  alt=""
                />
              </div>
              <div className="caption card-body">
                <h4 className="group card-title inner list-group-item-heading">
                  Blog Post 6
                </h4>
                <p className="group inner list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit,dolore magna aliquam volutpat.
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">$620.00</p>
                  </div>
                  <div className="col-6 ban-buttons">
                    <a className="btn btn-course" href="single.html">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //banner */}
</>

  )
}
