import React from 'react';

import {Link} from "react-router-dom";

export default class login extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página main */

    render() {
        return (
            <div>
                <h3>User:</h3>
                <input type="text"
                       value= {this.props.login.userAnswer || ''}
                       onChange={(event)=>this.props.onUserAnswer(event.target.value)}/>
                <h3>Password:</h3>
                <input type="text"
                       value={this.props.login.passwordAnswer || ''}
                       onChange={(event)=>this.props.onPasswordAnswer(event.target.value)}/>

                <p>(falta logica del boton)</p>
                <button onClick={this.props.click}> Submit </button>
                <Link to="/profile/">Profile</Link>

                {console.log(this.props.login)}
            </div>
        );
    }
}
