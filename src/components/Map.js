import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({ center,zoom }) => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng}/>
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center:{
        lat:9.9816,
        lng:76.2999
    },
    zoom:11
}


export default Map

