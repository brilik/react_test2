import React from "react";

const AsideDashboard = (props) => {

    console.log(props);

    let menuItems = [
        {url: '/dashboard/pages', title: 'Все страницы'},
        {url: '/dashboard/pages/add', title: 'Создать страницу'},
    ];

    return (
        <div className="container">
            <div className="row">
                <aside>
                    <ul className="menu cf">
                        {menuItems.map((e,i) => (
                            <li key={i} className="col-sm-3">
                                <a href={e.url}>{e.title}</a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default AsideDashboard;