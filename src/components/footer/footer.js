import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import DasrLogo from '../main/dasrLogo.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer className="border-top box-shadow" style={{backgroundColor: '#eff5f9'}}>
                <div className="container d-flex flex-wrap justify-content-between align-items-center py-3">
                    <div className="col-md-6 d-flex align-items-center">
                        <Link to={'/'} className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg src={DasrLogo} className="bi" width="30" height="24"></svg>
                        </Link>
                        <span className="text-muted">© 2021 Студсовет ФАКТ (г. Долгопрудный)</span>
                    </div>
                
                    <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted fs-3" href="https://www.instagram.com/astech_mipt/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="ms-3"><a className="text-muted fs-3" href="https://vk.com/astech_mipt"><i className="fa-brands fa-vk"></i></a></li>
                    </ul>
                </div>
            </footer>
        )
    };
};