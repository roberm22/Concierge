import React from 'react';
import './welcome.css'

export default class Welcome extends React.Component {


    render() {
        return (
            <div className={"welcome"}>

                <h1>Bienvenido</h1>
                <p>
                    Aqui iria una breve intro a las condiciones del servicio
                </p>
                <p>
                    Aqui informacion sobre lo que ofrece y como se usa el servicio
                </p>

                <br/>
                <ul className={"welcomeUl"}>
                    <li>
                        <button onClick={this.props.conditions}>Entiendo y acepto las condiciones</button>
                    </li>
                </ul>

            </div>
        );
    }

}
