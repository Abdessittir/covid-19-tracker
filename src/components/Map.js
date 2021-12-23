import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          center={{
            lat:parseFloat(this.props.lat)||59.95,
            lng: parseFloat(this.props.lng) || 30.33
          }}
          key={""}
          defaultZoom={6}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

///*bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}