import React from 'react'

const CssGrid = () => {

    return (
        <div className="test-wrapper">
            <div className="test-header">
                <ul>
                    <li><a href="#">hello</a></li>
                    <li><a href="#">grid</a></li>
                    <li><a href="#">css</a></li>
                </ul>
            </div>
            <div className="test-nav">
                <ul>
                    <li><a href="#">add</a></li>
                    <li><a href="#">edit</a></li>
                    <li><a href="#">remove</a></li>
                </ul>
            </div>
            <div className="test-content">
                <h1>hello world</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, molestiae nesciunt nostrum omnis
                    quisquam tenetur veniam! Aliquid aspernatur beatae consequuntur corporis ea eveniet fugiat hic ipsum
                    laboriosam, libero quas, ullam?</p>
            </div>
        </div>
    );
};

export default CssGrid