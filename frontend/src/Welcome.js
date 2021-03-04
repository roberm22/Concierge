import React from 'react';

export default class Welcome extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {
        return (
            <div>

                <h1>Bienvenido</h1>
                <ul>
                    <li>TOS</li>
                    <li>INFO</li>
                </ul>
                <button onClick={this.props.conditionsAccepted}>Acepto</button>

            </div>
        );
    }

}
