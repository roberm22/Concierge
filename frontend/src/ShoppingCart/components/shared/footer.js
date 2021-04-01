import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className={`footer  mt-5 p-3`} style={{
                textAlign: 'center', width: '100%', padding: '10px'
            }}>

                2020 &copy; Concierge

            </footer>
        );
    }
}
