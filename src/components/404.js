import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';

const NonFound = () => {
    return(
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
};

export default NonFound;