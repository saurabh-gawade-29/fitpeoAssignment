import React from "react";
import cash from "../Asset/icon1-removebg-preview.png";
import cash2 from "../Asset/Icon2-removebg-preview.png";
import cash3 from "../Asset/Icon3-removebg-preview.png";
import cash4 from "../Asset/Icon4-removebg-preview.png";
import cash5 from "../Asset/icon5-removebg-preview.png";
import cash6 from "../Asset/icon6-removebg-preview.png";
import "../style/style.css";

const Dashview = () => {
  return (
    <div className="section-right">
      <div className="wrapAll my-4">
        <div className="container">
          <div className="wrap-name-search">
            <div className="wrap-name fw-bold">Hello Saurabh 👋,</div>
            <div className="wrap-search">
              <div className="input-group">
                <span
                  className="input-group-text bg-white"
                  id="inputGroup-sizing-sm"
                >
                  🔎
                </span>
                <input
                  placeholder="Search"
                  type="text"
                  className="form-control searchIcon ps-0"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
          </div>
          <div className="wrap-four-cards my-4">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                        <img src={cash} alt="cash" className="img-fluid" />
                      </div>
                      <div className="col-7 col-sm-7 col-md-7 col-lg-7">
                        <small className="text-secondary">Earning</small>
                        <h4 className="text-dark">$198k</h4>
                        <small>
                          <span className="price">37.8%</span>
                          <span>this month</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <img src={cash2} alt="cash" className="img-fluid" />
                      </div>
                      <div className="col-7">
                        <small className="text-secondary">Orders</small>
                        <h4 className="text-dark">$198k</h4>
                        <small>
                          <span className="price">37.8%</span>
                          <span>this month</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <img src={cash3} alt="cash" className="img-fluid" />
                      </div>
                      <div className="col-7">
                        <small className="text-secondary">Balance</small>
                        <h4 className="text-dark">$198k</h4>
                        <small>
                          <span className="price">37.8%</span>
                          <span>this month</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <img src={cash4} alt="cash" className="img-fluid" />
                      </div>
                      <div className="col-7">
                        <small className="text-secondary">Total Sales</small>
                        <h4 className="text-dark">$198k</h4>
                        <small>
                          <span className="price">37.8%</span>
                          <span>this month</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-overview">
            <div className="row">
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    <div className="overviewTitleAndDropdown">
                      <div className="wrapTitleAndDrop d-flex justify-content-between">
                        <h5 className="fw-bold">Overview</h5>
                        <select name="" id="" className="border-0">
                          <option value="">Quaterly</option>
                        </select>
                      </div>
                      <div className="">
                        <small className="text-secondary fw-bold">
                          Monthly Earning
                        </small>
                      </div>
                    </div>
                    <div className="mainGraph mt-4">
                      <div className="row">
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Jan</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Feb</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Mar</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Apr</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>May</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Jun</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Jul</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Aug</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Sept</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Oct</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Nov</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="row">
                            <div className="col-12">
                              <div className="unfilledContainer"></div>
                            </div>
                            <div className="col-12">
                              <h6>Dec</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="wrapCustomers">
                  <div className="wrapTitle">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="fw-bold">Customers</h5>
                        <small className="text-secondary fw-bold">
                          Customers that buy products
                        </small>
                        <div className="roundedGraph">
                          <div className="content my-4">
                            <div className="border1">
                              <div className="content-body">
                                <h3 className="text-center">65%</h3>
                                <small className="text-center text-secondary fw-bold">
                                  Total New Customer
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-table my-4">
            <div className="card">
              <div className="card-body">
                <div className="first-section d-flex justify-content-between">
                  <h4>Product Sell</h4>
                  <div className="right-section d-flex">
                    <div className="wrap-search me-2">
                      <div className="input-group">
                        <span
                          className="input-group-text bg-white border-0"
                          id="inputGroup-sizing-sm"
                        >
                          🔎
                        </span>
                        <input
                          placeholder="Search"
                          type="text"
                          className="form-control searchIcon ps-0 border-0"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        />
                      </div>
                    </div>
                    <select name="" id="" className="border-0">
                      <option value="">last 30 days</option>
                    </select>
                  </div>
                </div>
                <div className="actual-table">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">
                          <small className="text-secondary">Product Name</small>
                        </th>
                        <th scope="col">
                          <small className="text-secondary">Stack</small>
                        </th>
                        <th scope="col">
                          <small className="text-secondary">Price</small>
                        </th>
                        <th scope="col">
                          <small className="text-secondary">Total Sales</small>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="wrap-image-content d-flex">
                            <img src={cash5} alt="cash5" />
                            <div className="wrap-only-content ms-2">
                              <h5 className="contentTitle mb-0">Abstract 3D</h5>
                              <small className="text-secondary fw-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Earum, aliquid!
                              </small>
                            </div>
                          </div>
                        </th>
                        <td className="">
                          <p className="d-flex align-items-center mt-0 table-text">
                            32in Stock
                          </p>
                        </td>
                        <td>
                          <p className="d-flex align-items-center mt-0 table-text">
                            $45.99
                          </p>
                        </td>
                        <td>
                          <p className="d-flex align-items-center mt-0 table-text">
                            20
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="wrap-image-content d-flex">
                            <img src={cash6} alt="cash5" />
                            <div className="wrap-only-content ms-2">
                              <h5 className="contentTitle mb-0">
                                Illustrator Adobe
                              </h5>
                              <small className="text-secondary fw-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Earum, aliquid!
                              </small>
                            </div>
                          </div>
                        </th>
                        <td className="">
                          <p className="d-flex align-items-center mt-0 table-text">
                            32in Stock
                          </p>
                        </td>
                        <td>
                          <p className="d-flex align-items-center mt-0 table-text">
                            $45.99
                          </p>
                        </td>
                        <td>
                          <p className="d-flex align-items-center mt-0 table-text">
                            20
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="wrap-image-content d-flex">
                            <img src={cash5} alt="cash5" />
                            <div className="wrap-only-content ms-2">
                              <h5 className="contentTitle mb-0">
                                Maya Max 3Dx
                              </h5>
                              <small className="text-secondary fw-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Earum, aliquid!
                              </small>
                            </div>
                          </div>
                        </th>
                        <td className="">
                          <p className="d-flex align-items-center mt-0 table-text">
                            32in Stock
                          </p>
                        </td>
                        <td>
                          <p className="d-flex align-items-center mt-0 table-text">
                            $45.99
                          </p>
                        </td>
                        <td>
                          <p className="d-flex align-items-center mt-0 table-text">
                            20
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashview;
