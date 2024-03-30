import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";

export class Maps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          margin: "auto auto",
          width: "50%",
          height: "50%",
          position: "relative",
        }}
        zoom={15}
        initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
      >
        <Marker
          position={{ lat: this.props.latitude, lng: this.props.longitude }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "***************************",
})(Maps);
