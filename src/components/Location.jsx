import Map from './Map';
import React, {useMemo} from 'react';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';


function Location() {


  return (
    <div className='location'>
        <div>
          <Map/>
        </div>
        <div>
            <p>205 w 2nd St. Duluth MN, 55802 Suite 335</p>
        </div>
    </div>
  )
}

export default Location