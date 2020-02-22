import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

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
                        <Dashboard/>
                        <Aside/>
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

const Aside = () => {
    let menuItems = [
        { url: '/', title: 'Главная' },
        { url: '/lists', title: 'Список' },
        { url: '/dashboard', title: 'Админка' }
    ];

    return (
        <aside className="col-md-4 col-lg-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
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
        { url: '/', title: 'На сайт' },
        { url: '/dashboard?page=pages', title: 'Страницы' },
        { url: '/dashboard?page=posts', title: 'Посты' },
        { url: '/dashboard?page=plugins', title: 'Расширения' }
    ];

    return (
        <header className="App-header container-fluid dashboard">
            <div className="row">
                <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
                    <a href="/" style={{width:60}}>
                        <img src={logo} className="img-fluid  mw-60" alt="logo"/>
                    </a>
                    <ul className="navbar-nav mr-auto">
                        {menuItems.map((e, i) => (
                            <li className="nav-item" key={i}>
                                <Link className="nav-link" to={e.url}>{e.title}</Link>
                            </li>
                        ))}
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
        <main className="wrapper">
            <div className="container">
                <p>This is admin page</p>
            </div>
        </main>
    );
};

export default App;