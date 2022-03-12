import React from "react";
import './main.css';
import Footer from '../footer/footer'
import MiptLogo from './miptLogo.svg'
import DasrLogo from './dasrLogo.svg'

const Main = () => {
    return (
        <React.Fragment>
        <div className="container-fluid w-75 text-white">
            <section className="vh-100 position-relative">
                <div className="row d-flex justify-content-between d-inline-block position-absolute top-50 start-0 translate-middle-y">
                    <div className="col-lg-12 d-lg-block d-md-block d-sm-block d-block my-auto">
                        <p className="fs-1 fw-300 mb-5">Студенческий совет</p>
                        <h1 className="display-1 fw-bold">ФАКТ SP<img src={DasrLogo} className="my-auto" id="dasrLogo" alt="DasrLogo" />CE</h1>
                        <p className="fs-3 fw-300 mb-5"><img src={MiptLogo} id="miptLogo" alt="MiptLogo" /></p>
                        <button type="button" className="btn btn-outline-light fw-bolder text-capitalize btn-lg mt-5">Зарегистрироваться</button>
                    </div>
                    <div className="col-lg-0 d-lg-block d-md-none d-sm-none d-none">
                    </div>
                </div>
            </section>
        </div>
        <div className="container mt-0 p-4 bg-white rounded-1em box-shadow mb-5" id="main-container">
            <div className="container">
                <h3 className="h3 d-block">Здесь вы можете записаться в</h3>
                <div className="row d-flex mt-2 g-3">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="rounded-1em border">
                            <div className="row g-0">
                                <div className="col-md-4 d-block">
                                    <div data-src="wash" className="cover rounded-start-1em h-100"></div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-400">Стиральная комната</h5>
                                        <p className="card-text fw-300">Можно выбрать дату и время для записи в шесть стиральных машин.</p>
                                        <button className="btn btn-primary btn-sm text-capitalize p-2 ps-4 pe-4">Записаться</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="rounded-1em border">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div data-src="common" className="cover rounded-start-1em h-100"></div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-400">Общие комнаты</h5>
                                        <p className="card-text fw-300">Можно выбрать дату и время для записи в клуб Романтики, КДС или комнату для созвонов.</p>
                                        <button className="btn btn-primary btn-sm text-capitalize p-2 ps-4 pe-4">Записаться</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </React.Fragment>
    );
}

export default Main;