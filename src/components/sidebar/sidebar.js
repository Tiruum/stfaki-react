import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const ProfileBar = ({pro}) => {
    const { username, email, profilePic } = pro;
    // useEffect(() => {console.log(username)}, [username]);
    if (username) {
        return (
            <div className="dropup border-bottom">
                <a href="/" className="d-flex ps-3 pt-3 fs-5" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <img src={profilePic} alt="ProfilePic" className="img img-fluid rounded-circle me-2" id="userPicture"/><div className="d-flex flex-column"><p className="p-0 m-0">{username}</p><p className="text-muted fs-6"><small>{email}</small></p></div>
                </a>
                <div className="dropdown-menu" role="menu" aria-labelledby="profileDropdown">
                    <a className="dropdown-item" href="/">Пополнить счет</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Выйти</a>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="border-bottom">
                <Link to={`/login/`} className="d-flex ps-3 pt-3 fs-5" type="button" id="dismiss">
                        <div className="img img-fluid bg-secondary rounded-circle d-block me-2" id="userPicture"></div><div className="d-flex flex-column">Зарегистрируйтесь<p className="text-muted fs-6"><small>example@phystech.edu</small></p></div>
                </Link>
            </div>
        )
    }
}

const Sidebar = ({ data }) =>  {
    const { username, email, profilePic } = data;

    return (
    <div>
        <div className="wrapper position-relative">
        <nav id="sidebar">
            {/* <div className="position-absolute top-0 end-0 p-2 rounded" id="dismiss">
                <i className="bi bi-x text-dark display-4"></i>
            </div> */}

    
            <ProfileBar pro = {{username, email, profilePic}} />
    
            <ul className="list-unstyled components d-flex flex-column border-bottom mt-3" id="sidebar-item-list">
                <li>
                    <a href="#dormSubmenu" className="d-flex ps-3 fs-5" data-bs-toggle="collapse" role="button"
                        aria-expanded="true"><p className="m-1 ms-0"><i className="fa-solid fa-house-chimney"></i> Общежития</p></a>
                    <div className="collapse show" id="dormSubmenu">
                        <ul className="list-unstyled mb-3">
                            <li className="active"><a href="/" className="d-inline ps-4">Долгопрудный</a></li>
                            <li><a href="/" className="d-inline ps-4">Жуковский</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#roomSubmenu" className="d-flex ps-3 fs-5" data-bs-toggle="collapse"
                        aria-expanded="true"><p className="m-1 ms-0"><i className="fa-solid fa-user"></i> Общие комнаты</p></a>
                    <ul className="collapse show list-unstyled mb-3" id="roomSubmenu">
                        <li><a href="/" className="d-inline ps-4">Клуб Романтики</a></li>
                        <li><a href="/" className="d-inline ps-4">КДС</a></li>
                        <li><a href="/" className="d-inline ps-4">Гладильня</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#serviceSubmenu" className="d-flex ps-3 fs-5" data-bs-toggle="collapse"
                        aria-expanded="true"><p className="m-1 ms-0"><i className="bi bi-archive-fill"></i> Услуги</p></a>
                    <ul className="collapse show list-unstyled mb-3" id="serviceSubmenu">
                        <li><a href="/" className="d-inline ps-4">Пылесос</a></li>
                        <li><a href="/" className="d-inline ps-4">Инструментарий</a></li>
                    </ul>
                </li>
            </ul>
            <div className="border-top position-absolute bottom-0 container-fluid p-2 bg-white">
                <div className='container d-inline-flex'>
                    <a href="https://vk.com/astech_mipt" target="_blank" rel="noopener noreferrer" className='d-inline'><i className="fa fa-vk fs-1"></i></a>
                    <a href="https://www.instagram.com/astech_mipt/" target="_blank" rel="noopener noreferrer" className='d-inline ms-2'><i className="fa fa-instagram fs-1"></i></a>
                </div>
            </div>
        </nav>
        <button className="btn btn-link text-dark bg-white position-fixed top-0 start-0 display-5 rounded-circle ms-1 mt-1 p-0" id="sidebarCollapse"><i className="bi bi-list fs-1 position-absolute top-50 start-50 translate-middle"></i></button>
    
        {/* <!-- Page Content Holder --> */}
    
    </div>
    <div className="darker-background"></div>
</div>
    )
};

export default Sidebar;