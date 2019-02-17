import React from 'react';
import './home-page-card.css';
import logo from '../../img/logo.svg';

const HomePageCard = () => {
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={logo} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Разогреться</h5>
                    <p className="card-text">Сделать несколько лёгких упражнений. Чтобы разогреть тело перед основными упражнениями.</p>
                    <a href="#" className="btn btn-primary">Приступить</a>
                </div>
            </div>
        </div>
    );
};

export default HomePageCard;