
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 40.416775,
                        lng: -3.703790
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAm4UeMmxfuMBGJekMGC_nE8SuePhBmkKg'
})(MapContainer);