import React from 'react';
import logoToSuit from './assets/img/logo.svg';
import logoToPages from './assets/img/page.svg';
import logoToPosts from './assets/img/posts.svg';
import logoToAdvance from './assets/img/advance.svg';
import logoToUsers from './assets/img/users.svg';
import logoToShop from './assets/img/products.svg';
import logoToOptions from './assets/img/options.svg';
import logoToExit from './assets/img/exit.svg';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import styled from 'styled-components';
import './assets/css/custom.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    <Route exact path="/lists">
                        <Header/>
                        <Lists/>
                    </Route>
                    <Route exact path="/dashboard">
                        <HeaderDashboard/>
                        <div className="float-left">
                            <AsideDashboard/>
                        </div>
                        <div className="container float-right">
                            <div className="row">
                                <Dashboard/>
                            </div>
                        </div>
                        <TemplateVerion/>
                    </Route>
                    <Route exact path="/dashboard/*">
                        <HeaderDashboard/>
                        <AsideDashboard/>
                        <div className="container">
                            <div className="row">
                                <Dashboard/>
                            </div>
                        </div>
                        <TemplateVerion/>
                    </Route>
                    <Route exact to="*">
                        <Header/>
                        <NonFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

const NonFound = () => (
    <main className="wrapper">
        <div className="container">
            <div className="alert alert-danger">
                <h1 className="not-found--title">ERROR #404</h1>
                <p>Ooops... Page not found!</p>
                <p>Please return to <Link to="/">main page</Link> or to: </p>
                <Footer/>
            </div>
        </div>
    </main>
);

const AsideDashboard = () => {
    let menuItems = [
        { url: '/dashboard/users/add', title: 'Создать пользователя' },
        { url: '/dashboard/products/add', title: 'Создать товар' },
        { url: '/dashboard/posts/add', title: 'Создать пост' },
        { url: '/dashboard/pages/add', title: 'Создать страницу' }
    ];

    return (
        <aside className="bg-dark float-left">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {(menuItems.map((e,i) => (
                    <a key={i} className="nav-link" href={e.url}>{e.title}</a>
                )))}
            </div>
        </aside>
    );
};

const Footer = () => {
    let menuItems = [
        { url: '/', title: 'Главная' },
        { url: '/lists', title: 'Список' },
        { url: '/dashboard', title: 'Админка' }
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

const HeaderDashboard = () => {

    let menuItems = [
        { url: '/', title: 'На сайт', logo: logoToSuit },
        { url: '/dashboard/pages', title: 'Страницы', logo: logoToPages },
        { url: '/dashboard/posts', title: 'Посты', logo: logoToPosts },
        { url: '/dashboard/products', title: 'Продукция', logo: logoToShop },
        { url: '/dashboard/plugins', title: 'Расширения', logo: logoToAdvance },
        { url: '/dashboard/users', title: 'Пользователи', logo: logoToUsers },
        { url: '/dashboard/options', title: 'Настройки', logo: logoToOptions }
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

const Header = (props) => {

    let menuItems = [
        { url: '/', title: 'Главная' },
        { url: '/lists', title: 'Список' },
        { url: '/dashboard', title: 'Админка' }
    ];

    console.log(props);
    // if (props.match.path === '/dashboard') {
        {menuItems.map(item => {
            if (item.url === '/dashboard')
                console.log(item.url);
                // item.push('asd');
            return 0;
        })}
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

const Lists = () => (
    <main className="wrapper">
        <div className="container">
            <div className="list">
                <div className="list-title">
                    <p>Полный список: </p>
                </div>
                <div className="row list-wrap">
                    <div className="col list-item">
                        <img src="/" alt="logo" className="list-item__logo"/>
                        <span className="list-item__title">Test #1</span>
                        <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque beatae deserunt, dignissimos dolore dolorem harum labore molestiae necessitatibus numquam perspiciatis quasi quibusdam quidem quis, sed sequi soluta ut voluptates?</p>
                    </div>
                    <div className="col list-item">
                        <img src="/" alt="logo" className="list-item__logo"/>
                        <span className="list-item__title">Test #2</span>
                        <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aut consectetur error esse ipsum labore maxime minima nemo neque non obcaecati officiis placeat quibusdam ratione, rem sint sit ut?</p>
                    </div>
                    <div className="col list-item">
                        <img src="/" alt="logo" className="list-item__logo"/>
                        <span className="list-item__title">Test #3</span>
                        <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut, beatae culpa cupiditate dignissimos dolore eos est impedit, in iure laudantium libero molestias optio quibusdam repudiandae saepe ullam unde veniam?</p>
                    </div>
                    <div className="col list-item">
                        <img src="/" alt="logo" className="list-item__logo"/>
                        <span className="list-item__title">Test #4</span>
                        <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore odio quibusdam suscipit! Ad aliquam est et magnam maiores minus nam neque non nulla odio praesentium quae quia quidem, sequi suscipit.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

const Home = () => {
    return (
        <main className="wrapper">
            <div className="container">
                <p>Это главная страница</p>
            </div>
        </main>
    );
};
const Dashboard = () => {
    return (
        <main className="col-md-8 col-lg-9">
            <p>This is admin page</p>
        </main>
    );
};

const TemplateVerion = () => {
    let version = '1.0.1';

    const Ver = styled.div`
        position: absolute;
        right: 20px;
        bottom: 0;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        mix-blend-mode: difference;
        color: red;
        padding: 5px 10px;
    `;

    return (
        <Ver className="version">
            <p>Версия {version}</p>
        </Ver>
    );
};

export default App;