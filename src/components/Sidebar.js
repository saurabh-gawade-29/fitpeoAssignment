import React from 'react'
import Logo from "../Asset/Logo-removebg-preview.png"

const Sidebar = () => {
    return (
        <div>
            <div className="wrap-all-sidebar">
                <div className="sidebar-section-logo-text container-fluid py-4">
                    <div className="row">
                        <div className="col-2 ps-0 pe-0 d-flex align-items-center">
                            <div className="wrap-sidebar-logo">
                                <img src={Logo} alt="Logo" className="logo img-fluid" />
                            </div>
                        </div>
                        <div className="col-9 ps-0 pe-0 d-flex align-items-center">
                            <p className="logo-text text-white m-0">
                                Dashboard
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sidebar-section-accordion container-fluid">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button accor-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Product
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Sub Menu
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button accor-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Customers
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Sub Menu
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button accor-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Income
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Sub Menu
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar