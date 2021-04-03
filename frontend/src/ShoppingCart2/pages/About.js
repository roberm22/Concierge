import React from 'react';
import NavBar from "../../NavBar";

export default class About extends React.Component {

    render() {

        return (
                <>
                    <NavBar/>
                    <div className="text-center mt-5">
                        <h1>About</h1>
                        <p>Something about the service. FQA</p>

                    </div>
                </>
        );
    }
}
