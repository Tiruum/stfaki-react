import React, { Component } from 'react';
import $ from 'jquery';

export default class Popup extends Component {
    hidePopup = () => {
        $('#popup-alert').fadeOut(100)
        this.setState({
            trigger: false
        })
    }
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <div className="darker-background-popup" id="popup-alert">
                <div className="popup-body position-absolute top-50 start-50 translate-middle text-center pt-3">
                    <div className="header">
                        <h5 className="h5 fw-bold">Ошибка</h5>
                    </div>
                    <div className="container ps-3 pe-3">
                        <p>Пожалуйста, используйте почту @phystech.edu</p>
                    </div>
                    <div className="footer d-flex justify-content-around row flex-wrap">
                        {/* <div className="col-6 fw-bolder text-danger footer-button pt-2 pb-2" id="popup-delete">Удалить</div> */}
                        <div className="col-12 fw-bolder text-faki footer-button pt-2 pb-2" id="popup-close" onClick={this.hidePopup}>Закрыть</div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}