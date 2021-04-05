import React from "react";
import NavBar from "../../Views/NavBar";


export default class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0
        };
    }


    render() {
        let points;
        if (this.props.login.isLogged) {
            points = this.props.client.profile.points;
        } else {
            points = 0;
        }
        return (
            <div>
                <NavBar
                    points={this.state.points + points}
                    isLogged={this.props.login.isLogged}
                />

                <div className="main-content" id="mainInfoRoom">
                    <article className="firstArticle">
                        <p>Contenido de chekout</p>
                        <a href={"https://www.nh-hotels.com/experience/nh-hotels/leaving?_ga=2.224250008.2006073737.1617606959-1168088920.1617606959&_gl=1*13t2x5k*_ga*MTE2ODA4ODkyMC4xNjE3NjA2OTU5*_ga_MVZ849Q3BV*MTYxNzYwNjk1OS4xLjEuMTYxNzYwNjk3Mi40Nw.."}>
                            Referencia
                        </a>
                    </article>

                </div>
            </div>
        );
    }
}
