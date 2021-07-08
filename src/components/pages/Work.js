import React from 'react';

export default function Work() {
    return (
        <div className="container-fluid">
            <div className="col-12">
                <div className="card bg-dark text-white" id="mostRecent">
                    <a className="stretched-link" href="https://cohoots.herokuapp.com/" target="_blank">
                        <img src="Assets/cohoots_shirts.jpg" className="card-img" alt="t-shirts folded"></img>
                    </a>
                    <div className="card-img-overlay">
                        <h3 className="card-title">CoHoots</h3>
                        <p className="card-text">Handlebars, Sequelize, CSS, and JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card bg-dark text-white">
                        <a className="stretched-link" href="https://github.com/BraxB/Good_README" target="_blank">
                            <img className="card-img" src="Assets/surf.jpg" alt="good readme generator link with placeholder image of water"></img>
                        </a>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Good README Generator</h3>
                            <p className="card-text">HTML, CSS, NodeJS</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card bg-dark text-white">
                        <a className="stretched-link" href="https://sranson.github.io/recipe-finder/" target="_blank">
                            <img className="card-img" src="Assets/drinks_and_food_on_bar.jpg" alt="food and alcoholic beverages"></img>
                        </a>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Recipe Finder</h3>
                            <p className="card-text">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card bg-dark text-white">
                        <a className="stretched-link" href="https://braxb.github.io/weather-report/" target="_blank">
                            <img className="card-img" src="Assets/weather_report.jpg" alt="clouds"></img>
                        </a>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Weather Report</h3>
                            <p className="card-text">HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card bg-dark text-white">
                        <a className="stretched-link" href="https://braxb.github.io/schedule/" target="_blank">
                            <img className="card-img" src="Assets/scheduler.png" alt="day scheduler app"></img>
                        </a>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Weather Report</h3>
                            <p className="card-text">JavaScript and JQuery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}