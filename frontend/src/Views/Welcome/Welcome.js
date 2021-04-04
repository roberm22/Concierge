import React from 'react';
import './welcome.css'
import {Redirect} from "react-router-dom";

export default class Welcome extends React.Component {

    render() {
        return (
            <div className={"welcomeMain"}>
                {(this.props.login.conditionsAccepted === false && this.props.login.isLogged) ? (
                    <div>
                        <div className={"welcomeBox"}>
                            < h1> Welcome < /h1>
                            <p className={"welcomeP"}>
                                Concierge provides services to users around the world. Please read our Terms of Service so you understand what’s up with your use of Concierge. You agree to our Terms of Service (“Terms”) by installing, accessing, or using our apps, services, features, software, or website (together, “Services”).
                            </p>
                            <p className={"welcomeP"}>
                                About our services:
                                <ul>
                                    <li><b>Registration.</b> You must register for our Services using accurate data, provide your current mobile phone number, and, if you change it, update this mobile phone number using our in-app change number feature. You agree to receive text messages and phone calls (from us or our third-party providers) with codes to register for our Services.</li>

                                    <li><b>Devices and Software.</b> You must provide certain devices, software, and data connections to use our Services, which we otherwise do not supply. For as long as you use our Services, you consent to downloading and installing updates to our Services, including automatically.</li>

                                    <li><b>Age.</b> You must be at least 13 years old to use our Services (or such greater age required in your country for you to be authorized to use our Services without parental approval). In addition to being of the minimum required age to use our Services under applicable law, if you are not old enough to have authority to agree to our Terms in your country, your parent or guardian must agree to our Terms on your behalf.</li>
                                </ul>
                            </p>

                            <br/>
                        </div>
                        <button className={"welcomeButton"} onClick={this.props.conditions}>
                            I understand and accept the terms
                        </button>

                    </div>
                ) : (<Redirect to="/profile/"/>)}


            </div>
        );
    }

}
