import React from 'react'

const Lists = () => {
    return (
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
                            <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto atque beatae deserunt, dignissimos dolore dolorem harum labore molestiae
                                necessitatibus numquam perspiciatis quasi quibusdam quidem quis, sed sequi soluta ut
                                voluptates?</p>
                        </div>
                        <div className="col list-item">
                            <img src="/" alt="logo" className="list-item__logo"/>
                            <span className="list-item__title">Test #2</span>
                            <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                                aut consectetur error esse ipsum labore maxime minima nemo neque non obcaecati officiis
                                placeat quibusdam ratione, rem sint sit ut?</p>
                        </div>
                        <div className="col list-item">
                            <img src="/" alt="logo" className="list-item__logo"/>
                            <span className="list-item__title">Test #3</span>
                            <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                                aut, beatae culpa cupiditate dignissimos dolore eos est impedit, in iure laudantium libero
                                molestias optio quibusdam repudiandae saepe ullam unde veniam?</p>
                        </div>
                        <div className="col list-item">
                            <img src="/" alt="logo" className="list-item__logo"/>
                            <span className="list-item__title">Test #4</span>
                            <p className="list-item__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Inventore odio quibusdam suscipit! Ad aliquam est et magnam maiores minus nam neque non
                                nulla odio praesentium quae quia quidem, sequi suscipit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Lists