import React from "react";
import logo from '../../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


import '../../App.css';
const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light shadow-lg justify-content-between">
                <img className="img-fluid" width="149px" height="36.5px" src={logo}/>
                    <a className="stretched-link text-dark text-decoration-none" href=""><FontAwesomeIcon icon={faCircleUser} />Tổng đài hỗ trợ</a>
            </nav>
        </div>

    )
}
export default Header;