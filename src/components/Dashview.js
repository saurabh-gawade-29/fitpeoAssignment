import React from "react";
import cash from "../Asset/icon1-removebg-preview.png";
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
                        <img src={cash} alt="cash" className="img-fluid" />
                      </div>
                      <div className="col-7">
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
                        <img src={cash} alt="cash" className="img-fluid" />
                      </div>
                      <div className="col-7">
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
                        <img src={cash} alt="cash" className="img-fluid" />
                      </div>
                      <div className="col-7">
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
                        <select name="" id="">
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
        </div>
      </div>
    </div>
  );
};

export default Dashview;
