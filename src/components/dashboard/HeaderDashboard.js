import React from 'react';
import {Link} from 'react-router-dom';
import logoToSuit from "../../assets/img/logo.svg";
import logoToPages from "../../assets/img/page.svg";
import logoToPosts from "../../assets/img/posts.svg";
import logoToShop from "../../assets/img/products.svg";
import logoToComments from "../../assets/img/comment3.svg";
import logoToAdvance from "../../assets/img/advance.svg";
import logoToUsers from "../../assets/img/users.svg";
import logoToOptions from "../../assets/img/options.svg";
import logoToExit from "../../assets/img/exit.svg";

const HeaderDashboard = () => {

    let menuItems = [
        {url: '/', title: 'На сайт', logo: logoToSuit},
        {url: '/dashboard/pages', title: 'Страницы', logo: logoToPages},
        {url: '/dashboard/posts', title: 'Посты', logo: logoToPosts},
        {url: '/dashboard/products', title: 'Продукция', logo: logoToShop},
        {url: '/dashboard/comments', title: 'Коментарии', logo: logoToComments},
        {url: '/dashboard/plugins', title: 'Расширения', logo: logoToAdvance},
        {url: '/dashboard/users', title: 'Пользователи', logo: logoToUsers},
        {url: '/dashboard/options', title: 'Настройки', logo: logoToOptions}
    ];

    return (
        <header className="App-header container-fluid dashboard">
            <div className="row">
                <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto">
                        {menuItems.map((e, i) => (
                            <li className="nav-item" key={i}>
                                <Link className="nav-link" to={e.url}>
                                    <img src={e.logo} className="img-fluid  mw-60" alt="logo"/>
                                    <span>{e.title}</span>
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <img src={logoToExit} className="img-fluid  mw-60" alt="logo"/>
                                <span>Exit</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderDashboard;