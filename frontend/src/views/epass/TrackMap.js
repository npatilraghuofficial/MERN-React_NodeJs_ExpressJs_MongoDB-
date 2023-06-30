import React from 'react';
import './TrackMap.css';
import WrappedMap from './gMap/Map';
import config from './gMap/config';
import useFetch from './hooks/useFetch';
import Header from './MapTrackHeader/Header';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';



function TrackMap() {
  
  const { data: paths} = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/path');
  const { data: stops } = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/stops');
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.mapsKey}`;
  
  return (
    <div className="App">
      
      <Header/>
      {/* <input type="text"></input>
      <input type="text"></input> */}
      
      { paths && stops ?
        <WrappedMap
            paths={paths}
            stops={stops}
            googleMapURL={mapURL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className='mapContainer'  />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          : 
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        }
    </div>
  );
}

export default TrackMap;
