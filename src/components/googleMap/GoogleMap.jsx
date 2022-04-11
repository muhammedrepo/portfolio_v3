import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "./mapStyles";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 6.524379,
      lng: 3.379206,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "360px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAwO9Q7xtEzR4U-RFK5EXNK9nd9BQN-RIg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            styles: mapStyles,
          }}
        >
          <AnyReactComponent lat={6.524379} lng={3.379206} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
