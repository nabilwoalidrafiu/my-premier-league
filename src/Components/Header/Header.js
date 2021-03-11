import React from 'react';
import Premier from '../../Photo/Premier.png';
import stadium from '../../Photo/stadium.jpg';
import css from '../Header/Header.css'

const Header = () => {
    return (
        <div className="demo-wrap d-flex justify-content-center align-items-center">
            <img className="demo-bg" src={stadium} alt=""></img>
            <div className="demo-content">
                <img class="premier img-fluid" src={Premier} alt=""/>
            </div>
        </div>
       
    );
};

export default Header;