import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';

const AnyReactComponent = ({
  text,
  lat,
  lng,
}: {
  text: string;
  lat: number;
  lng: number;
}) => <div>{text}</div>;

interface Props {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

class GoogleMap extends Component<Props> {
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
      <div style={{ height: '360px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
          }}
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
