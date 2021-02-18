import React, {Component} from 'react';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home__text-box">
                    <h1 className="title">
                        <span className="title--main">Organic Vegan</span>
                        <span className="title--sub">Skin Care Products Australia</span>
                    </h1>
                    <button className="btn btn--animation">Shop Now</button>
                </div>
            </div>
        )
    }
}

export default Home;