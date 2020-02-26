import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {

    let menuItems = [
        {url: '/', title: 'Главная'},
        {url: '/lists', title: 'Список'},
        {url: '/dashboard', title: 'Админка'}
    ];

    console.log(props);
    // if (props.match.path === '/dashboard') {
    {
        menuItems.map(item => {
            if (item.url === '/dashboard')
                console.log(item.url);
            // item.push('asd');
            return 0;
        })
    }
    // }

    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                    {menuItems.map((e, i) => (
                        <li className="nav-item" key={i}>
                            <Link className="nav-link" to={e.url}>{e.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header