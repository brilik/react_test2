import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    let menuItems = [
        {url: '/', title: 'Главная'},
        {url: '/lists', title: 'Список'},
        {url: '/dashboard', title: 'Админка'}
    ];

    return (
        <footer className="App-header">
            <ul className="nav justify-content-center">
                {menuItems.map((e, i) => (
                    <li className="nav-item" key={i}>
                        <Link className="nav-link" to={e.url}>{e.title}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;