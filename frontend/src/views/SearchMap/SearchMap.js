import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { Row, Col } from 'react-bootstrap'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const center = { lat: 12.971599, lng: 77.594566 }

function SearchMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "APIKEY",

    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.TRANSIT,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  //   function clearRoute() {
  //     setDirectionsResponse(null)
  //     setDistance('')
  //     setDuration('')
  //     originRef.current.value = ''
  //     destiantionRef.current.value = ''
  //   }

  return (
    <>
      <div>
        <Row >
          <Col className="md-4 sm-6">
            <Autocomplete>
              <Input type='text'
                className='form-control'
                placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Col>
          <Col className="md-4 sm-6" >

            <Autocomplete>
              <Input
                className='form-control'
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Col>
        </Row>

        <Row>

          <Col className="md-2 ">
            <Col className="md-2 ">

              <Input
                type='text'
                className='form-control'
                placeholder='Distance in KM'
                value={distance}
              />
            </Col>

           
            <hr></hr>
          </Col>

          <Col className="md-2">
          <Input
              type='text'
              className='form-control'
              placeholder='Duration'
              value={duration}      ></Input>

            <Button colorScheme='green' className='btn btn-success' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
          </Col>

        </Row>



      </div>
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='100vh'
        w='100vw'
      >



        {/* <input value={distance}>di</input> */}



        {/* <P> Distance: {distance} Duration: {duration}< */}


        <hr>
        </hr>



        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            showDirections: true,
            directionsDisplay: true,
            showDirections: true,

          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}



        </GoogleMap>


        {/* <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete> */}


        {/*     
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete> */}

        {/* <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete> */}


        {/* <Button type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
           
          
          <p>Distance: {distance} </p>
          <p>Duration: {duration} </p>
          */}
      </Flex>
    </>
  )
}

export default SearchMap
